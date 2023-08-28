/**
 * Array Includes method
 */

const availableSizes =["S","M","L","XL","XXL","XXXL"];
const readlineSync = require("readline-sync");
const userSize = readlineSync.question(" size of shirt do you want? (S/M/L/XL/XXL/XXXL)-").toUpperCase()


const isSizeFound = availableSizes.includes(userSize);

//using ternary operator
isSizeFound?console.log("size is avilable"):console.log("Size is Not available");