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

// open & close

const dsdmt = document.getElementById("dsdmt")

function openDsdmt() {
  dsdmt.className = 'open';
  dsdmtF.className = "unclicked";
}

function closeDsdmt() {
  dsdmt.className = 'closed';
}

const titk = document.getElementById("titk")

function openTitk() {
  titk.className = 'open';
  titkF.className = "unclicked";
}

function closeTitk() {
  titk.className = 'closed';
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
  bubbleDefault.classList.toggle("open");
  bubbleDefault.classList.toggle("closed");
  bubbleContact.classList.toggle("open");
  bubbleContact.classList.toggle("closed");
}

function closeContact () {
  contact.className = 'closed';
  bubbleDefault.classList.toggle("open");
  bubbleDefault.classList.toggle("closed");
  bubbleContact.classList.toggle("open");
  bubbleContact.classList.toggle("closed");
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