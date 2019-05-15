# Next Centrally Deployed Templates Solution (nCDTS)

The Next Centrally Deployed Templates Solution (nCDTS), is a redesign of the original CDTS solution. As the CDST has evolved
      beyond its original design the current architecture has reached its limits in adaptability and maintainability. This
      **_project is a prototype_** that attempts to make use of the best new functionality available in modern web browsers and
      ECMA Script - while still being backwards compatible with some older browsers.
      
## Purpose
    
The purpose of Next Centrally Deployed Templates Solution(nCDTS) is to have the client browser apply common, standardized DOM templates to a web page. The nCDTS module uses an instruction object to determine what to alter in the DOM of the page. 
The instruction object can be inline or fetched.
The *primary goal* of the core nCDTS module is to apply the instructed DOM alterations as efficiently as possible and then get out of the way of other page functionality (scripts, css).

## Working with this repository

### Requirements
To work with this project you will need **node.js** and **npm** installed. This project was created with:
- **node.js v8.11.2**
- **npm 5.6.0**

#### Security

##### Verifying commits

This project will need you to use GPG to verify commits. Please follow [Signing commits with GPG](https://docs.gitlab.com/ee/user/project/repository/gpg_signed_commits/).

##### Two Factor Authentication (2FA)

All members to this project will need to have 2FA enabled to merge any code into the repository. Read more about [Two-Factor Authentication ](https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html) on the Gitlab site. 

#### Install dependencies
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

#### Builds

This project uses the [Webpack](https://webpack.js.org/) module bundler to build and minify the final JavaScript modules.

> At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

##### Development
To create a development build of the modules and launch the [Webpack Development Server](https://webpack.js.org/guides/development/#using-webpack-dev-server) on the command line move to the cloned directory and run: `$ npm run start`

This command will:
- Compile src code to un-minified js module(s) stored/served in memory (does not overwrite the builds in the /dist directory)
- Launch a local web server on port 8080
- Serve static files (html, css, json, js) found under the '/test' directory
- Open 'localhost:8080/html/index.html' in default browser
- "Hot load" changes to files in /src upon save - in memory modules are recompiled

##### Production
To create a production build of the modules on the command line move to the cloned directory and run: `$ npm run build`

This command will:
- Compile src code to minified js module(s) saved in the /dist directory. This will overwrite files in existing /dist directory. Modules created are the core **cdtsnext.js** amd the **democomponents.js**. More component modules to come ...
