var urlPatterns = [
  {urlIn: 'biomedcentral.com', replaceThis: 'articles', replaceWith: 'track/pdf', addThis: '?site=pubmed.gov'},
  {urlIn: 'endocrine.org', replaceThis: 'doi', replaceWith: 'doi/pdf', addThis: ''},
  {urlIn: 'annualreviews.org', replaceThis: 'full', replaceWith: 'pdf', addThis: },
  {urlIn: 'tandfonline.com', replaceThis: 'full', replaceWith: 'pdf', addThis: },
  {urlIn: 'future-science.com', replaceThis: 'abs', replaceWith: 'pdf', addThis: },
  {urlIn: 'spandidos-publications.com', replaceThis: '', replaceWith: '', addThis: '/download' },
  {urlIn: 'dx.doi.org/10.1021', replaceThis: 'dx.doi.org', replaceWith: 'pubs.acs.org/doi/pdf', addThis: ''},
  {urlIn: 'dx.doi.org/10.3389', replaceThis: 'dx.doi.org', replaceWith: 'readcube.com/articles', addThis: ''},
  {urlIn: 'dx.doi.org/10.1002', replaceThis: 'dx.doi.org', replaceWith: 'onlinelibrary.wiley.com/doi', addThis: '/pdf'},
  {urlIn: 'dx.doi.org/10.1016', replaceThis: 'dx.doi.org', replaceWith: 'onlinelibrary.wiley.com/doi', addThis: '/pdf'},
  {urlIn: 'dx.doi.org/10.1110', replaceThis: 'dx.doi.org', replaceWith: 'onlinelibrary.wiley.com/doi', addThis: '/pdf'},
  {urlIn: 'dx.doi.org/10.1111', replaceThis: 'dx.doi.org', replaceWith: 'onlinelibrary.wiley.com/doi', addThis: '/pdf'},
  {urlIn: 'dx.doi.org/10.1113', replaceThis: 'dx.doi.org', replaceWith: 'onlinelibrary.wiley.com/doi', addThis: '/pdf'},
  {urlIn: 'dx.doi.org/10.1089', replaceThis: 'dx.doi.org', replaceWith: 'online.liebertpub.com/doi/pdf', addThis: ''},
  {urlIn: , replaceThis: , replaceWith: , addThis: }

];

/* var theUrl = String(document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0]);
var garbage = theUrl.indexOf('?');
theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length); */

for (i = 0; i < urlPatterns.length; i += 1) {
  if (theUrl.includes(urlPatterns[i].urlIn)) {
    console.log(theUrl.replace(urlPatterns[i].replaceThis, urlPatterns[i].replaceWith) + urlPatterns[i].addThis);
    break;
  } else {
    console.log("keep going...");
  }
}
