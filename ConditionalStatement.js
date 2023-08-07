const readLineSync = require("readline-sync");

const number   = readLineSync.question("Enter a number? ");


if(number%3===0 && number%5 === 0){
    console.log("fizzBuzz");
}else if(number%5===0){
    console.log("Buzz");
}else if(number%3 === 0){
    console.log("FizZ");
}else{
    console.log("fizzfizzbuzzbuzz")
}