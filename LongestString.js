// Finding Longest String in Array
const arrayOfString=["Pakistan","Iran","Dubai","America"];
const longestString=(arrayString)=>{
    // declare variable for saving longestString
    let LongestString=""
    // loop over all array of string
    for(let i=0;i<arrayOfString.length;i++){
        // checking if string length is less then 0 of LongestString variable then give first index;
        if(LongestString.length<0){
            LongestString = arrayString[i];
        }
        // checking length of array coming string with save LongestString length
        else if(LongestString.length<arrayString[i].length){
            LongestString=arrayString[i]
        }
    }
    console.log(LongestString)
    return LongestString
}
longestString(arrayOfString)