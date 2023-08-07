const totalMarksScored = 80;

// if(totalMarksScored<40){
//     console.log("you need to work hard");
// }else if(totalMarksScored<55){
//     console.log("B grade");
// }else if(totalMarksScored<75){
//     console.log("B+ Grade");
// }else if (totalMarksScored<80){
//     console.log("A grade");
// }else if(totalMarksScored<85){
//     console.log("A+ Grade");
// }else{
//     console.log("Genius");
// }

// (totalMarksScored>40)?console.log("good"):console.log("bad")

// const result = (totalMarksScored>40) ? "Good" : "Bad"

// //line no. 3 & 5 are same. The difference is we're assigning the result in to a different variable in line no.5

// console.log(result);

const result =
  totalMarksScored < 40
    ? "you need to work hard"
    : totalMarksScored < 55
    ? "B grade"
    : totalMarksScored < 75
    ? "B+ Grade"
    : totalMarksScored < 80
    ? "A Grade"
    : totalMarksScored < 85
    ? "A+ Grade"
    : "Genius"
console.log(result);
