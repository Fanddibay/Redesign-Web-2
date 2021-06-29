// animated js

var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// navbar custom js
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("drop-fixed").style.display = "block";
  } else {
    document.getElementById("drop-fixed").style.display = "none";
  }
}
