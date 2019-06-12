import SplashContentComponent from "./SplashContentComponent";
import TopContentComponent from "./TopContentComponent";
import PreFooterContentComponent from "./PreFooterContentComponent";

const components : any = {
  SplashContentComponent,
  TopContentComponent,
  PreFooterContentComponent
};

export default class ModuleComponents {
  constructor(componentName : string, targetElement : string, opts : any) {
    return new components[componentName](targetElement, opts);
  }
}
