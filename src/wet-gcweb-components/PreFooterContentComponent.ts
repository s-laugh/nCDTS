import CDTSBaseComponent from '../CDTS/CDTSBaseComponent';
import * as CDTSConstants from '../CDTS/CDTSConstants';
// import CDTSCommonHtmlGenerators from '../CDTS/CDTSCommonHtmlGenerators';


export default class PreFooterContentComponent extends CDTSBaseComponent {
    
    constructor(targetElementId, data) {
        super(targetElementId, data);
        this.HasDataForRequiredProperties(data);
    }
    
    HasDataForRequiredProperties(data) {
        var requiredProperties = [
            "pagedetails",
            "showFeedback",
            "showShare"];
        var keys = Object.keys(this.data);
        requiredProperties.forEach((required) => {
            if (keys.includes(required) == false) {
                throw CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID;
            }
        });
    }

    generateHtml() : string {
        var html = "";

        if (this.data.pagedetails) html += this.generatePageDetails();

        return html;
    }

    private generatePageDetails() : string {
        var html = "";

        html += `<div class="pagedetails"><div class="row">`
        if (this.data.showFeedback != false) html += this.generateFeedBack();
        if (this.data.showShare != false) html += this.generateShowShare();
        html += `</div><dl id="wb-dtmd">`        
        if (this.data.dateModified) html += this.generateDateModified();
        if (this.data.screenIdentifier) html += this.generateScreenIdentifier();
        if (this.data.versionIdentifier) html += this.generateVersionIdentifier();
        html += `</dl></div>`

        return html;
    }

    private generateFeedBack() : string {
        var html = "";

        html += `<div class="col-sm-6 col-md-5 col-lg-4">
                    <a href="${this.data.showFeedback != true ? this.data.showFeedback : "https://www.canada.ca/en/report-problem.html"}" class="btn btn-default text-center">Report a problem on this page</a>
                </div>`

        return html;
    }

    private generateShowShare() : string {
        var html = "";

        html += `<div class="wb-share col-sm-4 col-md-3 ${this.data.showFeedback == false ? "col-sm-offset-8 col-md-offset-9" : "col-sm-offset-2 col-md-offset-4 col-lg-offset-5"}" data-wb-share='{"lnkClass": "btn btn-default btn-block"}'></div>`

        return html;
    }

    private generateDateModified() : string {
        var html = "";

        return html;
    }

    private generateScreenIdentifier() : string {
        var html = "";

        return html;
    }
    
    private generateVersionIdentifier() : string {
        var html = "";

        return html;
    }
}