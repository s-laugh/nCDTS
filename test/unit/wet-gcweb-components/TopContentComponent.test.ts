import TopContentComponent from '../../../src/wet-gcweb-components/TopContentComponent';
import * as CDTSConstants from '../../../src/CDTS/CDTSConstants';
var elementId = "element-id";
var data = {
    cdts_version: "v4_0_30",
    x: 245
};
var expectedSkipNavigationHtml =`
<ul id="wb-tphp">
<li class="wb-slc">
<a class="wb-sl" href="#wb-cont">Skip to main content</a>
</li>
<li class="wb-slc">
<a class="wb-sl" href="#wb-info">Skip to "About government"</a>
</li>
</ul>`;
var expectedLanguageSelectionHtml =`<section id="wb-lng" class="text-right">
<h2 class="wb-inv">Language selection</h2>
<ul class="list-inline margin-bottom-none">
<li><a lang="fr" href="content-fr.html">Français</a></li>
</ul>
</section>`;

test('TopContentComponent - generateHtml - data with required values set - expect correct html string to be returned.', ()=>{
    let component = new TopContentComponent(elementId, data);
    let generatedHtml = component.generateHtml();

    expect(generatedHtml.replace(/\s/g,'')).toContain(expectedSkipNavigationHtml.replace(/\s/g,''));
    expect(generatedHtml.replace(/\s/g,'')).toContain(expectedLanguageSelectionHtml.replace(/\s/g,''));
});