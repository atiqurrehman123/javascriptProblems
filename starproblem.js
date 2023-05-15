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
let n = 9;
let result = ""
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 3-i-1; j++) {
       result+=" "
    }
    for(let k=0;k<i;k++){
        result+="*"
    }
    result += "\n"
}
console.log(result)