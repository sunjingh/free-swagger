import path from 'path'
import os from 'os'
import fse from 'fs-extra'
import prettier from 'prettier'
import { pick, mergeWith } from 'lodash'
import { EOL } from 'os'
import { jsTemplate, tsTemplate } from 'free-swagger-core-next'
import {
  DEFAULT_CUSTOM_IMPORT_CODE_JS,
  DEFAULT_CUSTOM_IMPORT_CODE_TS,
  DEFAULT_MOCK_CONFIG,
  MockConfig,
  ApiConfig,
  getDefaultParams,
} from 'free-swagger-next'
import { execSync } from 'child_process'
import camelcase from 'camelcase'

type ConfigType = 'core' | 'api' | 'mock'

const MODULE_EXPORTS = 'module.exports ='
const EXPORT_DEFAULT = 'export default'

export interface RcConfig {
  core: Pick<
    Required<ApiConfig<string>>,
    'source' | 'lang' | 'jsDoc' | 'templateFunction' | 'typeOnly'
  > & {
    tsTemplate: string
    jsTemplate: string
  }
  api: Pick<Required<ApiConfig<string>>, 'root' | 'cookie' | 'header'> & {
    previousSource: string
    apiChoices: { name: string; checked: boolean }[]
    shouldEditTemplate: boolean
    headerJs: string
    headerTs: string
  }
  mock: Omit<MockConfig, 'source'>
}

class Rc {
  path: string
  configData: RcConfig

  constructor() {
    this.path = path.resolve(os.homedir(), '.free-swaggerrc.js')
    fse.ensureFileSync(this.path)
    let rcConfig
    try {
      rcConfig = require(this.path) as RcConfig
    } catch (e) {
      // 兼容
      const content = fse.readFileSync(this.path, 'utf-8') || '{}'
      fse.writeFileSync(
        this.path,
        content.replace(EXPORT_DEFAULT, MODULE_EXPORTS)
      )
      rcConfig = require(this.path) as RcConfig
    }
    this.configData = {
      ...this.getDefaultConfig(),
      ...rcConfig,
    }
    this.assignTemplate()
  }

  // 合并用户通过 free-swagger-cli -e 手动编辑的模版
  assignTemplate() {
    const { templateFunction, lang } = this.configData.core
    if (lang === 'js') {
      this.merge({ jsTemplate: templateFunction.toString() })
    } else {
      this.merge({ tsTemplate: templateFunction.toString() })
    }
    this.save()
  }

  // 获取默认 rc 参数
  getDefaultConfig(): RcConfig {
    return {
      core: {
        ...pick(getDefaultParams(), [
          'lang',
          'jsDoc',
          'templateFunction',
          'typeOnly',
        ]),
        source: 'https://petstore.swagger.io/v2/swagger.json',
        jsTemplate,
        tsTemplate,
      },
      api: {
        ...pick(getDefaultParams(), ['root', 'header']),
        cookie: 'session=MY_SESSION',
        previousSource: '',
        apiChoices: [],
        shouldEditTemplate: false,
        headerJs: DEFAULT_CUSTOM_IMPORT_CODE_JS,
        headerTs: DEFAULT_CUSTOM_IMPORT_CODE_TS,
      },
      mock: DEFAULT_MOCK_CONFIG,
    }
  }

  // 从 rc 文件中生成 free-swagger-core 参数
  createFreeSwaggerParams(
    { core, api }: RcConfig = this.configData
  ): Required<ApiConfig> {
    const { lang } = core
    const { headerJs, headerTs } = api
    return {
      ...pick(core, [
        'source',
        'lang',
        'jsDoc',
        'templateFunction',
        'typeOnly',
      ]),
      ...pick(api, ['root', 'cookie']),
      filename: (name) => camelcase(name),
      header: lang === 'ts' ? headerTs : headerJs,
    }
  }

  // 从 rc 文件中生成 mock 参数
  createMockParams({ mock, core }: RcConfig = this.configData): MockConfig {
    return {
      ...pick(core, ['source']),
      ...mock,
    }
  }

  // 合并配置项
  merge(answer: Record<string, any>, type: ConfigType = 'core'): void {
    // @ts-ignore
    this.configData[type] = mergeWith(
      this.configData[type],
      answer,
      (old, now) => {
        if (now == null) return old
      }
    )
  }

  private stringifyConfigData(rcConfig: RcConfig): string {
    const data = JSON.stringify(rcConfig)
    // hack: 由于 JSON.stringify 不能保存函数，这里手动将函数拼接并写入 rc 文件
    // 去除尾部分号，否则会报词法错误
    let templateFunction = this.configData.core.templateFunction
      ?.toString()
      .replace(EOL, '')
      .trim()
    if (templateFunction?.endsWith(';')) {
      templateFunction = templateFunction.slice(0, templateFunction.length - 1)
    }
    const functionCode = `templateFunction: ${templateFunction}`
    const index = data.search(/"source"/)
    if (index === -1) {
      throw new Error(
        '找不到 source 属性，运行 free-swagger-cli -r 重置 rc 文件'
      )
    }
    const prevCode = data.slice(0, index)
    const afterCode = data.slice(index, data.length)
    return prettier.format(
      `${MODULE_EXPORTS} ${prevCode} ${functionCode}, ${afterCode}`,
      {
        parser: 'babel',
      }
    )
  }

  // 将配置项存储至 rc 文件
  save(targetPath = this.path): void {
    const code = this.stringifyConfigData(this.configData)
    fse.writeFileSync(targetPath, code)
  }

  // 记录当前 source 和之前的 source
  // 对比两者判断是否需要清空用户选择的 api 缓存记录
  recordHash(newSource: string): void {
    this.configData.api.previousSource = this.configData.core.source
    this.configData.core.source = newSource
  }

  // 是否清空用户选择的 api 缓存记录
  shouldRefreshCache(): boolean {
    return this.configData.api.previousSource !== this.configData.core.source
  }

  // 重置为默认配置项
  reset(): void {
    this.configData = this.getDefaultConfig()
    fse.unlinkSync(this.path)
    this.save()
  }

  // 查看配置项
  print(): void {
    console.log(this.configData)
  }

  // 打开编辑器编辑模版
  edit(): void {
    console.log(`code ${this.path}`)
    execSync(`code ${this.path}`, { stdio: 'inherit' })
  }
}

export const rc = new Rc()
