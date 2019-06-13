import * as jsdom from "jsdom";
import CDTSDomModifier from "../../../src/CDTS/CDTSDomModifier";
const { JSDOM } = jsdom;
const testidOne = "id-one";
const testidTwo = "id-two";
const testDOM = new JSDOM(`<!DOCTYPE html>
 <head>
 <title>Test DOM 1</title>
 </head>
 <body>
  <div id="${testidOne}"><p>Test Dom 1</p></div>
  <div id="${testidTwo}"><p>Test Dom 2</p></div>
 </body>
</html>`);
// tslint:disable: max-line-length
const tobescrubbedHtml = `<ul><li class="redclass" onmouseover="alert('xxs')">List item one.</li><li class="redclass">List item two.</li><li class="redclass">List item three.<img src="javascript:alert('XSS');"></li></ul><script src="http://nastyscripts.org/badscript.js">Test</script><span>Test span</span>`;
const scrubbedHtml = `<ul><li class="redclass">List item one.</li><li class="redclass">List item two.</li><li class="redclass">List item three.<img></li></ul><span>Test span</span>`;

test("CDTSDomModifier - replaceInnerHtml - Should replace the inner HTML of the identified element with passed HTML string.", () => {
    CDTSDomModifier.replaceInnerHtml(testDOM.window, testidOne, scrubbedHtml);
    expect(testDOM.window.document.getElementById(testidOne).innerHTML).toEqual(scrubbedHtml);
});

test("CDTSDomModifier - replaceInnerHtml - Should replace the inner HTML of the identified element with a scrubbed clean HTML string.", () => {
    CDTSDomModifier.replaceInnerHtml(testDOM.window, testidOne, tobescrubbedHtml);
    expect(testDOM.window.document.getElementById(testidOne).innerHTML).toEqual(scrubbedHtml);
});

const scriptSrc = "script.js";
const expectedScriptHtml = `<script type="text/javascript" src="${scriptSrc}"></script>`;
test("CDTSDomModifier - createScriptElement - Should create a script emlement that can be appended to document.", () => {
    const scriptElement = CDTSDomModifier.createScriptElement(testDOM.window, scriptSrc);
    expect(scriptElement.outerHTML).toEqual(expectedScriptHtml);
});
