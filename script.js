var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyb = document.getElementById("gradient");


window.onload = function() {
	bodyb.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = bodyb.style.background + ";";
}

function setGradient() {
	bodyb.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = bodyb.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


const body = document.getElementsByTagName('BODY')[0];
const random = document.getElementById('random')[0];

function changeBackground() {
  body.style.background = `linear-gradient(to right, ${getRandomHEXColor()}, ${getRandomHEXColor()})`;
}

function getRandomHEXColor() {
  const SEED = '0123456789abcdef';
  let output = '#';
  while (output.length < 7) {
    output += SEED[Math.floor(Math.random() * SEED.length)];
  }
  return output;
}

random.addEventListener("click", changeBackground);
