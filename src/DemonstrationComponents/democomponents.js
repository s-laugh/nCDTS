import HelloWorldComponent from './HelloWorldComponent';
import LoremIpsumComponent from './LoremIpsumComponent';
const components = {
    HelloWorldComponent,
    LoremIpsumComponent
};

export default class ModuleComponents{
 constructor(componentname,targetelement, opts){
     return new components[componentname](targetelement,opts);
 }
}