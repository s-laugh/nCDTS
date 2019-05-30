import CDTSBaseComponent from '../CDTS/CDTSBaseComponent';
import * as CDTSConstants from '../CDTS/CDTSConstants';
import CDTSCommonHtmlGenerators from '../CDTS/CDTSCommonHtmlGenerators';

export const TOP_CONTENT_COMPONENT_TEXT ={
    "skip_to_main":{
        "en": "Skip to main content",
        "fr": "FR-Skip to main content"
    },
    "skip_to_about":{
        "en": "Skip to \"About government\"",
        "fr": "FR-Skip to \"About government\""
    },
    "skip_to_section":{
        "en":"Skip to section menu",
        "fr":"FR-Skip to section menu"
    },
    "language_selection":{
        "en":"Language selection",
        "fr":"FR-Language selection"
    }
}

export default class TopContentComponent extends CDTSBaseComponent {
    
    constructor(targetElementId, data) {
        super(targetElementId, data);
        if (arguments.length != 2) {
            throw CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID;
        }
        this.HasDataForRequiredProperties(data);
        //setting a language property here for now but should be done in CDTSBaseComponent and/or Instruction processor ...
        this.language = 'en';
        if(data.language != undefined){
            this.language = data.language;
        }
    

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

    generateSkipNavHtml(lang: string, hasSitemenu: boolean) {
        var html =`
        <!-- Skip navigation start -->
        <ul id="wb-tphp">
            <li class="wb-slc">
                <a class="wb-sl" href="#wb-cont">${TOP_CONTENT_COMPONENT_TEXT.skip_to_main[lang]}</a>
            </li>
            <li class="wb-slc">
                <a class="wb-sl" href="#wb-info">${TOP_CONTENT_COMPONENT_TEXT.skip_to_about[lang]}</a>
            </li>`;
        if(hasSitemenu){
            html += `<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">${TOP_CONTENT_COMPONENT_TEXT.skip_to_section[lang]}</a></li>`;
        }
        html += `</ul>
        <!-- Skip navigation ends -->`;
        return html;
    }

    generateLanguageSelectionHtml(vals) {
        var html =`<section id="wb-lng" class="text-right">
        <h2 class="wb-inv">${vals[0]}</h2>
        <ul class="list-inline margin-bottom-none">`;
        if( vals.length == 2){
            if(Array.isArray(vals[1])){
                vals[1].forEach(element => {
                    html += `<li>${CDTSCommonHtmlGenerators.generateHtmlAnchor(element.url, element.text, element.lang)}</li>`
                });
            }
        }
        html += `</ul>
        </section>`;
        return html;
    }

    generateGoCSearchHtml(vals){
        return `
    <section id = "wb-srch" class="col-lg-8 text-right" >
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

    generateGoCSiteMenuHtml(vals){
        return `
        < nav class="gcweb-menu" typeof="SiteNavigationElement" >
            <div class="container" >
                <h2 class="wb-inv" > Menu < /h2>
                    < button type = "button" aria - haspopup="true" aria - expanded="false" >
                        <span class="wb-inv" > Main < /span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span >
                    </button>
                    <!-- list links here -->
            < /div>
        < /nav>
        `;
    }

    generateBreadcrumbHtml(vals){
        var html = `
        <!-- Breadcrumbs start -->
        <nav id="wb-bc" property="breadcrumb">
            <h2>You are here:</h2>
            <div class="container">
                <ol class="breadcrumb">
                    <li><a href="https://www.canada.ca/en.html">Home</a></li>`;
        if( vals.length == 2){
            if(Array.isArray(vals[1])){
                vals[1].forEach(element => {
                    // <li><a href="{ breadcrumbs.href }"><abbr title="{ breadcrumbs.acronym }">{ breadcrumbs.text }</abbr></a></li>
                    html += `
                    <li>${CDTSCommonHtmlGenerators.generateHtmlAnchor(element.url, element.text)}</li>`
                });
            }
        }                
        html += `
                </ol>
            </div>
        </nav>
        <!-- Breadcrumbs end -->`;
        return html;
    }

    generateHeaderHtml() {
        var hmtl = `	
    <header>
	    <div id="wb-bnr" class="container">
            ${
            this.data.lngLinks.length > 0 ? this.generateLanguageSelectionHtml([TOP_CONTENT_COMPONENT_TEXT.language_selection[this.language]]) : ''
            }
			<div class="row" >
                <div class="brand col-xs-5 col-md-4" >
                <a href="https://www.canada.ca/en.html" > <img src="./GCWeb/assets/sig-blk-en.svg" alt = "" >
                <span class="wb-inv" >Government of Canada / <span lang="fr" > Gouvernement du Canada < /span></span >
                </a>
            < /div>
            ${
            this.data.search ? this.generateGoCSearchHtml([]) : ''
            }
        < /div>
        ${
            this.data.sitemenu ? this.generateGoCSiteMenuHtml([]) : ''
        }
        ${
            this.data.breadcrumbs.length > 0 ? this.generateBreadcrumbHtml([]) : ''
        }
    < /header>`
        return hmtl;
    }

    generateHtml() {
        //skip nav
        var html = this.generateSkipNavHtml(this.language, this.data.topSecMenu);
        //header element - contains Language Selection, GoC Link, Search, Bread crumb links.
        html += this.generateHeaderHtml();
        return html;
    }

}