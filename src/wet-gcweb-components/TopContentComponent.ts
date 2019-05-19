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
        var requiredProperties = [
            "search",
            "siteMenu",
            "lngLinks",
            "showPreContent",
            "breadcrumbs",
            "topSecMenu"];
        var keys = Object.keys(this.data);
        requiredProperties.forEach((required) => {
            if (keys.includes(required) == false) {
                throw CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID;
            }
        });
    }

    generateSkipNavHtml(vals) {
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

    generateLanguageSelectionHtml(vals) {
        return `<section id="wb-lng" class="text-right">
        <h2 class="wb-inv">${vals[0]}</h2>
        <ul class="list-inline margin-bottom-none">
        <li><a lang="fr" href="content-fr.html">Français</a></li>
        </ul>
        </section>`;
    }

    generateGoCSearchHtml(vals){
        return `
    < section id = "wb-srch" class="col-lg-8 text-right" >
        <h2>${vals[0]}< /h2>
        < form action = "#" method = "post" name = "cse-search-box" role = "search" class="form-inline" >
            <div class="form-group" >
                <label for= "wb-srch-q" class= "wb-inv" >${vals[1]}< /label>
                    < input id = "wb-srch-q" list = "wb-srch-q-ac" class="wb-srch-q form-control" name = "q" type = "search" value = "" size = "34"
                        maxlength = "170" placeholder = "${vals[1]}" >
                    <datalist id="wb-srch-q-ac" >
                    </datalist>
            < /div>
            < div class="form-group submit" >
                <button type="submit" id = "wb-srch-sub" class="btn btn-primary btn-small" name = "wb-srch-sub" > <span class="glyphicon-search glyphicon" > </span><span
                    class="wb-inv" >${vals[0]}< /span></button >
            </div>
        < /form>
    < /section>`
    }

    generateHeaderHtml() {
        var hmtl = `	
        <header>
		<div id="wb-bnr" class="container">
    ${
            this.generateLanguageSelectionHtml(['Language selection'])
            }
			<div class="row" >
    <div class="brand col-xs-5 col-md-4" >
        <a href="https://www.canada.ca/en.html" > <img src="./GCWeb/assets/sig-blk-en.svg" alt = "" > <span class="wb-inv" >
            Government of Canada / <span lang="fr" > Gouvernement du Canada < /span></span > </a>
                < /div>
    ${
        this.generateGoCSearchHtml([])
    }
    < /div>
    < /div>
    < nav class="gcweb-menu" typeof="SiteNavigationElement" >
        <div class="container" >
            <h2 class="wb-inv" > Menu < /h2>
                < button type = "button" aria - haspopup="true" aria - expanded="false" > <span class="wb-inv" > Main < /span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span > </button>
                    < ul role = "menu" aria - orientation="vertical" data - ajax - replace="./ajax/sitemenu-v2-en.html" >
                        <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/jobs.html" > Jobs and the
workplace < /a></li >
    <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/immigration-citizenship.html" > Immigration
and citizenship < /a></li >
    <li role="presentation" > <a role="menuitem" href = "https://travel.gc.ca/" > Travel and tourism < /a></li >
        <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/business.html" > Business and
industry < /a></li >
    <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/benefits.html" > Benefits < /a></li >
        <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/health.html" > Health < /a></li >
            <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/taxes.html" > Taxes < /a></li >
                <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/environment.html" > Environment
and natural resources < /a></li >
    <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/defence.html" > National security
and defence < /a></li >
    <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/culture.html" > Culture, history
and sport < /a></li >
    <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/policing.html" > Policing,
        justice and emergencies < /a></li >
            <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/transport.html" > Transport and
infrastructure < /a></li >
    <li role="presentation" > <a role="menuitem" href = "http://international.gc.ca/world-monde/index.aspx?lang=eng" > Canada
and the world < /a></li >
    <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/finance.html" > Money and
finances < /a></li >
    <li role="presentation" > <a role="menuitem" href = "https://www.canada.ca/en/services/finance.html" > Science and
innovation < /a></li >
    </ul>
    < /div>
    < /nav>
    < nav id = "wb-bc" property = "breadcrumb" >
        <h2>You are here: </h2>
            < div class="container" >
                <ol class="breadcrumb" >
                    <li><a href="https://www.canada.ca/en.html" > Home < /a></li >
                        </ol>
                        < /div>
                        < /nav>
                        < /header>`
        return hmtl;
    }

    generateHtml() {
        //skip nav
        var html = this.generateSkipNavHtml([`Skip to main content`, `Skip to "About government"`]);
        //header element - contains Language Selection, GoC Link, Search, Bread crumb links.
        html += this.generateHeaderHtml();
        return html;
    }

}