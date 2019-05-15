import LoremIpsumComponent from '../../../src/DemonstrationComponents/LoremIpsumComponent';
import { JSDOM } from 'jsdom';

const elementId = "element-id";
const exampleData3Paragraph = { "output": "p", "number": 3 };
const exampleData5Paragraph = { "output": "ul", "number": 5 };
const exampleData6HeadingParagraph = { "output": "hp", "number": 6 };
// const expectedHtmlNullData = "<p>Hello World!</p>";
// const expectedHtmlWithData = `<p>Hello ${exampleData.name}!</p>`;

test('LoremIpsumComponent - getRandomLoremIpsum', () => {
    var component = new LoremIpsumComponent(elementId, exampleData3Paragraph);
    expect(component.getRandomLoremIpsum()).toBeDefined();
});

test('LoremIpsumComponent - generate 3 html paragraphd of lorem ipsum', () => {
    var component = new LoremIpsumComponent(elementId, exampleData3Paragraph);
    var dom = new JSDOM(component.generateHtml());
    expect(dom.window.document.getElementsByTagName('P').length).toBe(3);
});

test('LoremIpsumComponent - generate 5 html unorder list items of lorem ipsum', () => {
    var component = new LoremIpsumComponent(elementId, exampleData5Paragraph);
    var dom = new JSDOM(component.generateHtml());
    expect(dom.window.document.getElementsByTagName('LI').length).toBe(5);
});

test('LoremIpsumComponent - generate 6 html headings with paragraphs of lorem ipsum', () => {
    var component = new LoremIpsumComponent(elementId, exampleData6HeadingParagraph);
    var dom = new JSDOM(component.generateHtml());
    expect(dom.window.document.querySelectorAll("h1, h2, h3, h4, h5, h6").length).toBe(6);
    expect(dom.window.document.getElementsByTagName('P').length).toBe(6);
});