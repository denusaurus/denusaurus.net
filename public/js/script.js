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
  } else{
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
  } else{
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
  } else{
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
  } else{
    personF.className = "unclicked";
  }
})

// tabs

const dsdmtT = document.getElementById("dsdmt-tab")

function minimizeDsdmt() {
  dsdmt.className = "closed";
  dsdmtT.style.display = "flex";
  dsdmtT.classList.remove("pressed");
}

const titkT = document.getElementById("titk-tab")

function minimizeTitk() {
  titk.className = "closed";
  titkT.style.display = "flex";
  titkT.classList.remove("pressed");
}

const charaT = document.getElementById("chara-tab")

function minimizeChara() {
  chara.className = "closed";
  charaT.style.display = "flex";
  charaT.classList.remove("pressed");
}

const personT = document.getElementById("person-tab")

function minimizePerson() {
  person.className = "closed";
  personT.style.display = "flex";
  personT.classList.remove("pressed");
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
  about.className = 'open';
}

function closeAbout () {
  about.className = 'closed';
}

const cv = document.getElementById("cv")

function openCV() {
  cv.className = 'open';
}

function closeCV () {
  cv.className = 'closed';
}

const contact = document.getElementById("contact")
const bubbleDefault = document.getElementById("bubble-default")
const bubbleContact = document.getElementById("bubble-contact")

function openContact() {
  contact.className = 'open';
  bubbleDefault.classList.replace("open", "closed");
  bubbleContact.classList.replace("closed", "open");
}

function closeContact () {
  contact.className = 'closed';
  bubbleDefault.classList.replace("closed", "open");
  bubbleContact.classList.replace("open", "closed");
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

var galleryA = document.getElementById("gallery-a");
var galleryB = document.getElementById("gallery-b");
var tasktitleA = document.getElementById("tasktitle-a");
var taskcontA = document.getElementById("taskcont-a")

function toggleA() {
  galleryA.style.display = "flex";
  galleryB.style.display = "none";
  tasktitleA.classList.remove("task-box-title");
  tasktitleA.classList.add("task-box-title-active");
  taskcontA.classList.remove("task-box-content");
  taskcontA.classList.add("task-box-content-active");
}

function toggleB() {
  galleryB.style.display = "flex";
  galleryA.style.display = "none";
  tasktitleA.classList.remove("task-box-title-active");
  tasktitleA.classList.add("task-box-title");
  taskcontA.classList.remove("task-box-content-active");
  taskcontA.classList.add("task-box-content");
  
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