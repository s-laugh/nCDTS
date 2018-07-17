import CDTSInstructionProcessor from '../../src/CDTSInstructionProcessor';
import * as CDTSConstants from '../../src/CDTSConstants';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const testid_one = "id-one";
const testid_two = "id-two"
const testDOM1 = new JSDOM(`<!DOCTYPE html><head><title>Test DOM 1</title></head><body><p>Test Dom 1</p></body></html>`);
const testDOM2 = new JSDOM(`<!DOCTYPE html><head><title>Test DOM 1</title></head><body><p id="${testid_one}">Test Dom 1</p><p id="${testid_two}">Test Dom 2</p></body></html>`);
const example_instructions_empty = {};
const example_instructions_component_replace = JSON.parse(`{ "${CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY}" : 
{"${testid_one}": {
    "component-package": "democomponents",
    "component-name": "LoremIpsumComponent",
    "output": "p",
    "number": 2
    }
}}`);
const example_instructions_direct_replace = JSON.parse(`{ "${CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY}" : {"${testid_one}":"<p>Replacement One</p>", "${testid_two}":"<p>Replacement Two</p>"}}`);
const example_instructions_additional_script = JSON.parse(`{ "${CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_KEY}" : ["/script1.js", "/script2.js"]}`);
test('CDTSInstructionProcessor - Constructor - Empty instruction object should throw an error.', () => {
    try {
        var ip = new CDTSInstructionProcessor(example_instructions_empty, testDOM1.window);
    } catch (error) {
        expect(error.message).toBe(CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID);
    }
});

test('CDTSInstructionProcessor - windowHasElementWithId', () => {
    var ip = new CDTSInstructionProcessor(example_instructions_direct_replace, testDOM1.window);
    var testid = "id-one";
    expect(ip.windowHasElementWithId(testDOM1.window.document, testid)).toBeFalsy();
    expect(ip.windowHasElementWithId(testDOM2.window.document, testid)).toBeTruthy();
});

test(`CDTSInstructionProcessor - Constructor - ${CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY} provided should create array of Promise objects.`, () => {
    var ip = new CDTSInstructionProcessor(example_instructions_direct_replace, testDOM2.window);
    expect(ip[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY]).toBeDefined();
    var exampleElementIds = Object.keys(example_instructions_direct_replace[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY]);
    expect(ip[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY]).toHaveLength(exampleElementIds.length);
});

test(`CDTSInstructionProcessor - hasExpectedInstructionKeys - provided JSON should return a defined property for each instruction type.`, () => {
    var ip = new CDTSInstructionProcessor(example_instructions_direct_replace, testDOM2.window);
    expect(ip[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY]).toBeDefined();

    ip = new CDTSInstructionProcessor(example_instructions_component_replace, testDOM2.window);
    expect(ip[CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY]).toBeDefined();

    ip = new CDTSInstructionProcessor(example_instructions_additional_script, testDOM2.window);
    expect(ip[CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_KEY]).toBeDefined();
});