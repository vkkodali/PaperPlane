var theUrl = document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0];
if (theUrl.innerHTML.startsWith("<img alt=\"Icon for HighWire\"")) {
	window.location = String(theUrl).replace('long', 'full.pdf');
} else if (String(theUrl).includes("biomedcentral.com")) {
	theUrl = String(theUrl).replace('articles', 'track/pdf');
	window.location = theUrl + '?site=pubmed.gov';
} else if (String(theUrl).includes("endocrine.org")) {
	theUrl = String(theUrl);
	var garbage = theUrl.indexOf('?');
	theUrl = theUrl.substring(0, garbage != -1 ? garbage : theUrl.length);
	window.location = theUrl.replace('doi', 'doi/pdf');
} else if (theUrl.innerHTML.startsWith("<img alt=\"Icon for Wiley\"")) {
	theUrl = String(theUrl).replace('dx.doi.org', 'onlinelibrary.wiley.com/doi');
	window.location = theUrl + '/pdf';
} else {
	alert("The way to the pdf I know not.  Yes, hmmm.");
}
