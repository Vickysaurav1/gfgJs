// let number = 100;
// let divVal;

// for(divVal=2;divVal<=number;divVal++){
// if(number%divVal===0){
//    let q=number/divVal;
//     console.log(divVal);
//     number=q;
//     divVal--;
//     //console.log(divVal);
// }
// }
function printPrimeFactorization(n) {
    // write your code here
    for(let divVal=2;divVal<=n;divVal++){
        if(n%divVal===0){
            let q=n/divVal;
            console.log(divVal);
            n=q;
            divVal--;
        }
    }
}
printPrimeFactorization(100);