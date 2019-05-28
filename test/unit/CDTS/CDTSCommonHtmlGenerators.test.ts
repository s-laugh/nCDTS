import CDTSCommonHtmlGenerators from '../../../src/CDTS/CDTSCommonHtmlGenerators';

var validHtmlAnchorWithLang = `<a lang="en" href="https://google.com">Google</a>`
var validHtmlAnchorWithOutLang = `<a href="https://google.com">Google</a>`
test('CDTSCommonHtmlGenerators - generateHtmlAnchor - Returns valid HTML anchor string based on passed in parameters', () => {
    let lang = "en";
    let text = "Google";
    let url = "https://google.com";
    var returnedHtml = CDTSCommonHtmlGenerators.generateHtmlAnchor(url, text, lang);
    expect(returnedHtml).toContain(validHtmlAnchorWithLang);
    returnedHtml = CDTSCommonHtmlGenerators.generateHtmlAnchor(url, text);
    expect(returnedHtml).toContain(validHtmlAnchorWithOutLang);
})