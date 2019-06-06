
export default class CDTSCommonHtmlGenerators {

    public static generateHtmlAnchor(url: string, text: string, lang?: string): string {
        return `<a ${lang !== undefined ? `lang="${lang}" ` : ""}href="${url}">${text}</a>`;
    }
}
