function responsiveTopNav() {
  var x = document.getElementById("top-nav");
  if (x.className === "top-nav") {
    x.className += "-responsive";
  } else {
    x.className = "top-nav";
  }
}

function responsiveSideNav() {
  var x = document.getElementById("aside-nav");
  if (x.className === "aside-nav") {
    x.className += "-responsive";
  } else {
    x.className = "aside-nav";
  }
}