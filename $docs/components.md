# List of components by templates

- Templates
  - Components
    - Modules

## GCWeb

#### refTop

This is all of the references to be made before existing page content.

* **$jqueryEnv** - Used to determine location of jQuery files (local / external).
* **$webAnalytics** - Used to determine inclusion of current analytics code.
* **$isApplication** - Used to determine if this will use the application templates (true/false).

### top

This is all of the html to be included before existing page content.

* **$search** - Used to display search.
* **$siteMenu** - Used to display site menu.
* **$lngLinks** - Links to pages in other languages.
* **$showPreContent** - Used to determine if the precontent space will be displayed.
* **$breadcrumbs** - Used to set custom breadcrumbs.
* **$topSecMenu** - Set to true if you want to use the secondary navigation.

### preFooter

This is all of the html to be included after existing page content.

* **$dateModified** - The date the content was last modified.
* **$showPostContent** - Used to determine if the postcontent space will be displayed, off by default.
* **$showShare** - Used to determine if the share button will be displayed
* **$showFeedback** - Used to determine if the "Report a problem ..." button will be displayed or customized
* **$versionIdentifier** - Used instead of dateModified
* **$screenIdentifier** - Used to identify screens for users that need help
* **$pagedetails** - Used to determine if the pagedetails div will be displayed
* **$isContainer** - Used to add the container class to the pageDetails section when using the homepage look

### secmenu

This is all of the html for the secondary menu.

* **$sections** - Loops of the sections

### footer

This is all of the html to be included after existing page content.

* **$contactLinks** - Used to override the Contact link in the footer.
* **$termsLink** - Used to override the Terms and conditions link in the footer.
* **$privacyLink** - Used to override the Privacy link in the footer.
* **$showFooter** - Used to determine if the page footer will be displayed.

### refFooter

This is all of the references to be made before existing page content.

* **$exitScript** - If set to true, loads a script that alerts users they are leaving a secure site.
* **$displayModal** - If set to true will display modal otherwise skip to exitURL.
* **$exitURL** - The URL where the users are redirected if they continue.
* **$exitMsg** - The message to display to the user.
* **$exitDomains** - Domains to not check for secure exit.
* **$jqueryEnv** - Used to determine location of jQuery files (local / external).
* **$webAnalytics** - Used to determine inclusion of current analytics code.
* **$isApplication** - Used to determine if this will use the application templates (true/false).

### appTop

This is all of the html to be included before existing page content.

* **$topCusMenu** - Set to true if you want to use a custom footer.
* **$topSecMenu** - Set to true if you want to use the secondary navigation.
* **$appName** - Used to determine the name of the app.
* **$appSettings** - Used to customize the app settings link.
* **$signOut** - Used to customize the link to sign out.
* **$signIn** - Used to customize the link to sign in.
* **$lngLinks** - Links to pages in other languages.
* **$customSearch** - Used to control the custom searches.
* **$menuPath** - Used to define the path to the menu that will be ajaxed in.
* **$menuLinks** - Loops of the menu sections - MSCA only
* **$breadcrumbs** - Used to set custom breadcrumbs.
* **$showPreContent** - Used to determine if the precontent space will be displayed.

### appFooter

This is all of the html to be included after existing page content.

* **$contactLink** - Used to override the Contact link in the footer.
* **$termsLink** - Used to override the Terms and conditions link in the footer.
* **$privacyLink** - Used to override the Privacy link in the footer.
* **$footerSections** - Used to populate the footer with custom links.

### serverRefTop

This is all of the references to be made before existing page content.

* **$jqueryEnv** - Used to determine location of jQuery files (local / external).

### serverTop

No modules inside component

### serverBottom

No modules inside component

### splashTop

This is all of the references to be made before existing page content.

* **$jqueryEnv** - Used to determine location of jQuery files (local / external).

### splash

This is all of the html to be included in the body.

* **$nameEng** - The English name of your web asset.
* **$nameFra** - The French name of your web asset.
* **$indexEng** - The English index of the asset.
* **$indexFra** - The French index of the asset.
* **$termsEng** - The English Terms and conditions of use.
* **$termsFra** - The French Terms and conditions of use.
* **$jqueryEnv** - Used to determine location of jQuery files (local / external).
* **$webAnalytics** - Used to determine inclusion of current analytics code.

## GCIntranet

