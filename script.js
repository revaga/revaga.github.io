function updateTime() { //updates time in lower right corner
    document.querySelector("#timeElement").innerHTML = currentTimecurrentTime = new Date().toLocaleString();
}
setInterval(updateTime, 1);



// Make the DIV element draggable:
window.onload = dragElement(document.getElementById("window"));
window.onload = dragElement(document.getElementById("notes"));
window.onload = dragElement(document.getElementById("art"))
window.onload = dragElement(document.getElementById("typical"))

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//closing a window
function closeWindow(element) {
    element.style.display = "none"
  }




var selectedIcon = undefined;

function selectIcon(element){
  element.classList.add("selected")
  selectedIcon = element
}

function  deselectIcon(element){
  element.classList.remove("selected")
  selectedIcon = undefined
}

function handleIconTap(element){
  if(element.classList.contains("selected")){
    deselectIcon(element)
    openWindow(window)
  }
  else{
    selectIcon(element)
  }
}

var welcomeScreen = document.querySelector("#window")
var notesScreen = document.querySelector("#notes")



var biggestIndex = 1

function addWindowTapHandling(element) {
  //puts the current window in front of the other
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}
addWindowTapHandling(welcomeScreen)
addWindowTapHandling(notesScreen)


function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  deselectIcon(selectedIcon)
}

/*
function initializeWindow(elementName) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(screen)
  dragElement(screen)
}
*/

//confetti


function openNotes(element) {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0.05, y: 0.2 },
  });
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
 
}

function initializeWindowart(elementName) {
  var screen = document.querySelector("#" + elementName)
  var element = document.getElementById("art");
  addWindowTapHandling(screen)
  windows.onload = dragElement(elementName)
  if(elementName != "welcome") {
  initializeIcon(elementName)  
  }
  setup();
  draw();

  function setup() {
    createCanvas(200, 200);
    background(0,0,0);
  }
  function windowResized() {
    resizeCanvas(500, 500);
  }
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
  windowResized();
  }

  initializeWindowart("art")

  
