var theUrl = document.getElementsByClassName("icons portlet")[0].getElementsByTagName("a")[0];
if (theUrl.innerHTML.startsWith("<img alt=\"Icon for HighWire\"")) {
  location.href = String(theUrl).replace('long', 'full.pdf');
  /* window.open(theUrl, "_self"); */
} else {
  alert("Not a HighWire Journal");
}
