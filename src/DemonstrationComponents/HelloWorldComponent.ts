import CDTSBaseComponent from "../CDTS/CDTSBaseComponent";

export default class HelloWorldComponent extends CDTSBaseComponent {

    constructor(targetElementId, data) {
        super(targetElementId, data);
    }

    public generateHtml() {
        if (this.data) {
            if (this.data.name) {
                return `<p>Hello ${this.data.name}!</p>`;
            }
        }
        return "<p>Hello World!</p>";
    }
}
