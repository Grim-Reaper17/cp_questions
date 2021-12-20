// Problem Link : https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=false

// Solution :

// The hashmap approach : 

let output;

arr.sort()
let newHashMap = new Map()
for(let i=0; i<arr.length; i++){
    if(newHashMap.has(arr[i])){
        newHashMap.set(arr[i] , newHashMap.get(arr[i]) + 1)
        /* Checking that if the hashmap already has the key being set to it then set a number that is one greater than the existing value of the key. 
        For eg : 
        12 : 7
        The program will check that if it already has 7 then use hasMap.get(arr[i]) + 1 i.e. 8 and set this output as the new value of the key.
        */
    }
else {
    newHashMap.set(arr[i] , 1)
    // If the key does not exist then the hashmap set's the value of the key to 1.
}
}
console.log(newHashMap)
let newArray= []
newHashMap.forEach((value,key) => {
    // Iterating through the map and pushing all the values into a new array.
   newArray.push(value)  
 });
//  Finding the maximum occurance.
const max = newArray.reduce((accm,cVal)=>{
    return Math.max(accm,cVal)
})
// Returning arr.length - max as the output.
output = arr.length - max
return output

/* One thing to note here is that to find the element that is repeating the maximum number of times instead of the its occurances we can use the following code from the map.

let max_count , res;
[max_count,res] = [0 , 0]
newHashMap.forEach((value , key) => {
     console.log(value)
    if (max_count < value) {
        console.log(true)
        res = key;
        max_count = value;
Checking that if the element is greater than the max_count is greater than the previous value and if true then the current value to the max_count and setting the response to the key i.e. the maximum occuring element.
    }

});
console.log(res)

*/