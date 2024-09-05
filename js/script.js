"use strict"

let frases = document.getElementsByClassName("frase");
console.log(frases);
console.log(frases[2].classList);


console.log(frases[0].innerHTML + " frase0");
setTimeout(() => {
    frases[0].classList.toggle("frase");
}, 1000);

console.log(frases[1].innerHTML + " frase1");

setTimeout(() => {
    frases[1].classList.toggle("frase");
}, 2000);




console.log(frases[2].innerHTML + " frase2");
console.log(frases[2].classList);
setTimeout(() => {
    if (frases[2]) {
        frases[2].classList.toggle("frase");

    } else { console.log(`no esta la frase 2`) }
}, 4000);

