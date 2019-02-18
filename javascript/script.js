// This script is copyrigh (c) 2019
// Jerry L Hoover - Two Brave Dogs

//TODO
    //Create random fun fact 
    //generate random number between 1 and # of fun facts
    //read selected fun fact
    //inject selected fun fact into DOM

// =-=-=-=-= This function creates a random number =-=-=-=-=-=
function getFunFactIndex(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min;
}

var funFactIndex = 0;

funFactIndex = getFunFactIndex(0, 100);

// TEMP DEBUG OUTPUT
console.log(funFactIndex);