// Link to the original problem : https://www.hackerrank.com/challenges/icecream-parlor/problem?isFullScreen=false

[m,arr] = [4,[1,4,5,3,2]]
let output = []
let map = new Map();
// O(n) approach using a hashmap.
for(let i=0; i<arr.length; i++){  
let getVal = map.get(m-arr[i])
// Checking if the map has the value of required pair number in it.
if(getVal!=null){
    // We add the index of the second number first because it does not exist in the map when the first number is found and when it comes then the indices are reversed and then we reverse them again.
output[0]= ++getVal;
output[1] = ++i;
break;
}
map.set(arr[i],i)
}
console.log(output)