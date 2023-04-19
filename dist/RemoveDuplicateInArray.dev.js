"use strict";

var arr = [1, 2, 3, 4, 4, 5, 3]; // One method
// const removedupliate=arr.filter((item,index,array)=>{
//   console.log(item,index,array.indexOf(item))
//   return array.indexOf(item)===index
// })
// console.log(removedupliate,"removeduplicate")
//sort method
// let b=[];
// arr.sort();
// let temp;
// for(let i=0;i<arr.length;i++){
//   if(arr[i]!==temp){
//     b.push(arr[i])
//     temp=arr[i]
//   }
// }
// console.log(b)
//Third method
// let newarray=[...new Set(arr)];
// console.log(newarray)
//Fourth method using object;

var obj = {};

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var i = _arr[_i];
  obj[i] = true;
}

var uniqueArray = Object.keys(obj);
console.log(uniqueArray);