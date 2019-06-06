// import * as xssFilters from 'xss-filters';

export default class CDTSDomModifier {

    public static replaceInnerHtml(theWindow, elementId, replacementHtml) {
        const targetElement = theWindow.document.getElementById(elementId);
        targetElement.innerHTML = replacementHtml;
        const allElements = targetElement.getElementsByTagName("*");
        for (const anElement of allElements) {
            // remove any script elements
            if (anElement.tagName === "SCRIPT") {
                targetElement.removeChild(anElement);
            } else {
                // remove unwanted attributes (XSS)
                const attrbs = anElement.attributes;
                for (const attribute of attrbs) {
                    if (attribute.name.startsWith("on")) {
                        anElement.removeAttribute(attribute.name);
                    } else if (attribute.value.trim().search("javascript:") > -1) {
                        anElement.removeAttribute(attribute.name);
                    }
                }
            }
        }
    }

    public static createScriptElement(theWindow, scriptSrc) {
        const scriptElement = theWindow.document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.src = scriptSrc;
        return scriptElement;
    }
}
