var theUrl = document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0];
if (theUrl.innerHTML.startsWith("<img alt=\"Icon for HighWire\"")) {
  window.location = String(theUrl).replace('long', 'full.pdf');
} else {
  alert("Not a HighWire Journal");
}
