function updateTime() { //updates time in lower right corner
    document.querySelector("#timeElement").innerHTML = currentTimecurrentTime = new Date().toLocaleString();
}
setInterval(updateTime, 1);



// Make the DIV element draggable:
window.onload = dragElement(document.getElementById("window"));

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
    document.onmousemove = dragElement();
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


  /*
  window.onload = addListeners;
function addListeners(){
    document.getElementById('window').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
  var div = document.getElementById('window');
  div.style.position = 'absolute';
  div.style.top = (e.clientY - offsetY) + 'px';
  div.style.left = (e.clientX - offsetX) + 'px';
}

*/


/*
var welcomeScreen = document.querySelector("#window")
var welcomeScreenClose = document.querySelector("#c")

var welcomeScreenOpen = document.querySelector("#resize")

welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
  });
  
  welcomeScreenOpen.addEventListener("click", function() {
    openWindow(welcomeScreen);
  });

function openWindow(element) {
    element.style.display = "flex"
  }

function closeWindow(element) {
    element.style.display = "none"
  }
  */