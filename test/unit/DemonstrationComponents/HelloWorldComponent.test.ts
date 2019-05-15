import HelloWorldComponent from '../../../src/DemonstrationComponents/HelloWorldComponent';
const elementId = "element-id";
const exampleData = {"name" : "James Dean"};
const expectedHtmlNullData = "<p>Hello World!</p>";
const expectedHtmlWithData = `<p>Hello ${exampleData.name}!</p>`;

test('HelloWorldComponent - generateHtml - data null - should return simple "Hello World" p element', () => {
    var component = new HelloWorldComponent(elementId, null);
    expect(component.generateHtml()).toEqual(expectedHtmlNullData);
});

test('HelloWorldComponent - generateHtml - data.name set  - should return simple "Hello Name" p element', () => {
    var component = new HelloWorldComponent(elementId, exampleData);
    expect(component.generateHtml()).toEqual(expectedHtmlWithData);
});