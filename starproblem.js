// *****
// *****
// *****
// *****
// *****
// let result=""
// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         result+="*"

//     }
//     result+="\n"

// }
// console.log(result)
// *****
// ****
// ***
// **
// *
// let result=""
// for(let i=0;i<5;i++){
//     for(let j=0;j<5-i;j++){
//         result+="*"

//     }
//     result+="\n"

// }
// console.log(result)
// *****
//  ****
//   ***
//    **
//     *
// let result = ""
// for (let i = 0; i < 5; i++) {
//     for(let k=0;k<i;k++){
//         result+=" "
//     }
//     for (let j = 0+i; j < 5; j++) {
//         result += "*"

//     }
//     result += "\n"

// }
// console.log(result)
// *****
// ** **
// *   *
// ** **
// *****
// let result = ""
// for (let i = 0; i < 5; i++) {
//     for(let j=0;j<5;j++){
//         if(i===0 || i===4){
//             result+="*"
//         }else if(j===0  || j===5-1){
//             result+="*"
//         }else{
//             result+=" "
//         }
//     }
//     result += "\n"

// }
// console.log(result)
// *
// **
// ***
// ****
// *****
// let n=5;
// let result = ""
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       result+="*"
//     }
//     result += "\n"

// }
// console.log(result)
// *
// **
// * *
// *  *
// *   *
// ******
// let n = 6;
// let result = ""
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         if(i===n){
//             result+="*"
//         }else if(j===0 || j===i-1){
//             result+="*"
//         }else{
//             result+=" "
//         }
//     }
//     result += "\n"

// }
// console.log(result)
//     *
//    ***
//   *****
//  *******
// *********
// let n = 5;
// let result = ""
// for (let i = 1; i <= n; i++) {
//     // FOR PRINDING SPACES
//     for (let j = 1; j <= n-i; j++) {
//     result+=" "
//     }
//     for(let k=0;k<2*i-1;k++){
//         result+="*"
//     }

//     result += "\n"
// }
// console.log(result)
// *********
//  *******
//   *****
//    ***
//     *
// let n = 5;
// let result = ""
// for (let i = 1; i <= n; i++) {
//     // FOR PRINDING SPACES
//     for (let j = 1; j <i; j++) {
//         result += " "
//     }
//     // For printing stars
//     for (let k = 0; k <2 * (n-i)-1; k++) {
//         if(i===1){
//             result += "*"
//         }else if(k==1 || k==3){
//             result += " "
//         }else{
//             result+="*"
//         }
    
//     }

//     result += "\n"
// }
// console.log(result)
// //     *
// //    * *
// //   *   *
// //  *     *
// // *********
// let n = 5;
// let result = ""
// for (let i = 1; i <= n; i++) {

//     // FOR PRINTING SPACES
//     for(let j=1;j<=n-i;j++){
//         result+=" "
//     }

//     //printing stars
//     for(let k=0;k<2*i-1;k++){

//         if(i===1 || i===n){
//             result +="*"
//         }
//         else
//         {
//             if(k===0 || k===2*i-2){
//                 result +="*"
//             }else{
//                 result +=" "
//             }
//         }
//     }
//     result +="\n"
    
// }
// console.log(result)

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
let n = 5;
let result = ""
for (let i = 1; i <= n; i++) {

    // FOR PRINTING SPACES
    for (let j = 1; j <= n - i; j++) {
        result += " "
    }

    //printing stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        result+="*"        
    }
    result += "\n"

}
for (let row = 1; row <= n; row++) {
    // for Printing spaces
    for(let s=1;s<=row;s++){
        result +=" "
    }
    for (let k = (n - row) * 2 - 1; k > 0; k--) {
        result += "*";
    }

    result += "\n"

}
console.log(result)
