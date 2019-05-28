
export default class CDTSCommonHtmlGenerators{

    static generateHtmlAnchor(url:String, text:String, lang?:String): String {
        return `<a ${ lang != undefined ? `lang="${lang}" `:''}href="${url}">${text}</a>`
    }
}