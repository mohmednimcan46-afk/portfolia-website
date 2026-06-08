// Typing Animation

const text = [
  "Web Developer",
  "Computer Science Student",
  "Future Full Stack Developer",
  "Frontend Developer"
];

let textIndex = 0;
let charIndex = 0;

const typingElement =
document.querySelector(".typing");

function typeText(){

if(charIndex < text[textIndex].length){

typingElement.textContent +=
text[textIndex].charAt(charIndex);

charIndex++;

setTimeout(typeText,100);

}else{

setTimeout(eraseText,1500);

}

}

function eraseText(){

if(charIndex > 0){

typingElement.textContent =
text[textIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseText,50);

}else{

textIndex++;

if(textIndex >= text.length){
textIndex = 0;
}

setTimeout(typeText,300);

}

}

document.addEventListener("DOMContentLoaded",function(){

if(text.length){

setTimeout(typeText,500);

}

});


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements =
document.querySelectorAll(
".skill-card,.cert-card,.about-box,.contact-box"
);

hiddenElements.forEach((el)=>{
observer.observe(el);
});


// Smooth Hover Glow

const cards =
document.querySelectorAll(
".skill-card,.cert-card"
);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x =
e.offsetX;

const y =
e.offsetY;

card.style.setProperty(
"--x",
x + "px"
);

card.style.setProperty(
"--y",
y + "px"
);

});

});


// Welcome Message

console.log(
"Welcome To Moh'ed Nim'an Portfolio 🔥"
);