/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
*/

const array = [4]
const d = 4;
const m = 1;

const validMatches  = (array , d , m)=>{
    let matches= 0;
for(let i=0; i<array.length; i++){
    const subArray = array.slice(i , i+m)
    // We used slice instead of splice because splice mutates the original array whereas slice does not. Here this method takes i as the first index and i + m as the second and returns the array in parts as defined.
    console.log(subArray)
    const sum = subArray.reduce((accumulator, currentValue) => accumulator + currentValue)
    // After getting the arrray in parts we find the sum of all the array that we get causes we are gonna get multiple array as the loop runs.
if(sum== d){
    matches += 1
}
}
return matches
}
console.log(validMatches(array, d , m))