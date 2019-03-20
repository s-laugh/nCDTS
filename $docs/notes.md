# Centrally Deployed Templates Solution (CDTS) 2.0 Notes

This is a repository to help plan the future CDTS code base. Adding notes here and testing out new ideas.

This project is based on the idea by Stan Grabinski in [Next Centrally Deployed Templates Solution (nCDTS)](https://gccode.ssc-spc.gc.ca/stan_grabinski/Next_Centrally_Deployed_Templates_Solution)

## Ideas

* [ ] node.js
* [ ] no environment variables / relative to package paths
* [ ] webpack
* [ ] open source the project
* [ ] automated testing
  * [ ] unit test
  * [ ] a11y
* [ ] automated deploy using CI
* [ ] generating example pages (documentation)
  * [ ] using assemble.io
* [ ] licensing (MIT, ISC, etc?)
* [ ] babel
* [ ] Way for developer to choose what version to use (in json, path or other way) 
  * [ ] way to maintain it (git branch, git label, git releases)
* [ ] git submodule for samples
* [ ] create a i18n.json for all text inside components 

Process

Have two ways of controlling the modules:

1. Using an [external JSON file](example.json)
2. Using `data-cdts` attributes with JSON objects as values to control the output in the [HTML source](example.html)

You can combine both ways, the external file as a site wide information, the inline attributes as a per page type of control.

Could we make it like CSS where the inline overrides the linked file?

Maybe add a place to title the page with a `data-cdts` attribute? This way we control the `h1` and the `title` with the same text

Should we limit the amount of HTML elements they put in??? Remove the `main`, `h1`, `title`, and even the meta description.

Should our script element for our main JS be at the top of the bottom of the page????



