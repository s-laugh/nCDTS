import CDTSBaseComponent from '../CDTS/CDTSBaseComponent';
import * as CDTSConstants from '../CDTS/CDTSConstants';

export default class SplashContentComponent extends CDTSBaseComponent {

    constructor(targetElementId, data) {
        if (arguments.length != 2) {
            throw CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID;
        }
        super(targetElementId, data);
        this.hasDataForRequiredProperties();

    }

    hasDataForRequiredProperties(data) {
        var requiredProperties = [
            'cdts_version', 
            'nameEng', 
            'indexEng',
            'nameFra',
            'indexFra',
            'termsEng',
            'termsFra'
        ];
        var keys = Object.keys(this.data);
        requiredProperties.forEach((required) => {
            if(keys.includes(required) == false){
                throw CDTSConstants.CDTS_INSTRUCTIONS_NOT_VALID;
            }
        });
    }

    generateHtml() {
        return (`<p>Hello ${this.data.nameEng}</p>`);
    }
}