import CDTSLoader from '../../../src/CDTS/CDTSLoader';
import * as CDTSConstants from '../../../src/CDTS/CDTSConstants';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const exampleCDTSInstruction = { "test": "test" };
const exampleCDTSInstructionUrl = "/example-url.json";
const testDOM1 = new JSDOM(`<!DOCTYPE html><head><title>Test DOM 1</title></head><body><p>Test Dom 1</p></body></html>`);
const testDOM2 = new JSDOM(`<!DOCTYPE html><head><title>Test DOM 2</title></head><body><p>Test Dom 2</p><script>${CDTSConstants.CDTS_INLINE_INSTRUCTIONS}=${JSON.stringify(exampleCDTSInstruction)}</script></body></html>`, { runScripts: "dangerously" });
const testDOM3 = new JSDOM(`<!DOCTYPE html><head><title>Test DOM 3</title></head><body><p>Test Dom 3</p><script>${CDTSConstants.CDTS_URL_INSTRUCTIONS}="${exampleCDTSInstructionUrl}"</script></body></html>`, { runScripts: "dangerously" });

test('CDTSLoader.getCDTSInstructions - No instructions specified - Should return Promise reject with an error when inline and remote CDTS instruction data not found', async () => {
  await expect(CDTSLoader.getCDTSInstructions(testDOM1.window)).rejects.toThrow(CDTSConstants.CDTS_INSTRUCTIONS_NOT_FOUND_MESSAGE)
});

test('CDTSLoader.getCDTSInstructions - Inline instructions - Should return a CDTS instruction object from the window object equal to the example CDTS instruction object.', async () => {
  await expect(CDTSLoader.getCDTSInstructions(testDOM2.window)).resolves.toMatchObject(exampleCDTSInstruction)
});

//TODO: create mocks and test CDTSLoader.fetchJson(url, theWindow)