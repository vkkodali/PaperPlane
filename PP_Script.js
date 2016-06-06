var theUrl = document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0];
if (theUrl.innerHTML.startsWith("<img alt=\"Icon for HighWire\"")) {
  window.open(String(theUrl).replace('long', 'full.pdf'), "_self");
} else {
  alert("Not a HighWire Journal");
}
