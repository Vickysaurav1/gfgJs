/**
 * When a copy of array is being created then it reffers to the same memory location as the previous one and in this case the original array is the only one which is present at the location so it will update the original array if we are doing any operation on the newly created array.
 * Please refer the below example.
 * it refers as "Shallow copy"
 */

let arr1 = [1,2,3];
let arr2 = arr1;


//Shallow copy.

console.log("arr1--",arr1); //Is created at memory location - abc123.
console.log("arr2--", arr2); // Is also pointing/referring to the same memory location.

arr2.push(4);

console.log("Updated arr1",arr1);
console.log("Updated arr2",arr2);

//spread operator -- we use to prevent array by reference or shallow copy.

let arr3 = [...arr1];
console.log("arr3",arr3);

arr3.push(5);
console.log("Updated arr1",arr1);
console.log("Updated arr3",arr3);

//for loop ---- aother way to create a copy of an array without referring to the same memory location.

let arr4=[];
for(let i=0;i<arr1.length;i++){
    arr4.push(arr1[i]);
}

console.log("arr4",arr4);

//using for of

let arr5=[];
for(let number of arr1){
    arr5.push(number)  ;
}
console.log("arr5",arr5);

arr5.push(5);

console.log("Updated arr1",arr1);
console.log("Updated arr5",arr5);

