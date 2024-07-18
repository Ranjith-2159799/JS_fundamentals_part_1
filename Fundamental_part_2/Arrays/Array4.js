
//  4) for each element in the array use call back to multiply by 2
// function forEachElement(arr, callback) 
// callback: will multiply each element with 2

//Question4
//for each element in the array use call back to multiply by 2
//function forEachElement(arr, callback)
//callback: will multiply each element with 2
 
// Given array

const numbers = [2,3,4,5,6,7];
function forEachElement(arr,callback){
   return arr.map(callback);
}

const MultiplyByTwo = (element)=>{
   return element * 2;
} 
const result = forEachElement(numbers,MultiplyByTwo);
console.log(result);