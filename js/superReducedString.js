let s = 'aabbc'
let sArray = s.split('')
for(let i=0; i<sArray.length; i++){
if(sArray[i] == sArray[i+1]){
    // We use this conditional to check is the current element of the array is equal to the next element of the array and if found true we eliminate the two elements and start traversing through the array from the beginning.
    sArray.splice(i,2)
    // We set i to -1 becuase it is incremented by 1 in the loop and setting it to 0 will result in it becoming one and the first element of the array will be missed.
i = -1
}
}
sArray = (sArray.length ==0) ? 'Empty String' : sArray.join('')
console.log(sArray)