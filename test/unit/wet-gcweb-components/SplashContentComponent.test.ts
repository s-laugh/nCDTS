import * as CDTSConstants from "../../../src/CDTS/CDTSConstants";
import SplashContentComponent from "../../../src/wet-gcweb-components/SplashContentComponent";
const elementId = "element-id";
const data = {
    cdts_version: "v4_0_30",
    indexEng: "english_index.html",
    indexFra: "francais_index.html",
    jqueryEnv: "",
    nameEng: "Title For This Test",
    nameFra: "Titre de ce test",
    termsEng: "http://www.canada.ca/en/transparency/terms.html",
    termsFra: "http://www.canada.ca/fr/transparence/avis.html",
    webAnalytics: "",
};

// tslint:disable: max-line-length
test("SplashContentComponent - generateHtml - data with required values set - expect correct html string to be returned.", () => {
    const component = new SplashContentComponent(elementId, data);
    const generatedHtml = component.generateHtml();

    expect(generatedHtml).toContain(`<h1 property="name" class="wb-inv">Canada.ca</h1>`);
    expect(generatedHtml).toContain(`<main>`);
    expect(generatedHtml).toContain(`https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/${data.cdts_version}/img/splash/sp-bg-2.jpg`);
    expect(generatedHtml).toContain(`https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/${data.cdts_version}/assets/sig-spl.svg`);
    expect(generatedHtml).toContain(`<h2 style="min-height:4.5em;">${data.nameEng}</h2>`);
    expect(generatedHtml).toContain(`<a href="${data.indexEng}" class="btn btn-primary">`);
    expect(generatedHtml).toContain(`<h2 style="min-height:4.5em;">${data.nameFra}</h2>`);
    expect(generatedHtml).toContain(`<a href="${data.indexFra}" class="btn btn-primary">`);
    expect(generatedHtml).toContain(`<a href="${data.termsEng}" class="sp-lk">`);
    expect(generatedHtml).toContain(`https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/${data.cdts_version}/assets/wmms-spl.svg`);
});
