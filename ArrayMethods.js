/**
 * Array methods - push & concat
 */

/**
 * Arrays are mutable(can be changed) 
 */

//push

let fruits =["apple","mango","banana"]
console.log("fruits before push>>",fruits);
fruits.push("orange","kiwi","beer"); //push can be used to change the array, it doesn't return new array and it can have one or multiple inputs.
console.log("fruits after push>>>",fruits)

//concat

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,0];
let arr3 = arr1.concat(arr2); // concat combines the 2 or differnt array to return 1 new array having all the elements of it's previous arrays.
console.log("arr3>>>",arr3);

//same can be acheived by using spread operator as well
let arr4 = [...arr1,...arr2];
console.log("arr4>>",arr4);