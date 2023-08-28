/**
 * Array sort method
 * 
 * for strings it checks their UTF-16 value and as per that sort them.
 * 
 * By default even numbers also will be getting coberted into strings and then sort method will check their UTF-16 value.
 * 
 * it sorts the given number and charecters of an array the way we need. like ascending or descending order.
 */

const fruits = ["apple","cherry","orange","banana"]
console.log("before sortig>>",fruits);
//sorts in alphabetical order by default
fruits.sort(); //ascending order
console.log("after sorting",fruits);

//numbers getting converted into UTF-16 example

const numbers = [1,2,3,4,5,8,7,9,6,22,11,33,44]; 
//ideally it should return [1,2,3,4,5,6,7,8,9,11,22,33,44] however that's not the case because of UTF-16 conversion.
console.log("sorted as per UTF-16>>",numbers.sort());

//This can be solved by using a callback function.

function sortInAsscending(a,b){
    return a-b;
}

numbers.sort(sortInAsscending);
console.log("sorting after callback function>>",numbers);

//using same principle use it in decensiding order,

function sortInDecending(a,b){
    return b-a;
}
numbers.sort(sortInDecending);
console.log("sorting after decensding>>",numbers);