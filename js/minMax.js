let arr = [1,4,7,2]
let k = 2
function sortNumbers(a,b){
    return a-b
}
arr.sort(sortNumbers)
console.log(arr)
let int = Number.MAX_VALUE
for(let i=0; i+k-1<arr.length; i++){
    // Here we have to set the condition this way because otherwise the loop goes through some unecessary iterations which worsens the time complexity.
    
    // Here i+k-1 refers to the next index of the array than the current index or the last value of the subArray and as the array has already been sorted it is going to be the max value. We subtract that from arr[i] which refers to the minimum value of the array again due to the fact that the array is sorted.

    console.log(arr[i+k-1])
int = Math.min(int, arr[i+k-1] - arr[i])
// To find the minimum value we choose int to be the max possible value of an integer so that if the first difference is the smallest difference than it is selected. And that holds true for the entire loop as we iterate through the array and then check the old value of int with the new differece.
}
console.log(int)