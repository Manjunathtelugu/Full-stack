function validateInput(event){
let char=event.key;
if(!/^[a-zA-Z ]$/.test(char)){
event.preventDefault();
}
}

function highlightField(element){
element.classList.add("highlight");
}

function removeHighlight(element){
element.classList.remove("highlight");
}

function submitForm(){
alert("Feedback submitted successfully!");
}