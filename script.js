var elList = document.getElementById("list");
var elButton = document.getElementById("btn");

function addItem(e) {
   var elElement = document.createElement("li");
   var whatever = el.value;
   var elText = document.createTextNode(whatever);
   elElement.appendChild(elText);
   elList.appendChild(elElement);
}

function removeItem(e) {
   var elElement = document.getElementsByTagName("li");
   var elContainer = elElement.parentNode;
   elContainer.removeChild(elElement);
}

var el = document.getElementById("blank");

elButton.addEventListener("click", addItem, false);

if ("DOMNodeInserted") {
   document.addEventListener("click", removeItem, false);
}