import CDTSBaseComponent from '../CDTS/CDTSBaseComponent';

export default class HelloWorldComponent extends CDTSBaseComponent {

    generateHtml() {
        if (this.data) {
            if (this.data.name) {
                return `<p>Hello ${this.data.name}!</p>`;
            }
        }
        return "<p>Hello World!</p>";
    }

    constructor(targetElementId, data) {
        super(targetElementId, data);
    }
}