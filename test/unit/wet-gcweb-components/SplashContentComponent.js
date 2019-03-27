import SplashContentComponent from '../../../src/wet-gcweb-components/SplashContentComponent';
import * as CDTSConstants from '../../../src/CDTS/CDTSConstants';
var elementId = "element-id";
var datawithmissingprops = {
    cdts_version: "v4_0_30"
};
var data = {
    cdts_version: "v4_0_30",
    nameEng: "Title For This Test",
    indexEng: "english_index.html",
    nameFra: "Titre de ce test",
    indexFra: "francais_index.html",
    termsEng: "http://www.canada.ca/en/transparency/terms.html",
    termsFra: "http://www.canada.ca/fr/transparence/avis.html",
    jqueryEnv: "",
    webAnalytics: ""
};


const expecteDefaultdHtml = `<div id="bg"><img src="https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/v4_0_30/img/splash/sp-bg-2.jpg" alt=""></div>`
    + `<main><div class="sp-hb"><div class="sp-bx col-xs-12"><h1 property="name" class="wb-inv">Canada.ca</h1><div class="row"><div class="col-xs-11 col-md-8"><img src="https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/v4_0_30/assets/sig-spl.svg" alt="Government of Canada / Gouvernement du Canada"></div></div><div class="row"><section class="col-xs-6 text-right"><h2 style="min-height:4.5em;">Title For This Test</h2><p><a href="english_index.html" class="btn btn-primary">English</a></p></section><section class="col-xs-6" lang="fr"><h2 style="min-height:4.5em;">Titre de ce test</h2><p><a href="francais_index.html" class="btn btn-primary">Français</a></p></section></div></div><div class="sp-bx-bt col-xs-12"><div class="row"><div class="col-xs-7 col-md-8"><a href="http://www.canada.ca/en/transparency/terms.html" class="sp-lk">Terms &amp; conditions</a> <span class="glyphicon glyphicon-asterisk"></span> <a href="http://www.canada.ca/fr/transparence/avis.html" class="sp-lk" lang="fr">Avis</a></div><div class="col-xs-5 col-md-4 text-right mrgn-bttm-md"><img src="https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/v4_0_30/assets/wmms-spl.svg" alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" width="127"></div></div></div></div></main>`;

test('SplashContentComponent - constructor - data null - expect error to be thrown', () => {
    function badconstructor() {
        var component = new SplashContentComponent(elementId);
    }
    expect(badconstructor).toThrowError(CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID);
});

test('SplashContentComponent - constructor - data missing required properties - expect error to be thrown', () => {
    function constructorwithbaddata() {
        datawithmissingprops = {}
        component = new SplashContentComponent(elementId, datawithmissingprops);
    }
    expect(constructorwithbaddata).toThrowError(CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID);
});

test('SplashContentComponent - generateHtml - data with required values set - expect correct html string to be returned.', () => {
    var component = new SplashContentComponent(elementId, data);
    expect(component.generateHtml()).toEqual(expecteDefaultdHtml);
});