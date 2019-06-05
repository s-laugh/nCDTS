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

    generateHtml(): string {
        var html = "";

        html += this.generatePageDetails();

        return html;
    }

    private generatePageDetails(): string {
        var html = "";

        if (this.data.pagedetails) {
            html += `<div class="pagedetails"><div class="row">`
            html += this.generateFeedBack();
            html += this.generateShowShare();
            html += `</div><dl id="wb-dtmd">`
            html += this.generateDateModified();
            html += this.generateScreenIdentifier();
            html += this.generateVersionIdentifier();
            html += `</dl></div>`
        }

        return html;
    }

    private generateFeedBack(): string {
        var html = "";

        if (this.data.showFeedback != false) {
            html += `<div class="col-sm-6 col-md-5 col-lg-4">
                    <a href="${this.data.showFeedback != true ? this.data.showFeedback : "https://www.canada.ca/en/report-problem.html"}" class="btn btn-default text-center">Report a problem on this page</a>
                </div>`
        }

        return html;
    }

    private generateShowShare(): string {
        var html = "";

        if (this.data.showShare != false) {
            html += `<div class="wb-share col-sm-4 col-md-3 ${this.data.showFeedback == false ? "col-sm-offset-8 col-md-offset-9" : "col-sm-offset-2 col-md-offset-4 col-lg-offset-5"}" data-wb-share='{"lnkClass": "btn btn-default btn-block"}'></div>`
        }

        return html;
    }

    private generateDateModified(): string {
        var html = "";

        if (this.data.dateModified) {
            html += `<dt>Date modified:&#32;</dt>
                <dd><time property="dateModified">${ this.data.dateModified}</time></dd>`
        }

        return html;
    }

    private generateScreenIdentifier(): string {
        var html = "";

        if (this.data.screenIdentifier) {
            html += `<dt>Screen Identifier:&#32;</dt>
                <dd property="identifier">${ this.data.screenIdentifier}</dd>`
        }

        return html;
    }

    private generateVersionIdentifier(): string {
        var html = "";

        if (this.data.versionIdentifier) {
            html += `<dt>Version:&#32;</dt>
                <dd property="version">${ this.data.versionIdentifier}</dd>`
        }

        return html;
    }
}