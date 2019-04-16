import * as CDTSConstants from './CDTSConstants';
import CDTSLoader  from './CDTSLoader';
import CDTSInstructionProcessor from './CDTSInstructionProcessor';
import '@babel/polyfill';

CDTSLoader.getCDTSInstructions(window)
.then( json => {
    var instructionprocessor = new CDTSInstructionProcessor(json, window);
    //run all direct replace instructions
    var allinstructions = [];
    if(instructionprocessor[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY]){
        allinstructions = allinstructions.concat(instructionprocessor[CDTSConstants.CDTS_INSTRUCTIONS_DIRECT_REPLACE_KEY]);
    }
    if(instructionprocessor[CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY]){
        allinstructions = allinstructions.concat(instructionprocessor[CDTSConstants.CDTS_INSTRUCTIONS_COMPONENT_REPLACE_KEY]);
    }
    if(instructionprocessor[CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_SRC_KEY]){
        allinstructions = allinstructions.concat(instructionprocessor[CDTSConstants.CDTS_INSTRUCTIONS_ADDITIONAL_SCRIPTS_SRC_KEY]);
    }
    Promise.all(allinstructions)
    .then( () => console.log(`completed executing CDTS instructions`))
    .catch(error => console.error(`Error executing CDTS instructions: ${error.message}`))
})
.catch( error => console.error(`Error getting CDTS instructions: ${error.message}`));