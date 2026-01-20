// open & close

const dsdmt = document.getElementById("dsdmt")

function openDsdmt() {
  dsdmt.className = 'opening';
  dsdmt.addEventListener(
    "transitionend",
    () => {
      dsdmt.className = 'open';
    },
    { once: true}
  );
}

function closeDsdmt() {
  dsdmt.className = 'closing';
  dsdmt.addEventListener(
    "transitionend",
    () => {
      dsdmt.className = 'closed';
    },
    { once: true}
  );
}

const titk = document.getElementById("titk")

function openTitk() {
  titk.className = 'opening';
  titk.addEventListener(
    "transitionend",
    () => {
      titk.className = 'open';
    },
    { once: true}
  );
}

function closeTitk() {
  titk.className = 'closing';
  titk.addEventListener(
    "transitionend",
    () => {
      titk.className = 'closed';
    },
    { once: true}
  );
}

// drag

// bring to top
