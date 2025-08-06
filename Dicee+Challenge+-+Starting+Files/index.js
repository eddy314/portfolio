


function refreshScore(){
    
var RandomNumber1 = Math.floor(Math.random()*6)+1;
var RandomDiceImage = ("dice" + RandomNumber1 +".png");
var RandomImageSource = "Images/" + RandomDiceImage;
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src",RandomImageSource);


var RandomNumber2 = Math.floor(Math.random()*6)+1;
var RandomImageSource2 = ("Images/dice" + RandomNumber2 +".png");
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src",RandomImageSource2);
}

const refreshBtn = document.getElementById("refreshBtn");
refreshBtn.addEventListener("click",refreshScore);


refreshScore();


// let and const

// 1. LET -> variable declaration in js
// block scope
// let arushi = "Arushi";

// function aman(){
//     if(true){
//         let arushi = "Abhinav";
//         console.log("aman inside",arushi)
//     }
//     console.log("aman",arushi)
// }

// console.log("aman outer",arushi)
