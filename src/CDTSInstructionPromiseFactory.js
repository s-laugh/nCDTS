import * as CDTSConstants from './CDTSConstants';
import CDTSDomModifier from './CDTSDomModifier';
import ModuleComponents from './DemonstrationComponents/democomponents';

export default class CDTSInstructionPromiseFactory {
    static makePromiseFor(theWindow, instructiontype, data) {
        if (instructiontype === CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_KEY) {
            return CDTSInstructionPromiseFactory.additionalScriptPromise(theWindow, data);
        }
        if (instructiontype === CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY) {
            return CDTSInstructionPromiseFactory.cdtsComponentPromise(theWindow, data);
        }
        if (instructiontype === CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY) {
            return CDTSInstructionPromiseFactory.cdtsDirectReplacePromise(theWindow, data);
        }
    }

    static additionalScriptPromise(theWindow, data) {
        return new Promise((resolve, reject) => {
            try {
                var scriptElement = CDTSDomModifier.createScriptElement(theWindow, data[CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_SRC_KEY]);
                scriptElement.addEventListener('load', () => resolve(scriptElement), false);
                scriptElement.addEventListener('error', () => reject(scriptElement), false);
                theWindow.document.body.appendChild(scriptElement);
            } catch (error) {
                reject(error);
            }
        });
    }

    static cdtsComponentPromise(theWindow, data) {
        console.log('cdtsComponentPromise');
        var elementid = data[CDTSConstants.CDTS_INSTRUCTIONS_ELEMENT_ID_KEY];
        var componentpackage = data[CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_PACKAGE_NAME_KEY];
        var component = data[CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_NAME_KEY];
        return new Promise((resolve, reject) => {
            try {
                var cmpnnt = new ModuleComponents(component,elementid, data);
                CDTSDomModifier.replaceInnerHtml(theWindow, elementid, cmpnnt.generateHtml());
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    static cdtsDirectReplacePromise(theWindow, data) {
        return new Promise((resolve, reject) => {
            try {
                CDTSDomModifier.replaceInnerHtml(theWindow, data[CDTSConstants.CDTS_INSTRUCTIONS_ELEMENT_ID_KEY], data[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_HTML_KEY]);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }
}