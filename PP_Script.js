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

/* Check if the current page is a PubMed abstract page and if the journal-specific PDF link is available */
function firstCheck () {
  if (!(window.location.href.startsWith('http://www.ncbi.nlm.nih.gov/pubmed/'))) {
    alert("This script works only on PubMed abstract pages");
    return;
  } else if (document.getElementsByClassName("icons portlet").length < 1) {
    alert("It appears that a Full text link is not available through PubMed.");
    return;
  };
}

firstCheck();

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
  {urlIn: 'dx.doi.org/10.1089', replaceThis: 'dx.doi.org', replaceWith: 'online.liebertpub.com/doi/pdf', addThis: ''},
  {urlIn: 'dx.doi.org/10.1007', replaceThis: 'dx.doi.org', replaceWith: 'link.springer.com/content/pdf/', addThis: '.pdf'},
  {urlIn: 'dx.doi.org/10.1172', replaceThis: 'dx.doi.org/10.1172/JCI', replaceWith: 'jci.org/articles/view/', addThis: '/pdf/render'},
  {urlIn: 'karger.com/?DOI=', replaceThis: '?DOI=', replaceWith: 'Article/Pdf/', addThis: ''}
];

var theUrl = String(document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0]);
var garbage = theUrl.indexOf('?');
theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
for (i = 0; i < urlPatterns.length; i += 1) {
  if (theUrl.includes(urlPatterns[i].urlIn)) {
    window.open(theUrl.replace(urlPatterns[i].replaceThis, urlPatterns[i].replaceWith) + urlPatterns[i].addThis, "_self");
    return;
  };
};

var theUrl = String(document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0]);
if (theUrl.innerHTML.startsWith("<img alt=\"Icon for HighWire\"")) {
  window.open(String(theUrl).replace('long', 'full.pdf'), "_self");
} else if (String(document.getElementsByClassName("rprtid")[0].getElementsByTagName("a")[1]).includes("pmc/articles")) {
  window.open(document.getElementsByClassName("rprtid")[0].getElementsByTagName("a")[1] + 'pdf', "_self");
} else {
  noPDFErrorMessage();
};
