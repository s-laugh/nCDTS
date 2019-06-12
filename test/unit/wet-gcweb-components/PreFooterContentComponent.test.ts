import PreFooterContentComponent from "../../../src/wet-gcweb-components/PreFooterContentComponent";
import { PRE_FOOTER_TEXT } from "../../../src/wet-gcweb-components/PreFooterContentComponent";
import * as CDTSConstants from "../../../src/CDTS/CDTSConstants";

var elementId : string = "element-id";


test("PreFooterContentComponent - generateHtml - renders all parts", ()=> {
    let data : any = {
        "pagedetails" : true,
        "showFeedback" : "www.customlink.com",
        "showShare": true,
        "dateModified" : "2019-06-07",
        "screenIdentifier" : "screenIdentifier00012",
        "versionIdentifier" : "0.0.1"
    };
    let component : PreFooterContentComponent = new PreFooterContentComponent(elementId, data);
    let generatedHtml : string = component.generateHtml();

    expect(generatedHtml.replace(/\s/g,"")).toContain("class=\"pagedetails\"".replace(/\s/g,""));
    expect(generatedHtml.replace(/\s/g,"")).toContain(data.showFeedback.replace(/\s/g,""));
    expect(generatedHtml.replace(/\s/g,"")).toContain("wb-share".replace(/\s/g,""));
    expect(generatedHtml.replace(/\s/g,"")).toContain(data.dateModified.replace(/\s/g,""));
    expect(generatedHtml.replace(/\s/g,"")).toContain(data.screenIdentifier.replace(/\s/g,""));
    expect(generatedHtml.replace(/\s/g,"")).toContain(data.versionIdentifier.replace(/\s/g,""));
});

test("PreFooterContentComponent - generateHtml - renders fr text", ()=> {
    let data : any = {
        "language": "fr",
        "pagedetails" : true,
        "showFeedback" : true,
        "showShare": false,
        "dateModified" : "2019-06-07",
        "screenIdentifier" : "screenIdentifier00012",
        "versionIdentifier" : "0.0.1"
    };
    let component : PreFooterContentComponent = new PreFooterContentComponent(elementId, data);
    let generatedHtml : string = component.generateHtml();

    expect(generatedHtml.replace(/\s/g,"")).toContain(PRE_FOOTER_TEXT.report_problem.fr.replace(/\s/g,""));
    expect(generatedHtml.replace(/\s/g,"")).toContain(PRE_FOOTER_TEXT.date_modified.fr.replace(/\s/g,""));
    expect(generatedHtml.replace(/\s/g,"")).toContain(PRE_FOOTER_TEXT.screen_ident.fr.replace(/\s/g,""));
    expect(generatedHtml.replace(/\s/g,"")).toContain(PRE_FOOTER_TEXT.version.fr.replace(/\s/g,""));
});

test("PreFooterContentComponent - generateHtml - renders no parts", ()=> {
    let emptyReturn : string = `<div class="pagedetails"><div class="row"></div><dl id="wb-dtmd"></dl></div>`;
    let emptyData : any = {
        "pagedetails" : true,
        "showFeedback" : false,
        "showShare": false,
    };
    let component : PreFooterContentComponent = new PreFooterContentComponent(elementId, emptyData);
    let generatedHtml : string = component.generateHtml();

    expect(generatedHtml.replace(/\s/g,"")).toBe(emptyReturn.replace(/\s/g,""));
});


test("PreFooterContentComponent - generateHtml - nothing renders", ()=> {
    let emptyData : any = {
        "pagedetails" : false,
        "showFeedback" : false,
        "showShare": false,
    };
    let component : PreFooterContentComponent = new PreFooterContentComponent(elementId, emptyData);
    let generatedHtml : string = component.generateHtml();

    expect(generatedHtml.replace(/\s/g,"")).toBe("");
});

test("PreFooterContentComponent - hasDataForRequiredProperties - data elements are required, thows error", ()=> {
    let badData : any = {
        "pagedetails" : true,
        "showFeedback" : false
    };

    // tslint:disable-next-line: no-unused-expression
    expect(()=> { new PreFooterContentComponent(elementId, badData); }).toThrowError(CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID);
});