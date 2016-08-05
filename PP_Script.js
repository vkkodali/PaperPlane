var urlPatterns = [
  {urlIn: 'biomedcentral.com', replaceThis: 'articles', replaceWith: 'track/pdf', addThis: '?site=pubmed.gov'},
  {urlIn: 'endocrine.org', replaceThis: 'doi', replaceWith: 'doi/pdf', addThis: ''},
  {urlIn: 'annualreviews.org', replaceThis: 'full', replaceWith: 'pdf', addThis: ''},
  {urlIn: 'tandfonline.com', replaceThis: 'full', replaceWith: 'pdf', addThis: ''},
  {urlIn: 'future-science.com', replaceThis: 'abs', replaceWith: 'pdf', addThis: ''},
  {urlIn: 'spandidos-publications.com', replaceThis: '', replaceWith: '', addThis: '/download' },
  {urlIn: 'dx.doi.org/10.1021', replaceThis: 'dx.doi.org', replaceWith: 'pubs.acs.org/doi/pdf', addThis: ''},
  {urlIn: 'dx.doi.org/10.3389', replaceThis: 'dx.doi.org', replaceWith: 'readcube.com/articles', addThis: ''},
  {urlIn: 'dx.doi.org/10.1002', replaceThis: 'dx.doi.org', replaceWith: 'onlinelibrary.wiley.com/doi', addThis: '/pdf'},
  {urlIn: 'dx.doi.org/10.1016', replaceThis: 'dx.doi.org', replaceWith: 'onlinelibrary.wiley.com/doi', addThis: '/pdf'},
  {urlIn: 'dx.doi.org/10.1110', replaceThis: 'dx.doi.org', replaceWith: 'onlinelibrary.wiley.com/doi', addThis: '/pdf'},
  {urlIn: 'dx.doi.org/10.1111', replaceThis: 'dx.doi.org', replaceWith: 'onlinelibrary.wiley.com/doi', addThis: '/pdf'},
  {urlIn: 'dx.doi.org/10.1113', replaceThis: 'dx.doi.org', replaceWith: 'onlinelibrary.wiley.com/doi', addThis: '/pdf'},
  {urlIn: 'dx.doi.org/10.2164', replaceThis: 'dx.doi.org', replaceWith: 'onlinelibrary.wiley.com/doi', addThis: '/pdf'},
  {urlIn: 'dx.doi.org/10.1089', replaceThis: 'dx.doi.org', replaceWith: 'online.liebertpub.com/doi/pdf', addThis: ''},
  {urlIn: 'dx.doi.org/10.1007', replaceThis: 'dx.doi.org', replaceWith: 'link.springer.com/content/pdf/', addThis: '.pdf'},
  {urlIn: 'dx.doi.org/10.1172', replaceThis: 'dx.doi.org/10.1172/JCI', replaceWith: 'jci.org/articles/view/', addThis: '/pdf/render'},
  {urlIn: 'karger.com/?DOI=', replaceThis: '?DOI=', replaceWith: 'Article/Pdf/', addThis: ''},
  {urlIn: 'thieme-connect.com', replaceThis: 'DOI/DOI?', replaceWith: 'products/ejournals/pdf/', addThis: '.pdf'},
  {urlIn: 'www.thno.org', replaceThis: 'htm', replaceWith: 'pdf', addThis: ''}
];

/* Check if the Url includes a urlPattern */
function checkPatterns () {
  theUrl = document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0];
  for (i = 0; i < urlPatterns.length; i += 1) {
    if (String(theUrl).includes(urlPatterns[i].urlIn)) {
      return true;
    }
  }
}

/* Reformat based on urlPatterns */
function patternFetch () {
  theUrl = String(document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0]);
  for (i = 0; i < urlPatterns.length; i += 1) {
    if (theUrl.includes(urlPatterns[i].urlIn) && (urlPatterns[i].urlIn.includes('karger') || urlPatterns[i].urlIn.includes('thieme-connect'))) {
      window.open(theUrl.replace(urlPatterns[i].replaceThis, urlPatterns[i].replaceWith) + urlPatterns[i].addThis, "_self");
      return;
    } else if (theUrl.includes(urlPatterns[i].urlIn)) {
      var garbage = theUrl.indexOf('?');
      theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
      window.open(theUrl.replace(urlPatterns[i].replaceThis, urlPatterns[i].replaceWith) + urlPatterns[i].addThis, "_self");
      return;
    }
  }
}

/* Reformat urls for PLoS Journals */
function reformatPlosUrls () {
  var PLoSJournals = [
    {shortName: "pbio", longName: "plosbiology" },
    {shortName: "pcbi", longName: "ploscompbiol" },
    {shortName: "pntd", longName: "plosntds" },
    {shortName: "pmed", longName: "plosmedicine" },
    {shortName: "pgen", longName: "plosgenetics" },
    {shortName: "ppat", longName: "plospathogens" },
    {shortName: "pone", longName: "plosone" }
  ];
  for (i = 0; i < PLoSJournals.length; i += 1) {
    if (String(theUrl).includes(PLoSJournals[i].shortName)) {
      window.open(String(theUrl).replace('dx.plos.org/', 'journals.plos.org/' + PLoSJournals[i].longName + '/article/asset?id=') + '.PDF', "_self");
      return;
    }
  }
}

/* Reformat urls for NPG Journals */
function reformatNPGUrls () {
  theUrl = String(document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0]);
  var NPGJournal = (theUrl.substring(theUrl.indexOf('1038/') + 5, theUrl.length)).replace(/[0-9.]/g,'');
  var NPGJournals1 = ["nature", "nbt", "ncb", "nchembio", "nchem", "ncomms", "ng", "ni", "nmat", "nm", "nmeth", "nn", "nprot", "nrc", "nrcardio", "nrclinonc", "nrd", "nrendo", "nrgastro", "nrg", "nri", "nrmicro", "nrm", "nrneph", "nrneurol", "nrn", "nrrheum", "nrurol", "nsmb", "bdj"];
  var NPGJournals2 = ["npp", "bcj", "bmt", "bjc", "cgt", "cdd", "cr", "cmi", "ctg", "ejcn", "ejhg", "emm", "eye"];
  if (NPGJournals1.indexOf(NPGJournal) < 0 && NPGJournals2.indexOf(NPGJournal) < 0) {
    lastDitchFetch();
    return;
  };
  for (i = 0; i < NPGJournals1.length; i += 1) {
    var NPGre = new RegExp('\\b' + NPGJournals1[i] + '\\b');
    if (String(theUrl).match(NPGre) !== null) {
      window.open(String(theUrl).replace('dx.doi.org/10.1038', 'www.nature.com/' + NPGJournals1[i] + '/vaop/ncurrent/pdf') + '.pdf', "_self");
      return;
      }
    };
  for (i = 0; i < NPGJournals2.length; i += 1) {
    var NPGre = new RegExp('\\b' + NPGJournals2[i] + '\\b');
    if (String(theUrl).match(NPGre) !== null) {
      var ArticleID = (theUrl.substring(theUrl.indexOf("1038/") + 5, theUrl.length)).replace(/\D/g,'');
      window.open('http://www.nature.com/' + NPGJournals2[i] + '/vaop/ncurrent/pdf' + NPGJournals2[i] + ArticleID + 'a.pdf', "_self");
      return;
      }
    };
}

/* Last ditch effort to fetch a PDF */
function lastDitchFetch () {
  theUrl = document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0];
  if (String(document.getElementsByClassName("rprtid")[0].getElementsByTagName("a")[1]).includes("pmc/articles")) {
    window.open(document.getElementsByClassName("rprtid")[0].getElementsByTagName("a")[1] + 'pdf', "_self");
  } else {
    noPDFErrorMessage();
  }
}

/* Error messages to display when PDF is not found */
function noPDFErrorMessage () {
  var yodaSays = [
    "Where the pdf is I know not.",
    "The way to the PDF I know not. Yes, hmmm.",
    "Sorry, seem to locate the pdf, I cannot.",
    "No clue where the pdf is, I have.",
    "Sorry, locate the pdf I cannot.  Yeesssssss."
  ];
  var i = Math.floor(Math.random()*yodaSays.length);
  alert(yodaSays[i]);
}

/***************/
/* Paper Plane */
/***************/
var theUrl = document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0];
if (!(window.location.href.startsWith('http://www.ncbi.nlm.nih.gov/pubmed'))) {
  alert("This script works only on PubMed abstract pages");
} else if (document.getElementsByClassName("icons portlet").length < 1) {
  alert("It appears that a Full text link is not available through PubMed.");
} else if (theUrl.innerHTML.startsWith("<img alt=\"Icon for HighWire\"")) {
    window.open(String(theUrl).replace('long', 'full.pdf'), "_self");
} else if (checkPatterns()) {
  patternFetch();
} else if (String(theUrl).includes('dx.plos.org')) {
  reformatPlosUrls();
} else if (String(theUrl).includes('dx.doi.org/10.1038')) {
  reformatNPGUrls();
} else {
  lastDitchFetch();
}
