import SplashContentComponent from './SplashContentComponent';
const components = {
    SplashContentComponent
};

export default class ModuleComponents{
 constructor(componentname,targetelement, opts){
     return new components[componentname](targetelement,opts);
 }
}