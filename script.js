function updateTime() { //updates time in lower right corner
    document.querySelector("#timeElement").innerHTML = currentTimecurrentTime = new Date().toLocaleString();
}
setInterval(updateTime, 1);



// Make the DIV element draggable:
window.onload = dragElement(document.getElementById("main"));
window.onload = dragElement(document.getElementById("notes"));
window.onload = dragElement(document.getElementById("art"))
window.onload = dragElement(document.getElementById("guitar"))
window.onload = dragElement(document.getElementById("lemonade"))
window.onload = dragElement(document.getElementById("aframe"))
window.onload = dragElement(document.getElementById("books"))
window.onload = dragElement(document.getElementById("flexbox"))



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

var welcomeScreen = document.querySelector("#main")
var notesScreen = document.querySelector("#notes")
var typicalScreen = document.querySelector("#typical")
var lemonadeScreen = document.querySelector("#lemonade")

addWindowTapHandling(welcomeScreen)
addWindowTapHandling(notesScreen)
addWindowTapHandling(lemonadeScreen)



var biggestIndex = 1

function addWindowTapHandling(element) {
  //puts the current window in front of the other
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}



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


function openNotes(element) {
  //confetti
  /*
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0.05, y: 0.2 },
  });
  */
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
 
}


let parent = document.getElementById("booklist")
fetch("https://api.airtable.com/v0/appnG920EgeSDbgtT/tblAKQHEYpWXx3o49", 
{headers:
    {Authorization: "Bearer patpSYdx3Abw3h8h7.abd52d7dccadbb7102e7116d6a63ccf21006432cdd8e2ba529692e2b989570cb"}

}).then(res=> res.json()).then(json => {
let records = json.records.map(previousRecord =>{
    return previousRecord.fields["Books"];       
})
let num = Math.floor(Math.random() * records.length)
console.log(records[num])
book_item = document.createElement("p")
book_item.innerHTML = records[num]
parent.appendChild(book_item)

})



  let sketch = function(p) {
    let cnv;
    let d;
  p.setup = function() {
  cnv = p.createCanvas(400, 400);
  cnv.mouseOver(changeGray);
  d = 10;
}

p.draw  = function() {
  let ry = p.random(0, 400)
  let rx = p.random(0, 400)
  let d = p.random(5,40);
  let check = 1;
  let r; let b; let g;
    let change = p.random(1,4)
    if(change <= 1){
      g = 66
      b = 245
      r = p.random(66,246)
    }
    else if(change <= 2){
      g = p.random(66,246)
      r = 66
      b = 245
    }
    else{
      b = p.random(66,246)
      r = 66
      g = 245
    }
  let t = p.random(10,225)
  p.fill(r,g,b,t)
  p.noStroke();
  p.ellipse(rx, ry, d, d);

}

function changeGray() {
  d = d + 10;
  if (d > 100) {
    d = 0;
  }
}

}

let p5canvas = new p5(sketch, 'artdiv');
  



//flexbox styling
function flexdirectionrow(){
  let parent = document.getElementById("parentflex")
  parent.style.flexDirection = "row"
}

function flexdirectioncol(){
  let parent = document.getElementById("parentflex")
  parent.style.flexDirection = "column"
}