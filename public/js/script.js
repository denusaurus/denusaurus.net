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

const illuF = document.getElementById("illu-folder")

function highlightIllu() {
  if (illuF.className == "unclicked")
      illuF.className = "clicked";
  else
      illuF.className = "unclicked";
}

window.addEventListener('click', function(e){
  if (this.document.getElementById("illu-folder").contains(e.target)){
    illuF.className = "clicked";
  } else{
    illuF.className = "unclicked";
  }
})

const sketchbF = document.getElementById("sketchb-folder")

function highlightSketchb() {
  if (sketchbF.className == "unclicked")
      sketchbF.className = "clicked";
  else
      sketchbF.className = "unclicked";
}

window.addEventListener('click', function(e){
  if (this.document.getElementById("sketchb-folder").contains(e.target)){
    sketchbF.className = "clicked";
  } else{
    sketchbF.className = "unclicked";
  }
})

const croquisF = document.getElementById("croquis-folder")

function highlightCroquis() {
  if (croquisF.className == "unclicked")
      croquisF.className = "clicked";
  else
      croquisF.className = "unclicked";
}

window.addEventListener('click', function(e){
  if (this.document.getElementById("croquis-folder").contains(e.target)){
    croquisF.className = "clicked";
  } else{
    croquisF.className = "unclicked";
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

const illuT = document.getElementById("illu-tab")

function minimizeIllu() {
  illu.className = "closed";
  illuT.style.display = "flex";
  illuT.classList.remove("pressed");
}

const sketchbT = document.getElementById("sketchb-tab")

function minimizeSketchb() {
  sketchb.className = "closed";
  sketchbT.style.display = "flex";
  sketchbT.classList.remove("pressed");
}

const croquisT = document.getElementById("croquis-tab")

function minimizeCroquis() {
  croquis.className = "closed";
  croquisT.style.display = "flex";
  croquisT.classList.remove("pressed");
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

const sketchb = document.getElementById("sketchbook")

function openSketchb() {
  sketchb.className = "open";
  sketchbF.className = "unclicked";
  sketchbT.style.display = "flex";
  sketchbT.classList.add("pressed");
}

function closeSketchb() {
  sketchb.className = "closed";
  sketchbT.style.display = "none";
}

const illu = document.getElementById("illu")

function openIllu() {
  illu.className = "open";
  illuF.className = "unclicked";
  illuT.style.display = "flex";
  illuT.classList.add("pressed");
}

function closeIllu() {
  illu.className = "closed";
  illuT.style.display = "none";
}

const croquis = document.getElementById("croquis")

function openCroquis() {
  croquis.className = "open";
  croquisF.className = "unclicked";
  croquisT.style.display = "flex";
  croquisT.classList.add("pressed");
}

function closeCroquis() {
  croquis.className = "closed";
  croquisT.style.display = "none";
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