import * as CDTSConstants from './CDTSConstants';
// import * as xssFilters from 'xss-filters';

export default class CDTSDomModifier {


    static replaceInnerHtml(theWindow, element_id, replacementHtml) {
        var targetElement = theWindow.document.getElementById(element_id);
        targetElement.innerHTML = replacementHtml;
        var allElements = targetElement.getElementsByTagName('*');
        for(var i =0 ; i < allElements.length; i++){
            //remove any script elements
            if(allElements[i].tagName === 'SCRIPT'){
                targetElement.removeChild(allElements[i]);
            }else{
             //remove unwanted attributes (XSS)
             var attrbs = allElements[i].attributes;
             for(var x=0; x< attrbs.length; x ++){
                 if(attrbs[x].name.startsWith('on')){
                    allElements[i].removeAttribute(attrbs[x].name);
                 }else if(attrbs[x].value.trim().search('javascript:') > -1){
                    allElements[i].removeAttribute(attrbs[x].name);
                 }
             }
            }
        }
    }

    static createScriptElement(theWindow, scriptSrc) {
        var scriptElement = theWindow.document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.src = scriptSrc;
        return scriptElement;
    }
}