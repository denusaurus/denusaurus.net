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

  if (dsdmt.className == "closed") {
    dsdmt.className = "open";
    dsdmtT.classList.add("pressed");
  } else {
    dsdmt.className = "closed";
    dsdmtT.classList.remove("pressed");
  }
}

const titkT = document.getElementById("titk-tab")

function toggleTitk() {

  if (titk.className == "closed") {
    titk.className = "open";
    titkT.classList.add("pressed");
  } else {
    titk.className = "closed";
    titkT.classList.remove("pressed");
  }
}

const charaT = document.getElementById("chara-tab")

function toggleChara() {

  if (chara.className == "closed") {
    chara.className = "open";
    charaT.classList.add("pressed");
  } else {
    chara.className = "closed";
    charaT.classList.remove("pressed");
  }
}

const personT = document.getElementById("person-tab")

function togglePerson() {

  if (person.className == "closed") {
    person.className = "open";
    personT.classList.add("pressed");
  } else {
    person.className = "closed";
    personT.classList.remove("pressed");
  }
}

const aboutT = document.getElementById("about-tab")

function toggleAbout() {

  if (about.className == "closed") {
    about.className = "open";
    aboutT.classList.add("pressed");
  } else {
    about.className = "closed";
    aboutT.classList.remove("pressed");
  }
}

const cvT = document.getElementById("cv-tab")

function toggleCv() {

  if (cv.className == "closed") {
    cv.className = "open";
    cvT.classList.add("pressed");
  } else {
    cv.className = "closed";
    cvT.classList.remove("pressed");
  }
}

const contactT = document.getElementById("contact-tab")

function toggleContact() {

  if (contact.className == "closed") {
    contact.className = "open";
    contactT.classList.add("pressed");
  } else {
    contact.className = "closed";
    contactT.classList.remove("pressed");
  }
}

// open & close

const dsdmt = document.getElementById("dsdmt")

function openDsdmt() {
  dsdmt.className = "open";
  dsdmtF.className = "unclicked";
  dsdmtT.style.display = "flex";
  dsdmtT.classList.add("pressed");
}

function closeDsdmt() {
  dsdmt.className = "closed";
  dsdmtT.style.display = "none";
}

const titk = document.getElementById("titk")

function openTitk() {
  titk.className = "open";
  titkF.className = "unclicked";
  titkT.style.display = "flex";
  titkT.classList.add("pressed");
}

function closeTitk() {
  titk.className = "closed";
  titkT.style.display = "none";
}

const chara = document.getElementById("chara")

function openChara() {
  chara.className = "open";
  charaF.className = "unclicked";
  charaT.style.display = "flex";
  charaT.classList.add("pressed");
}

function closeChara() {
  chara.className = "closed";
  charaT.style.display = "none";
}

const person = document.getElementById("person")

function openPerson() {
  person.className = "open";
  personF.className = "unclicked";
  personT.style.display = "flex";
  personT.classList.add("pressed");
}

function closePerson() {
  person.className = "closed";
  personT.style.display = "none";
}

const about = document.getElementById("about")

function openAbout() {
  about.className = "open";
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
  bubbleDefault.classList.replace("open", "closed");
  bubbleContact.classList.replace("closed", "open");
  contactT.style.display = "flex";
  contactT.classList.add("pressed");
}

function closeContact () {
  contact.className = 'closed';
  bubbleDefault.classList.replace("closed", "open");
  bubbleContact.classList.replace("open", "closed");
  contactT.style.display = "none";
}

const start = document.getElementById("start-window")

function toggleStart() {
  if (start.className == "closed-start")
      start.className = "open";
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

// bring to top

// gallery toggle

const galleryA = document.getElementById("gallery-a")
const galleryB = document.getElementById("gallery-b")
const galleryC = document.getElementById("gallery-c")
const ttitleA = document.getElementById("tasktitle-a")
const ttitleB = document.getElementById("tasktitle-b")
const ttitleC = document.getElementById("tasktitle-c")
const tcontA = document.getElementById("taskcont-a")
const tcontB = document.getElementById("taskcont-b")
const tcontC = document.getElementById("taskcont-c")

function toggleA() {
  galleryA.style.display = "flex";
  galleryB.style.display = "none";
  ttitleA.classList.add("active");
  ttitleB.classList.remove("active");
  tcontA.classList.add("active");
  tcontB.classList.remove("active");
}

function toggleB() {
  galleryA.style.display = "none";
  galleryB.style.display = "flex";
  ttitleA.classList.remove("active");
  ttitleB.classList.add("active");
  tcontA.classList.remove("active");
  tcontB.classList.add("active");
}

function toggleC() {
  galleryA.style.display = "none";
  galleryB.style.display = "none";
  galleryC.style.display = "flex";
  ttitleA.classList.remove("active");
  ttitleB.classList.remove("active");
  ttitleC.classList.add("active");
  tcontA.classList.remove("active");
  tcontB.classList.remove("active");
  tcontC.classList.add("active");
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