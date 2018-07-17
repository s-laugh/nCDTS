import * as CDTSConstants from './CDTSConstants';
import CDTSInstructionPromiseFactory from './CDTSInstructionPromiseFactory';

export default class CDTSInstructionProcessor {

    constructor(instructions, theWindow) {
        if (this.hasExpectedInstructionKeys(instructions)) {
            if (instructions[CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_KEY] != undefined) {
                var promises = [];
                var items = instructions[CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_KEY];
                items.forEach( item => {
                    console.log(`add script: ${item}`)
                    var data = {};
                    data[CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_SRC_KEY] = item;
                    promises.push(
                        CDTSInstructionPromiseFactory.makePromiseFor(theWindow, CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_KEY, data)
                    );                    
                });
                this[CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_KEY] = promises;
            }
            if (instructions[CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY] != undefined) {
                var promises = [];
                var items = instructions[CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY];
                var ids = Object.keys(items);
                ids.forEach(id => {
                    if (this.windowHasElementWithId(theWindow.document, id)) {
                        var data = items[id];
                        data[CDTSConstants.CDTS_INSTRUCTIONS_ELEMENT_ID_KEY] = id;
                        promises.push(
                            CDTSInstructionPromiseFactory.makePromiseFor(theWindow, CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY, data)
                        );
                    } else {
                        console.warn(`Element with id: ${id} not found in document. CDTS instruction discarded.`);
                    }                  
                });
                this[CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY] = promises;
            }
            if (instructions[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY] != undefined) {
                var promises = [];
                var items = instructions[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY];
                    var ids = Object.keys(items);
                    ids.forEach(id => {
                        if (this.windowHasElementWithId(theWindow.document, id)) {
                            var data = {};
                            data[CDTSConstants.CDTS_INSTRUCTIONS_ELEMENT_ID_KEY] = id;
                            data[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_HTML_KEY] = items[id];
                            promises.push(
                                CDTSInstructionPromiseFactory.makePromiseFor(theWindow, CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY, data)
                            );
                        } else {
                            console.warn(`Element with id: ${id} not found in document. CDTS instruction discarded.`);
                        }
                    });
                this[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY] = promises;
            }
            if (instructions[CDTSConstants.CDTS_INSTRUCTIONS_FETCHED_REPLACE_KEY] != undefined) {
                var set = new Set();
                this[CDTSConstants.CDTS_INSTRUCTIONS_FETCHED_REPLACE_KEY] = set;
            }
        }
        else {
            throw new Error(CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID);
        }
    }

    hasExpectedInstructionKeys(instructions) {
        var ok = false;
        var k = Object.keys(instructions);
        console.log(k);
        ok = (k.includes(CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY)
            || k.includes(CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY)
            || k.includes(CDTSConstants.CDTS_INSTRUCTIONS_FETCHED_REPLACE_KEY)
            || k.includes(CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_KEY));
        return ok;
    }

    windowHasElementWithId(theDocument, id) {
        return (theDocument.getElementById(id) != undefined)
    }
}