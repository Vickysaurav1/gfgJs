const readLineSync = require("readline-sync");

const number = Number(readLineSync.question("Enter a number? "));

const reminder =  number % 2;

if(reminder===0){
    console.log("Even Number");
    if(number % 4 === 0){
        console.log(`${number} is divisible by 4 also`)
    }else{
        console.log(`${number} is not divisible by 4`)
    }
}else{
    console.log("Odd Number");
}