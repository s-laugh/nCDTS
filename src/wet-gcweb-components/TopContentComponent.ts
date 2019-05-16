import CDTSBaseComponent from '../CDTS/CDTSBaseComponent';
import * as CDTSConstants from '../CDTS/CDTSConstants';

export default class TopContentComponent extends CDTSBaseComponent {
    constructor(targetElementId, data) {
        if (arguments.length != 2) {
            throw CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID;
        }
        super(targetElementId, data);
        this.HasDataForRequiredProperties(data);

    }

    HasDataForRequiredProperties(data) {

    }

    generateSkipNavHtml(vals){
        return `
        <ul id="wb-tphp">
        <li class="wb-slc">
        <a class="wb-sl" href="#wb-cont">${vals[0]}</a>
        </li>
        <li class="wb-slc">
        <a class="wb-sl" href="#wb-info">${vals[1]}</a>
        </li>
        </ul>`;
    }

    generateLanguageSelectionHtml(vals){
        return `<section id="wb-lng" class="text-right">
        <h2 class="wb-inv">${vals[0]}</h2>
        <ul class="list-inline margin-bottom-none">
        <li><a lang="fr" href="content-fr.html">Français</a></li>
        </ul>
        </section>`;
    }

    generateHtml() {
        //skip nav
        var html = this.generateSkipNavHtml([`Skip to main content`,`Skip to "About government"`]);
        html += `<header>
        <div id="wb-bnr" class="container">`;
        //language select links
        html += this.generateLanguageSelectionHtml([`Language selection`]);
        html += `</div>
        </header>`
        return html;
    }

}