/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//var naamDoosje;
//naamDoosje = "Nathan";
//console.log(naamDoosje);

//TOGGLE PRIJS INDICATOR ----------------------------------------------
var clickButton = document.getElementById('contactButton');
var veld = document.querySelectorAll('form');
console.log(veld[0]);

function show() {
//    console.log("check");
    veld[0].classList.toggle('contactShow');
}

clickButton.addEventListener('click', show);
