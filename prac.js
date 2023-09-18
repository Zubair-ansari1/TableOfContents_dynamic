function openToc() {
    document.getElementById("content").style.display = "block";
  document.getElementById("open").style.display = "none";
  document.getElementById("close").style.display = "flex";
}
function closeToc() {
    document.getElementById("content").style.display = "none";
    document.getElementById("close").style.display = "none";
     document.getElementById("open").style.display = "flex";
}
