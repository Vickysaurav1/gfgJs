/**
 * Array mehtod part 2 - Pop and splice and slice
 */

//pop

let courses =["html","css","javascript","reactJs", "JQuery"];
console.log("array before pop>>>>",courses);

//courses.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
//pop method returns the removed value as well

let removedItem = courses.pop()
console.log("removeditem>>>",removedItem);
console.log("array after pop>>>>",courses);

//slice 

//slice(start?: number | undefined, end?: number | undefined): string[]
//The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.



let value = courses.slice(2,4); //start number is inclusive and end number is exclusive. it does not changes the original array, rather it returns a new array.
console.log('value',value)

//slice works with strings as well

let userName = "Rakesh";

console.log(userName.slice(3));

//splice

//Splice can remove elements from an array from specified index to the number we want it to remove. for example:

let coursesNew = ["html","css","javascript", "JQuery","Vue.js", "Angular"];
console.log("before splice >>> ",coursesNew );

coursesNew.splice(4,2) //removes element starting at index 4 and goes till 2 elements next.
console.log ("after splice>>> ", coursesNew);

//adding through splice.

coursesNew.splice(3,0,"reactJS"); //here we are adding an element reactJS just before index 3 without deleting any other element(0) ==> (3,0,"reactJS")
console.log ( 'after adding react js ', coursesNew )