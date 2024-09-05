"use strict"

let frases = document.getElementsByClassName("frase");
console.log(frases);

/*for (let i=0;i<frases.length; i++){
    setTimeout(()=>{console.log(frases[i].classList);
        console.log(i);
        frases[i].classList.remove("frase");
        console.log(frases[i].classList);

    },5000)
}*/

/*setTimeout(()=>{frases[0].classList.remove("frase")},1000);
console.log(frases[0]);
setTimeout(()=>{frases[1].classList.remove("frase")},2000);
console.log(frases[1]);
setTimeout(()=>{frases[2].classList.remove("frase")},3000);  
console.log(frases[2]); */
  

if (frases.length > 0) {
    setTimeout(() => {
        if (frases[0]) {
            frases[0].classList.remove("frase");
        }else{console.log(`no esta la frase 0`)}
    }, 1000);
    console.log(frases[0]);
}

if (frases.length > 1) {
    setTimeout(() => {
        if (frases[1]) {
            frases[1].classList.remove("frase");
        }else{console.log(`no esta la frase 1`)}
    }, 2000);
    console.log(frases[1]);
}

if (frases.length > 2) {
    setTimeout(() => {
        if (frases[2]) {
            frases[2].classList.remove("frase");
        }else{console.log(`no esta la frase 2`)}
    }, 3000);
    console.log(frases[2]);
}



