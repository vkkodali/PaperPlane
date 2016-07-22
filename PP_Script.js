/* testing */
var theUrl = document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0];
if (theUrl.innerHTML.startsWith("<img alt=\"Icon for HighWire\"")) {
	window.location.href = String(theUrl).replace('long', 'full.pdf');
} else if (String(theUrl).includes("biomedcentral.com")) {
	theUrl = String(theUrl).replace('articles', 'track/pdf');
	window.location = theUrl + '?site=pubmed.gov';
} else if (String(theUrl).includes("endocrine.org")) {
	theUrl = String(theUrl);
	var garbage = theUrl.indexOf('?');
	theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
	window.location = theUrl.replace('doi', 'doi/pdf');
} else if (String(theUrl).includes("annualreviews.org") || String(theUrl).includes("tandfonline.com")) {
	theUrl = String(theUrl);
	var garbage = theUrl.indexOf('?');
	theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
	window.location = theUrl.replace('full', 'pdf');
} else if (String(theUrl).includes("future-science.com")) {
	theUrl = String(theUrl);
	var garbage = theUrl.indexOf('?');
	theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
	window.location = theUrl.replace('abs', 'pdf');
} else if (String(theUrl).includes("spandidos-publications.com")) {
	window.location = String(theUrl) + '/download';
} else if (String(theUrl).startsWith("http://dx.doi.org/10.1021")) {
	window.location = String(theUrl).replace('dx.doi.org', 'pubs.acs.org/doi/pdf');
} else if (String(theUrl).startsWith("http://dx.doi.org/10.3389")) {
	window.location = String(theUrl).replace('dx.doi.org', 'readcube.com/articles');
} else if (String(theUrl).startsWith("http://dx.doi.org/10.1002") || String(theUrl).startsWith("http://dx.doi.org/10.1016") || String(theUrl).startsWith("http://dx.doi.org/10.1110") || String(theUrl).startsWith("http://dx.doi.org/10.1111") || String(theUrl).startsWith("http://dx.doi.org/10.1113")) {
	window.location = String(theUrl).replace('dx.doi.org', 'onlinelibrary.wiley.com/doi') + '/pdf';
} else if (String(theUrl).startsWith("http://dx.doi.org/10.1089")) {
	window.location = String(theUrl).replace('dx.doi.org', 'online.liebertpub.com/doi/pdf');
} else if (String(theUrl).startsWith("http://dx.doi.org/10.1007")) {
	window.location = String(theUrl).replace('dx.doi.org', 'link.springer.com/content/pdf/') + '.pdf';
} else if (String(theUrl).startsWith("http://dx.doi.org/10.1172")) {
	theUrl = String(theUrl);
	var articleID = theUrl.substring(theUrl.indexOf('JCI') + 3, theUrl.length);
	window.location.href = "https://www.jci.org/articles/view/" + articleID + "/pdf/render";
} else if (String(document.getElementsByClassName("rprtid")[0].getElementsByTagName("a")[1]).includes("pmc/articles")){
	window.open(document.getElementsByClassName("rprtid")[0].getElementsByTagName("a")[1] + 'pdf', "_self");
} else {
	alert("The way to the pdf I know not.  Yes, hmmm.");
}
