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

const start = document.getElementById("start-content")

function toggleStart() {
  if (start.className == "closed")
      start.className = "open";
  else
      start.className = "closed";
}

// drag

// resize

interact('.resizable')
  .resizable({
    edges: { top: true, left: true, bottom: true, right: true },
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

        Object.assign(event.target.dataset, { x, y })
      }
    }
  })

// bring to top
