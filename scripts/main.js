// IMPORT


// STYLE CONTROL


// SVG ANIMATION
var loadedAnimation = new Vivus("uebitLogoLine", {
  type: "delayed",
  start: "manual",
  duration: 20,
}, function () {
  var fill = document.getElementById("uebitLogoFace");
  var stroke = document.getElementById("uebitLogoLine");
  fill.style.fillOpacity = "1";
  stroke.style.strokeWidth = "0";
});


// LOAD LOGO-MOTION
window.addEventListener("DOMContentLoaded", function () {
  loadedAnimation.play();
  console.log("Hello:" + process.env.npm_package_version);
});