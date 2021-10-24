let input = prompt("Zadaj svoje meno: ");

let elementName = document.getElementById("Name");
elementName.innerHTML = input;

let letterCounter = document.getElementById("countLetters");
letterCounter.innerHTML = input.length

let isLongElement = document.getElementById("isLong");
if(input.length >= 5){
    isLongElement.innerHTML = "Máš dlhé meno";
}
else{
    isLongElement.innerHTML = "Máš krátke meno"
}