import CDTSBaseComponent from "../CDTS/CDTSBaseComponent";
import * as CDTSConstants from "../CDTS/CDTSConstants";

export default class SplashContentComponent extends CDTSBaseComponent {

    constructor(targetElementId, data) {
        if (arguments.length !== 2) {
            throw CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID;
        }
        super(targetElementId, data);
        this.HasDataForRequiredProperties(data);

    }

    public HasDataForRequiredProperties(data) {
        const requiredProperties = [
            "cdts_version",
            "nameEng",
            "indexEng",
            "nameFra",
            "indexFra",
            "termsEng",
            "termsFra",
        ];
        const keys = Object.keys(this.data);
        requiredProperties.forEach((required) => {
            if (keys.includes(required) === false) {
                throw CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID;
            }
        });
    }

    /* tslint:disable: max-line-length */
    public generateHtml() {
        return (`
            <div id="bg">
            <img src="https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/${this.data.cdts_version}/img/splash/sp-bg-2.jpg" alt="">
            </div>
            <main>
                <div class="sp-hb">
                    <div class="sp-bx col-xs-12">
                        <h1 property="name" class="wb-inv">Canada.ca</h1>
                        <div class="row">
                            <div class="col-xs-11 col-md-8">
                                <img src="https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/${this.data.cdts_version}/assets/sig-spl.svg" alt="Government of Canada / Gouvernement du Canada">
                            </div>
                        </div>
                        <div class="row">
                            <section class="col-xs-6 text-right">
                                <h2 style="min-height:4.5em;">${this.data.nameEng}</h2>
                                <p><a href="${this.data.indexEng}" class="btn btn-primary">English</a></p>
                            </section>
                            <section class="col-xs-6" lang="fr">
                                <h2 style="min-height:4.5em;">${this.data.nameFra}</h2>
                                <p><a href="${this.data.indexFra}" class="btn btn-primary">Français</a></p>
                            </section>
                        </div>
                    </div>
                    <div class="sp-bx-bt col-xs-12">
                        <div class="row">
                            <div class="col-xs-7 col-md-8">
                                <a href="${this.data.termsEng}" class="sp-lk">Terms &amp; conditions</a> <span class="glyphicon glyphicon-asterisk"></span> <a href="${this.data.termsFra}" class="sp-lk" lang="fr">Avis</a>
                            </div>
                            <div class="col-xs-5 col-md-4 text-right mrgn-bttm-md">
                                <img src="https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/${this.data.cdts_version}/assets/wmms-spl.svg" alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" width="127">
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        `);
    }
}
