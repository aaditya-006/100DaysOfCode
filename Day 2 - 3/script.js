// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave",function(){
//     console.log("Left!");
// })
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

    var button = document.createElement("Button")
    button.appendChild(document.createTextNode("Done!!"));
    li.appendChild(button);
    button.onclick=underlineParent;
    
// CREATE AN ELEMENT
    var button =document.createElement("button"); 
// APPEND TEXT TO BUTTON
	button.appendChild(document.createTextNode("Delete!"));
// APPEND BUTTON TO LIST
	li.appendChild(button);

	button.onclick=removeParent;
}

function underlineParent(event){
    event.target.parentNode.classList.toggle("done");
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);