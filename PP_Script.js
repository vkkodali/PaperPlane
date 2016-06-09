var theUrl = document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0];
if (theUrl.innerHTML.startsWith("<img alt=\"Icon for HighWire\"")) {
	window.location = String(theUrl).replace('long', 'full.pdf');
} else if (String(theUrl).includes("biomedcentral.com")) {
	theUrl = String(theUrl).replace('articles', 'track/pdf');
	window.location = theUrl + '?site=pubmed.gov';
}	else {
	alert("The way to the pdf I know not.  Yes, hmmm.");
}
