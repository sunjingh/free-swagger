// format 不规范的 json
export default (string)=>{
    if (typeof string !== 'string') {
        console.error('请传入string')
        return {}
    }
    let scopedData = {}
    try {
        return JSON.parse(string)
    } catch {
        string = `scopedData.$JSON = ${string}`
        try {
            eval(string)
        } catch {
            return {}
        }
        return scopedData.$JSON
    }
}
