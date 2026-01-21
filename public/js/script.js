// loading screen

// open & close

const dsdmt = document.getElementById("dsdmt")

function openDsdmt() {
  dsdmt.className = 'open';
}

function closeDsdmt() {
  dsdmt.className = 'closed';
}

const titk = document.getElementById("titk")

function openTitk() {
  titk.className = 'open';
}

function closeTitk() {
  titk.className = 'closed';
}


function openAbout() {

}

function closeAbout () {

}

function openCV() {
  
}

function closeCV () {
  
}

function openContact() {
  
}

function closeContact () {
  
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
        restriction: 'parent',
        endOnly: true
      })
    ],

    autoScroll: true,

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
