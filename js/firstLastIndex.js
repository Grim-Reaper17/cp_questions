const nums = [1,2,3,3]
let target = 3
let results = [-1, -1]
let confirmI = true
let confirmJ = true
// The trick to do this question is to iterate through the entire array backwards and forwards in one single loop and also breaking the loop to prevent unecessary iterations when the indices have already been found.
for(let j=nums.length - 1,i=0; j> -1,i<nums.length; j--,i++){
if(nums[i]== target&& confirmI == true){
results[0] = i
confirmI = false
}
if(nums[j] == target && confirmJ == true){
    results[1] = j
    confirmJ = false
}
if(confirmI == false && confirmJ == false){
    break;
}
}
console.log(results)

// A JavaScript specific one line soulution :

console.log([nums.indexOf(target) , nums.lastIndexOf(target)])