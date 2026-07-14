const text = "This website is still under construction.";
const element = document.getElementById("construction-text");
let index = 0;

function writeCharacter() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index).replace(/\n/g, "<br>");
    index++;
    setTimeout(writeCharacter, 40);
  }
}

writeCharacter();
