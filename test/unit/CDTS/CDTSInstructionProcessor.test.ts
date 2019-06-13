import * as jsdom from "jsdom";
import * as CDTSConstants from "../../../src/CDTS/CDTSConstants";
import CDTSInstructionProcessor from "../../../src/CDTS/CDTSInstructionProcessor";

const { JSDOM } = jsdom;
const testIdOne = "id-one";
const testIdTwo = "id-two";
const testDOM1 = new JSDOM(`<!DOCTYPE html>
<head><title>Test DOM 1</title></head><body><p>Test Dom 1</p></body></html>`);
const testDOM2 = new JSDOM(`<!DOCTYPE html>
<head><title>Test DOM 1</title></head>
<body><p id="${testIdOne}">Test Dom 1</p><p id="${testIdTwo}">Test Dom 2</p></body></html>`);
const exampleInstructionsEmpty = {};
const exampleInstructionsComponentReplace = JSON.parse(`{ "${CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY}" :
{"${testIdOne}": {
    "component-package": "democomponents",
    "component-name": "LoremIpsumComponent",
    "output": "p",
    "number": 2
    }
}}`);
// tslint:disable: max-line-length
const exampleInstructionsDirectReplace = JSON.parse(`{ "${CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY}" : {"${testIdOne}":"<p>Replacement One</p>", "${testIdTwo}":"<p>Replacement Two</p>"}}`);
const exampleInstructionsAdditionalScript = JSON.parse(`{ "${CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_KEY}" : ["/script1.js", "/script2.js"]}`);
test("CDTSInstructionProcessor - Constructor - Empty instruction object should throw an error.", () => {
    try {
        const ip = new CDTSInstructionProcessor(exampleInstructionsEmpty, testDOM1.window);
    } catch (error) {
        expect(error.message).toBe(CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID);
    }
});

test("CDTSInstructionProcessor - windowHasElementWithId", () => {
    const ip = new CDTSInstructionProcessor(exampleInstructionsDirectReplace, testDOM1.window);
    const testid = "id-one";
    expect(ip.windowHasElementWithId(testDOM1.window.document, testid)).toBeFalsy();
    expect(ip.windowHasElementWithId(testDOM2.window.document, testid)).toBeTruthy();
});

test(`CDTSInstructionProcessor - Constructor - ${CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY} provided should create array of Promise objects.`, () => {
    const ip = new CDTSInstructionProcessor(exampleInstructionsDirectReplace, testDOM2.window);
    expect(ip[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY]).toBeDefined();
    const exampleElementIds = Object.keys(exampleInstructionsDirectReplace[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY]);
    expect(ip[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY]).toHaveLength(exampleElementIds.length);
});

test(`CDTSInstructionProcessor - hasExpectedInstructionKeys - provided JSON should return a defined property for each instruction type.`, () => {
    let ip = new CDTSInstructionProcessor(exampleInstructionsDirectReplace, testDOM2.window);
    expect(ip[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY]).toBeDefined();

    ip = new CDTSInstructionProcessor(exampleInstructionsComponentReplace, testDOM2.window);
    expect(ip[CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY]).toBeDefined();

    ip = new CDTSInstructionProcessor(exampleInstructionsAdditionalScript, testDOM2.window);
    expect(ip[CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_KEY]).toBeDefined();
});
