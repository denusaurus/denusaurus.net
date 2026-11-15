function openPortfolio() {
  location.href = "portfolio/loading.html";
}

// fancybox

Fancybox.bind("[data-fancybox]", {
  theme: "auto",
  Carousel: {
    Toolbar: {
      display: {
        left: ["counter"],
        middle: [
          "zoomIn",
          "zoomOut",
          "toggle1to1",
          "rotateCCW",
          "rotateCW",
          "flipX",
          "flipY",
          "reset",
        ],
        right: ["autoplay", "thumbs", "close"],
      },
    },
    Thumbs: {
      type: "classic",
    },
  },
});

// hightlight folder

const dsdmtF = document.getElementById("dsdmt-folder")

function highlightDsdmt() {
  if (dsdmtF.className == "unclicked")
      dsdmtF.className = "clicked";
  else
      dsdmtF.className = "unclicked";
}

window.addEventListener('click', function(e){
  if (this.document.getElementById("dsdmt-folder").contains(e.target)){
    dsdmtF.className = "clicked";
  } else {
    dsdmtF.className = "unclicked";
  }
})

const titkF = document.getElementById("titk-folder")

function highlightTitk() {
  if (titkF.className == "unclicked")
      titkF.className = "clicked";
  else
      titkF.className = "unclicked";
}

window.addEventListener('click', function(e){
  if (this.document.getElementById("titk-folder").contains(e.target)){
    titkF.className = "clicked";
  } else {
    titkF.className = "unclicked";
  }
})

const charaF = document.getElementById("chara-folder")

function highlightChara() {
  if (charaF.className == "unclicked")
      charaF.className = "clicked";
  else
      charaF.className = "unclicked";
}

window.addEventListener('click', function(e){
  if (this.document.getElementById("chara-folder").contains(e.target)){
    charaF.className = "clicked";
  } else {
    charaF.className = "unclicked";
  }
})

const personF = document.getElementById("person-folder")

function highlightPerson() {
  if (personF.className == "unclicked")
      personF.className = "clicked";
  else
      personF.className = "unclicked";
}

window.addEventListener('click', function(e){
  if (this.document.getElementById("person-folder").contains(e.target)){
    personF.className = "clicked";
  } else {
    personF.className = "unclicked";
  }
})

// tabs
const dsdmtT = document.getElementById("dsdmt-tab")

function toggleDsdmt() {

  if (dsdmt.className == "closed window") {
    dsdmt.className = "open window";
    dsdmtT.classList.add("pressed");
  } else {
    dsdmt.className = "closed window";
    dsdmtT.classList.remove("pressed");
  }
}

const titkT = document.getElementById("titk-tab")

function toggleTitk() {

  if (titk.className == "closed window") {
    titk.className = "open window";
    titkT.classList.add("pressed");
  } else {
    titk.className = "closed window";
    titkT.classList.remove("pressed");
  }
}

const charaT = document.getElementById("chara-tab")

function toggleChara() {

  if (chara.className == "closed window") {
    chara.className = "open window";
    charaT.classList.add("pressed");
  } else {
    chara.className = "closed window";
    charaT.classList.remove("pressed");
  }
}

const personT = document.getElementById("person-tab")

function togglePerson() {

  if (person.className == "closed window") {
    person.className = "open window";
    personT.classList.add("pressed");
  } else {
    person.className = "closed window";
    personT.classList.remove("pressed");
  }
}

const aboutT = document.getElementById("about-tab")

function toggleAbout() {

  if (about.className == "closed window") {
    about.className = "open window";
    aboutT.classList.add("pressed");
  } else {
    about.className = "closed window";
    aboutT.classList.remove("pressed");
  }
}

const cvT = document.getElementById("cv-tab")

function toggleCv() {

  if (cv.className == "closed window") {
    cv.className = "open window";
    cvT.classList.add("pressed");
  } else {
    cv.className = "closed window";
    cvT.classList.remove("pressed");
  }
}

const contactT = document.getElementById("contact-tab")

function toggleContact() {

  if (contact.className == "closed window") {
    contact.className = "open window";
    contactT.classList.add("pressed");
  } else {
    contact.className = "closed window";
    contactT.classList.remove("pressed");
  }
}

// open & close

const dsdmt = document.getElementById("dsdmt")

function openDsdmt() {
  dsdmt.className = "open window";
  dsdmtF.className = "unclicked";
  dsdmtT.style.display = "flex";
  dsdmtT.classList.add("pressed");
}

function closeDsdmt() {
  dsdmt.className = "closed window";
  dsdmtT.style.display = "none";
}

const titk = document.getElementById("titk")

function openTitk() {
  titk.className = "open window";
  titkF.className = "unclicked";
  titkT.style.display = "flex";
  titkT.classList.add("pressed");
}

function closeTitk() {
  titk.className = "closed window";
  titkT.style.display = "none";
}

const chara = document.getElementById("chara")

function openChara() {
  chara.className = "open window";
  charaF.className = "unclicked";
  charaT.style.display = "flex";
  charaT.classList.add("pressed");
}

function closeChara() {
  chara.className = "closed window";
  charaT.style.display = "none";
}

const person = document.getElementById("person")

function openPerson() {
  person.className = "open window";
  personF.className = "unclicked";
  personT.style.display = "flex";
  personT.classList.add("pressed");
}

function closePerson() {
  person.className = "closed window";
  personT.style.display = "none";
}

const about = document.getElementById("about")

function openAbout() {
  about.className = "open window";
  aboutT.style.display = "flex";
  aboutT.classList.add("pressed");
}

function closeAbout () {
  about.className = 'closed';
  aboutT.style.display = "none";
}

const cv = document.getElementById("cv")

function openCV() {
  cv.className = 'open';
  cvT.style.display = "flex";
  cvT.classList.add("pressed");
}

function closeCV () {
  cv.className = 'closed';
  cvT.style.display = "none";
}

const contact = document.getElementById("contact")
const bubbleDefault = document.getElementById("bubble-default")
const bubbleContact = document.getElementById("bubble-contact")

function openContact() {
  contact.className = 'open';
  bubbleDefault.classList.replace("open window", "closed window");
  bubbleContact.classList.replace("closed window", "open window");
  contactT.style.display = "flex";
  contactT.classList.add("pressed");
}

function closeContact () {
  contact.className = 'closed';
  bubbleDefault.classList.replace("closed window", "open window");
  bubbleContact.classList.replace("open window", "closed window");
  contactT.style.display = "none";
}

const start = document.getElementById("start-window")

function toggleStart() {
  if (start.className == "closed-start")
      start.className = "open window";
  else
      start.className = "closed-start";
}

function leavePortfolio() {
  location.href = "shutdown.html";
}

// minimize

function minimizeDsdmt() {
  dsdmt.className = 'closed';
  dsdmtT.style.display = "flex";
  dsdmtT.classList.remove("pressed");
}

function minimizeTitk() {
  titk.className = 'closed';
  titkT.style.display = "flex";
  titkT.classList.remove("pressed");
}

function minimizeChara() {
  chara.className = 'closed';
  charaT.style.display = "flex";
  charaT.classList.remove("pressed");
}

function minimizePerson() {
  person.className = 'closed';
  personT.style.display = "flex";
  personT.classList.remove("pressed");
}

function minimizeAbout() {
  about.className = 'closed';
  aboutT.style.display = "flex";
  aboutT.classList.remove("pressed");
}

function minimizeCv() {
  cv.className = 'closed';
  cvT.style.display = "flex";
  cvT.classList.remove("pressed");
}

function minimizeContact() {
  contact.className = 'closed';
  contactT.style.display = "flex";
  contactT.classList.remove("pressed");
}

// maximize

function maximizeDsdmt() {

}

// drag

interact('.draggable')
  .draggable({
    allowFrom: '.handle',

    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'main',
        endOnly: true
      })
    ],

    listeners: {
      move: dragMoveListener
    }
  })

function dragMoveListener (event) {
  var target = event.target
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
  target.classList.remove("fullscreen")

}

window.dragMoveListener = dragMoveListener

// resize

interact('.resizable')
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move: function (event) {
        let { x, y } = event.target.dataset

        x = (parseFloat(x) || 0) + event.deltaRect.left
        y = (parseFloat(y) || 0) + event.deltaRect.top

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          transform: `translate(${x}px, ${y}px)`
        })

        Object.assign(event.target.dataset, { x, y})
      }
    }
  })

// gallery toggle
  
const DttA = document.getElementById("dsdmt-tasktitle-a");
const DtcA = document.getElementById("dsdmt-taskcont-a");
const DgA = document.getElementById("dsdmt-gallery-a");
const DttB = document.getElementById("dsdmt-tasktitle-b");
const DtcB = document.getElementById("dsdmt-taskcont-b");
const DgB = document.getElementById("dsdmt-gallery-b");

function dsdmtA() {
  DttA.classList.add("active");
  DtcA.classList.add("active");
  DttB.classList.remove("active");
  DtcB.classList.remove("active");
  DgA.style.display = "flex";
  DgB.style.display = "none";
}

function dsdmtB() {
  DttA.classList.remove("active");
  DtcA.classList.remove("active");
  DttB.classList.add("active");
  DtcB.classList.add("active");
  DgA.style.display = "none";
  DgB.style.display = "flex";
}

const TttA = document.getElementById("titk-tasktitle-a");
const TtcA = document.getElementById("titk-taskcont-a");
const TgA = document.getElementById("titk-gallery-a");
const TttB = document.getElementById("titk-tasktitle-b");
const TtcB = document.getElementById("titk-taskcont-b");
const TgB = document.getElementById("titk-gallery-b");
const TttC = document.getElementById("titk-tasktitle-c");
const TtcC = document.getElementById("titk-taskcont-c");
const TgC = document.getElementById("titk-gallery-c");

function titkA() {
  TttA.classList.add("active");
  TtcA.classList.add("active");
  TttB.classList.remove("active");
  TtcB.classList.remove("active");
  TttC.classList.remove("active");
  TtcC.classList.remove("active");
  TgA.style.display = "flex";
  TgB.style.display = "none";
  TgC.style.display = "none";
}

function titkB() {
  TttA.classList.remove("active");
  TtcA.classList.remove("active");
  TttB.classList.add("active");
  TtcB.classList.add("active");
  TttC.classList.remove("active");
  TtcC.classList.remove("active");
  TgA.style.display = "none";
  TgB.style.display = "flex";
  TgC.style.display = "none";
}

function titkC() {
  TttA.classList.remove("active");
  TtcA.classList.remove("active");
  TttB.classList.remove("active");
  TtcB.classList.remove("active");
  TttC.classList.add("active");
  TtcC.classList.add("active");
  TgA.style.display = "none";
  TgB.style.display = "none";
  TgC.style.display = "flex";
}

const PttA = document.getElementById("person-tasktitle-a");
const PtcA = document.getElementById("person-taskcont-a");
const PgA = document.getElementById("person-gallery-a");
const PttB = document.getElementById("person-tasktitle-b");
const PtcB = document.getElementById("person-taskcont-b");
const PgB = document.getElementById("person-gallery-b");
const PttC = document.getElementById("person-tasktitle-c");
const PtcC = document.getElementById("person-taskcont-c");
const PgC = document.getElementById("person-gallery-c");

function personA() {
  PttA.classList.add("active");
  PtcA.classList.add("active");
  PttB.classList.remove("active");
  PtcB.classList.remove("active");
  PttC.classList.remove("active");
  PtcC.classList.remove("active");
  PgA.style.display = "flex";
  PgB.style.display = "none";
  PgC.style.display = "none";
}

function personB() {
  PttA.classList.remove("active");
  PtcA.classList.remove("active");
  PttB.classList.add("active");
  PtcB.classList.add("active");
  PttC.classList.remove("active");
  PtcC.classList.remove("active");
  PgA.style.display = "none";
  PgB.style.display = "flex";
  PgC.style.display = "none";
}

function personC() {
  PttA.classList.remove("active");
  PtcA.classList.remove("active");
  PttB.classList.remove("active");
  PtcB.classList.remove("active");
  PttC.classList.add("active");
  PtcC.classList.add("active");
  PgA.style.display = "none";
  PgB.style.display = "none";
  PgC.style.display = "flex";
}

// clippy toggle

function fool() {

var checkedBox = document.getElementById("clippy-checkbox");
var youFool = document.getElementById("fool");

if (checkedBox.checked == true){
    youFool.style.display = "block";
  } else {
    youFool.style.display = "none";
  }
}

function foolContact() {

var checkedBox = document.getElementById("clippy-checkbox-contact");
var youFool = document.getElementById("fool-contact");

if (checkedBox.checked == true){
    youFool.style.display = "block";
  } else {
    youFool.style.display = "none";
  }
}

function clippyToggle() {

var bubbleD = document.getElementById("bubble-default")
var bubbleC = document.getElementById("bubble-contact")

  if (bubbleD.style.display == "none"){
      bubbleD.style.display = "block";
    } else {
      bubbleD.style.display = "none";
    }
  
  if (bubbleC.style.display == "none"){
      bubbleC.style.display = "block";
    } else {
      bubbleC.style.display = "none";
    }

}

// bring to top

function bringtotop(el) {
  const windows = document.querySelectorAll(".window");

  for(const element of windows) {
    element.style.zIndex = "1";
    console.log("set to 1");
  }

  console.log("now 5");
  el.style.zIndex = "5";

}

window.onload = function() {
  const elements = document.querySelectorAll(".window");

  for(const element of elements) {
    element.addEventListener("click", ()=>{bringtotop(element)});
  }
}