// const displayMessage= "I am a Mentor at GeeksForGeeks";
// console.log(displayMessage.length);
// console.log(displayMessage.charAt(100));
// console.log(displayMessage.length);

/**
 * program to exceed the value of given char by 2.
 */

// const changeValueByTwo=(str)=>{
    // let num=0;
    // let str1="";
//     let arr=[];
//     let newValue;
//     for(let i=0;i<str.length;i++){
//         // num=str.charCodeAt(i)+2; //step 1
//         // str1=String.fromCharCode(str.charCodeAt(i)+2); //step 2
//         arr.push(String.fromCharCode(str.charCodeAt(i)+2));  //step1+step2
//     } 
//     newValue=arr.join("");
//     console.log(newValue);
// }
// changeValueByTwo("RaM");

/**
 * program to demonstrate includes method of JS.
 */
// const displayMessage= "I love to code in light mode";
// console.log(`Does message include 'code'? ${displayMessage.includes('code')}`); //returns boolean value.

/**
 * program to find first name of the user.
 */
let findFirstName = (username) =>{
    if(username.includes(" ")){
        return username.substring(0, username.indexOf(" "));
    }
} 
console.log(findFirstName("Saurav Sharma"));

