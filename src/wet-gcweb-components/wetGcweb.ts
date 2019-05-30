import SplashContentComponent from "./SplashContentComponent";
import TopContentComponent from "./TopContentComponent";

const components = {
  SplashContentComponent,
  TopContentComponent
};

export default class ModuleComponents {
  constructor(componentname, targetelement, opts) {
    return new components[componentname](targetelement, opts);
  }
}
