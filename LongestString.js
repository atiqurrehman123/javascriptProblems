// Finding Longest String in Array
const arrayOfString=["Pakistan","Iran","Dubai","America"];
const longestString=(arrayString)=>{
    let LongestString=""
    for(let i=0;i<arrayOfString.length;i++){
        if(LongestString.length<0){
            LongestString = arrayString[i];
        }else if(LongestString.length<arrayString[i].length){
            LongestString=arrayString[i]
        }
    }
    console.log(LongestString)
}
longestString(arrayOfString)