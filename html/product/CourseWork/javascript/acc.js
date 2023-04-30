function myJoy() {
  var ddots = document.getElementById("dddots");
  var dmoreText = document.getElementById("ddmore");
  var dbtnText = document.getElementById("ddmyBtn");

  if (ddots.style.display === "none") {
    ddots.style.display = "inline";
    dbtnText.innerHTML = "Read more";
    dmoreText.style.display = "none";
  } else {
    ddots.style.display = "none";
    dbtnText.innerHTML = "Read less";
    dmoreText.style.display = "inline";
  }
}


function myDrone() {
  var dronedots = document.getElementById("dronedots");
  var dronemoreText = document.getElementById("dronemore");
  var dronebtnText = document.getElementById("dronemyBtn");

  if (dronedots.style.display === "none") {
    dronedots.style.display = "inline";
    dronebtnText.innerHTML = "Read more";
    dronemoreText.style.display = "none";
  } else {
    dronedots.style.display = "none";
    dronebtnText.innerHTML = "Read less";
    dronemoreText.style.display = "inline";
  }
}


function myJoy() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myrec()
{

  var mic = document.getElementById("mic");
  var micText = document.getElementById("micTex");
  var micBtn = document.getElementById("micBttn");

  if (mic.style.display === "none") {
    mic.style.display = "inline";
    micBtn.innerHTML = "Read more";
    micText.style.display = "none";
  } else {
    mic.style.display = "none";
    micBtn.innerHTML = "Read less";
    micText.style.display = "inline";
  }
}
function myrecdes()
{

  var micdes = document.getElementById("micdes");
  var micTextdes = document.getElementById("micTexdes");
  var micBtndes = document.getElementById("micBttndes");

  if (micdes.style.display === "none") {
    micdes.style.display = "inline";
    micBtndes.innerHTML = "Read more";
    micTextdes.style.display = "none";
  } else {
    micdes.style.display = "none";
    micBtndes.innerHTML = "Read less";
    micTextdes.style.display = "inline";
  }
}