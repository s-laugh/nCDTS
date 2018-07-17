# Next Centrally Deployed Templates Solution (nCDTS)

The Next Centrally Deployed Templates Solution (nCDTS), is a redesign of the original CDTS solution. As the CDST has evolved
      beyond its original design the current architecture has reached its limits in adaptability and maintainability. This
      **_project is a prototype_** that attempts to make use of the best new functionality avaiable in modern web browsers and
      ECMA Script - while still being backwards compatible with some older browsers.
      
## Purpose
    
The purpose of Next Centrally Deployed Templates Solution(nCDTS) is to have the client browser apply common, standardized DOM templates to a web page. The nCDTS module uses an instruction object to determine what to alter in the DOM of the page. 
The instruction object can be inline or fetched.
The *primary goal* of the core nCDTS module is to apply the instructed DOM alterations as efficiently as possible and then get out of the way of other page functionality (scripts, css).

## Working with this repository

#### Requirements
To work with this project you will need **node.js** and **npm** installed. This project was created with:
- **node.js v8.11.2**
- **npm 5.6.0**

#### Install dependecies
Clone this repository to a local directory. On the command line move to the cloned directory ( this directory should contain the package.json file) and run : `$ npm install`.
This command will read the package.json and install the npm dependencies to the *node_modules* directory.

#### Test Driven Development
##### Unit Tests

The */test/unit* directory structure follows that of the */src* directory and unit test files *should* be named for their corresponding src files using a **'.test.js'** extension. For example:
 - src/CDTSLoader.js -> test/unit/CDTSLoader.test.js
 - src/DemonstrationComponents/LoremIpsumComponent.js -> test/unit/DemonstrationComponents/LoremIpsumComponent.test.js
 
This project makes use of the [Jest](https://jestjs.io/) testing frame work from Facebook for unit testing. Jest is configured to look for tests in the */test/unit* directory.

To run all unit tests on the command line move to the cloned directory and run: `$npm test`.

To run a specific unit test on the command line move to the cloned directory and run: `$npm test -- {path/to/my/testcode.test.js}`. Using the LoremIpsumComponent for an example : `$npm test -- test/unit/DemonstrationComponents/LoremIpsumComponent.test.js`

For more details on command line arguments that can be passed to Jest please see [Jest CLI Options](https://jestjs.io/docs/en/cli).

The **jsdom** npm package is also included as a development dependency.  This enables DOM like functionality within node.js unit tests. For more information see [jsdom](https://www.npmjs.com/package/jsdom).