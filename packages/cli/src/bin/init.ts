import chalk from 'chalk'
import path from 'path'
import fse from 'fs-extra'
import commander from 'commander'
import { rc } from '../default/rc'
import mockQuestion from '../inquirer/questions/mock'
import apiQuestion, { chooseApi } from '../inquirer/questions/api'
import { source } from '../inquirer/questions/core'
import freeSwagger, { mock } from 'free-swagger-puls'
import { pick } from 'lodash'
import { prompt } from '../inquirer'

export function init(): void {
  const packageJsonPath = path.resolve(__dirname, '../../package.json')
  const pkg = JSON.parse(fse.readFileSync(packageJsonPath, 'utf-8'))
  commander
    .version(pkg.version)
    .usage('')
    .option('-r --reset', '重置为默认配置', () => {
      rc.reset()
      console.log(chalk.green('重置配置项成功'))
    })
    .option('-s --show', '显示当前配置', () => {
      rc.print()
    })
    .option('-e --edit', '修改当前配置', () => {
      rc.edit()
    })
    .option('-m --mock', '全量生成 mock 数据', async () => {
      await prompt(mockQuestion)
      await mock(rc.createMockParams())
    })
    .option('-c, --config', '以配置项启动 free-swagger-cli', async () => {
      await prompt(apiQuestion)
      await freeSwagger(rc.createFreeSwaggerParams(), {
        onChooseApi: async ({ paths }) =>
          pick(paths, ...(await chooseApi(paths))),
      })
    })
    // 无参数启动
    .action(async ({ rawArgs }) => {
      if (!global.__DEV__ && rawArgs[2]) return
      await prompt([source])
      await freeSwagger(rc.createFreeSwaggerParams())
    })
    .allowUnknownOption()
    .parse(process.argv)
}
