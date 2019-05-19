import TopContentComponent from '../../../src/wet-gcweb-components/TopContentComponent';
import * as CDTSConstants from '../../../src/CDTS/CDTSConstants';
var elementId = "element-id";
var data = {
    "search" : true,
    "siteMenu" : true,
    "lngLinks": [],
    "showPreContent" : false,
    "breadcrumbs": [],
    "topSecMenu" : false
};
var expectedSkipNavigationHtml =`
<ul id="wb-tphp">
<li class="wb-slc">
<a class="wb-sl" href="#wb-cont">value-1</a>
</li>
<li class="wb-slc">
<a class="wb-sl" href="#wb-info">value-2</a>
</li>
</ul>`;
var expectedLanguageSelectionHtml =`<section id="wb-lng" class="text-right">
<h2 class="wb-inv">value-1</h2>
<ul class="list-inline margin-bottom-none">
<li><a lang="fr" href="content-fr.html">Français</a></li>
</ul>
</section>`;
var expectedGoCSearchHtml = `< section id = "wb-srch" class="col-lg-8 text-right" >
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
< /section>`

test('TopContentComponent - generateSkipNavHtml - data with required value set - expect correct html string to be returned', ()=>{
    let component = new TopContentComponent(elementId, data);
    let vals = ['value-1','value-2'];
    let generatedHtml = component.generateSkipNavHtml(vals);
    expect(generatedHtml.replace(/\s/g,'')).toContain(expectedSkipNavigationHtml.replace(/\s/g,''));
});

test('TopContentComponent - generateLanguageSelectionHtml - data with required value set - expect correct html string to be returned', ()=>{
    let component = new TopContentComponent(elementId, data);
    let vals = ['value-1'];
    let generatedHtml = component.generateLanguageSelectionHtml(vals);
    expect(generatedHtml.replace(/\s/g,'')).toContain(expectedLanguageSelectionHtml.replace(/\s/g,''));
});

test('TopContentComponent - generateGoCSearchHtml - data with required value set - expect correct html string to be returned', ()=>{
    let component = new TopContentComponent(elementId, data);
    let vals = ['value-1', 'value-2'];
    let generatedHtml = component.generateGoCSearchHtml(vals);
    expect(generatedHtml.replace(/\s/g,'')).toContain(expectedGoCSearchHtml.replace(/\s/g,''));
});

// test('TopContentComponent - generateHtml - data with required values set - expect correct html string to be returned.', ()=>{
//     let component = new TopContentComponent(elementId, data);
//     let generatedHtml = component.generateHtml();

//     expect(generatedHtml.replace(/\s/g,'')).toContain(expectedSkipNavigationHtml.replace(/\s/g,''));
//     expect(generatedHtml.replace(/\s/g,'')).toContain(expectedLanguageSelectionHtml.replace(/\s/g,''));
// });
