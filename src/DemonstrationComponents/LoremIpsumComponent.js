import CDTSBaseComponent from '../CDTSBaseComponent';

export const LoremIpsumArray = [
    "Lorem ipsum dólór sit, amet contemnentes crudéli filio hunc impediente leniter ponti quáeritur torquatus. Celeritas cóllaudata ei imitarentur, oportere vocent. Contemnit discedere doloribus fugit hábet, impetum inbecilloque miraretur oritur sécuri suppetet. Causas celeritas definitiones ignota, laetetur potitur seiunctum tanta, tincidunt tranquillitatem. Eius enim gravissimis harum orationis videtis.",
    "Adipiscuntur atomorum concludaturque concursio consequatur, dividendó impediente iusteque locos omnis, posteá sentiant vél vim virtutem. Astris at attento clarorum condimentum conficiuntur contenta éxultat hábet infántes inflammat omnia. Alias dolor éxpéctant hoc insidiarum laudantium mágná notae statua superstitió ultimum verentur virtute. Anteponant ceteros imperdiet putás sententiam. Adiit cónquirendae etsi fore, incididunt libidinibus mollit naturales, nominant probarem theatro tuum vacaré.",
    "Aeternum architécto argumentandum condimentum deleniti, intellegamus nonumy omniá opes publicám scriptum tenere. Audiam caléré demócritó dissensió hoc, incommoda iniuste libidinem oratione oriantur ponatur praetóre sapientiamque sedulitatem. ámárissimám eleifend expetendam haeret magni philosophiae stoicis. Adolescens difficilem excepturi ferant inanés, inventore laoreet mox náturá numquam, pellát rhoncus solet sustulisti. Beatae dicat existimo inpórtunó, quanto responsum sedatio verbi. A disputari honoris locos odérit putanda reprehenderit sécutus successionem vocibus volutpat. Corporisque maledici munere nimium plura.",
    "Continent legatis perfunctio ultrices. Cóncludaturque consuetudine discéré éxédunt, exerci falsarum manum perdiscere periculis proin stabilique timeret videantur. Appetendum brutus dicturam liberos malivoli, ostendit provincias temporis. Auctor consistat deinde familiarem, fórmidines leo multitudinem statim. Arbitror ceteris cómpluribus contumeliae credere distrahi exeamus graeci homini intuemur praetorem repudiare tot verentur.",
    "Conversam difficilém dissentiet eórum facilisis, gustáre religionis zenonem. Altérum iniurias minorem modi, módice morte óctavió panaétium tempóribus. Fálso honesto laudem sol statu. Consiliisque numeris optimum pérfécto perpáucá, quantum sanos venisset. ",
    "Aliquid animus clariora demócriti excruciant, facultas impendet malédici paria seditione siculis. Incididunt labitur paratus sonet. Atomus elegántis existunt fastidii frequenter, gustare interesse levitatibus máius nostrum pécuniaé percipiátur recta totam ultricies. Eu genus intellegamus nostro omne quieti. Constituant elitr exedunt graeci illam infinitio irácundiáe male municipem potiora ridens tritáni turbulentaeque venisset voluit. Fingi illo laetitia mihi multitudinem, pátriám perfruique ponatur.",
    "Gloriosis historiae valetudinis virtutes. Consulatu conversám his verentur. Adhaesiones átque concludaturque consentaneum, desiderent disserunt graeca inflammat, movere utilitate. Affirmatis approbantibus aspernandum invidunt, tam utilitatibus. Clita dicant disputari ennii, hausta ótiósum polyaeno servare simulent zénoném. Captet conspectum dum ecce gáudeát, inmórtalibus iucundum lucilius natum pharetra."
];

export default class LoremIpsumComponent extends CDTSBaseComponent {
    constructor(targetElementId, data) {
        super(targetElementId, data);
    }

    generateHtml() {
        if (this.data.output === 'p') {
            let html = "";
            var i = this.data.number;
            if (i > LoremIpsumArray.length) {
                i = LoremIpsumArray.length;
            }
            for (var x = 0; x < i; x++) {
                html += `<p>${LoremIpsumArray[x]}</p>`;
            }
            return html;
        }

        if (this.data.output === 'ul') {
            let html = "";
            var loremtext = this.getRandomLoremIpsum().split('.');
            var i = this.data.number;
            if (i > loremtext.length) {
                i = loremtext.length;
            }
            for (var x = 0; x < i; x++) {
                html += `<li>${loremtext[x]}</li>`;
            }
            return `<ul>${html}</ul>`;
        }

        if (this.data.output === 'hp') {
            let html = "";
            var i = this.data.number;
            if (i > LoremIpsumArray.length) {
                i = LoremIpsumArray.length;
            }
            for (var x = 0; x < i; x++) {
                var endposition = LoremIpsumArray[x].indexOf(".");
                var headingtext = LoremIpsumArray[x].substring(0,endposition).trim();
                html += `<h${x+1}>${headingtext}</h${x+1}><p>${LoremIpsumArray[x]}</p>`;
            }
            return html;
        }

        return ``;
    }



    getRandomLoremIpsum() {
        var x = Math.floor((Math.random() * LoremIpsumArray.length));
        return LoremIpsumArray[x];
    }
}