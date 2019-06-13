import CDTSCommonHtmlGenerators from "../../../src/CDTS/CDTSCommonHtmlGenerators";

const validHtmlAnchorWithLang = `<a lang="en" href="https://google.com">Google</a>`;
const validHtmlAnchorWithOutLang = `<a href="https://google.com">Google</a>`;
test("CDTSCommonHtmlGenerators - generateHtmlAnchor - Returns valid HTML anchor string based on passed in parameters",
    () => {
        const lang = "en";
        const text = "Google";
        const url = "https://google.com";
        let returnedHtml = CDTSCommonHtmlGenerators.generateHtmlAnchor(url, text, lang);
        expect(returnedHtml).toContain(validHtmlAnchorWithLang);
        returnedHtml = CDTSCommonHtmlGenerators.generateHtmlAnchor(url, text);
        expect(returnedHtml).toContain(validHtmlAnchorWithOutLang);
    });
