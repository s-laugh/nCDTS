import TopContentComponent from "../../../src/wet-gcweb-components/TopContentComponent";
// tslint:disable: max-line-length
const elementId = "element-id";
const data = {
    breadcrumbs: [],
    lngLinks: [],
    search: true,
    showPreContent: false,
    siteMenu: true,
    topSecMenu: false,
};
const expectedSkipNavigationHtml = `
<!-- Skip navigation start -->
<ul id="wb-tphp">
    <li class="wb-slc">
        <a class="wb-sl" href="#wb-cont">Skip to main content</a>
    </li>
    <li class="wb-slc">
        <a class="wb-sl" href="#wb-info">Skip to "About government"</a>
    </li>
</ul>
<!-- Skip navigation ends -->
`;
const expectedSkipNavigationWithSectionMenuHtml = `
<!-- Skip navigation start -->
<ul id="wb-tphp">
    <li class="wb-slc">
        <a class="wb-sl" href="#wb-cont">Skip to main content</a>
    </li>
    <li class="wb-slc">
        <a class="wb-sl" href="#wb-info">Skip to "About government"</a>
    </li>
    <li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>
</ul>
<!-- Skip navigation ends -->
`;
const expectedLanguageSelectionHtml = `<section id="wb-lng" class="text-right">
<h2 class="wb-inv">value-1</h2>
<ul class="list-inline margin-bottom-none">
<li><a lang="fr" href="content-fr.html">Français</a></li>
</ul>
</section>`;
const expectedGoCSearchHtml = `<section id = "wb-srch" class="col-lg-8 text-right" >
<h2>value-1< /h2>
< form action = "#" method = "post" name = "cse-search-box" role = "search" class="form-inline" >
    <div class="form-group" >
        <label for= "wb-srch-q" class= "wb-inv" >value-2< /label>
            < input id = "wb-srch-q" list = "wb-srch-q-ac" class="wb-srch-q form-control" name = "q" type = "search" value = "" size = "34"
                maxlength = "170" placeholder = "value-2" >
            <datalist id="wb-srch-q-ac" >
            </datalist>
    < /div>
    < div class="form-group submit" >
        <button type="submit" id = "wb-srch-sub" class="btn btn-primary btn-small" name = "wb-srch-sub" > <span class="glyphicon-search glyphicon" > </span><span
            class="wb-inv" >value-1< /span></button >
    </div>
< /form>
< /section>`;
const expectedBreadcrumbHtml = `
<!-- Breadcrumbs start -->
<nav id="wb-bc" property="breadcrumb">
    <h2>You are here:</h2>
    <div class="container">
        <ol class="breadcrumb">
            <li><a href="https://www.canada.ca/en.html">Home</a></li>
            <li><a href="test-url">test-text</a></li>
        </ol>
    </div>
</nav>
<!-- Breadcrumbs end -->`;

test("TopContentComponent - generateSkipNavHtml - with top section menu parameter set to false - expect correct html string to be returned", () => {
    const component = new TopContentComponent(elementId, data);
    const generatedHtml = component.generateSkipNavHtml("en", false);
    expect(generatedHtml.replace(/\s/g, "")).toContain(expectedSkipNavigationHtml.replace(/\s/g, ""));
});

test("TopContentComponent - generateSkipNavHtml - with top section menu parameter set to true - expect correct html string to be returned", () => {
    const component = new TopContentComponent(elementId, data);
    const generatedHtml = component.generateSkipNavHtml("en", true);
    expect(generatedHtml.replace(/\s/g, "")).toContain(expectedSkipNavigationWithSectionMenuHtml.replace(/\s/g, ""));
});

test("TopContentComponent - generateLanguageSelectionHtml - data with required value set - expect correct html string to be returned", () => {
    const component = new TopContentComponent(elementId, data);
    const links = [{ url: "content-fr.html", text: "Français", lang: "fr" }];
    const vals = ["value-1", links];
    const generatedHtml = component.generateLanguageSelectionHtml(vals);
    expect(generatedHtml.replace(/\s/g, "")).toContain(expectedLanguageSelectionHtml.replace(/\s/g, ""));
});

test("TopContentComponent - generateGoCSearchHtml - data with required value set - expect correct html string to be returned", () => {
    const component = new TopContentComponent(elementId, data);
    const vals = ["value-1", "value-2"];
    const generatedHtml = component.generateGoCSearchHtml(vals);
    expect(generatedHtml.replace(/\s/g, "")).toContain(expectedGoCSearchHtml.replace(/\s/g, ""));
});

test("TopContentComponent - generateBreadcrumbHtml - data with required value set - expect correct html string to be returned", () => {
    const component = new TopContentComponent(elementId, data);
    const links = [{ url: "test-url", text: "test-text" }];
    const vals = ["value-1", links];
    const generatedHtml = component.generateBreadcrumbHtml(vals);
    expect(generatedHtml.replace(/\s/g, "")).toContain(expectedBreadcrumbHtml.replace(/\s/g, ""));
});

// test('TopContentComponent - generateHeaderHtml - data with required value set all false/empty - expect correct html string to be returned', ()=>{
//     let data = {
//         "search" : false,
//         "siteMenu" : false,
//         "lngLinks": [],
//         "showPreContent" : false,
//         "breadcrumbs": [],
//         "topSecMenu" : false
//     };
//     let component = new TopContentComponent(elementId, data);
//     let generatedHtml = component.generateHeaderHtml();
//     expect(generatedHtml.replace(/\s/g,'')).toContain(expectedEmptyHeaderHtml.replace(/\s/g,''));
// });
