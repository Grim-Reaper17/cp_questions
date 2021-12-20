// We need to find the number of negative , positive and zero values from an array and display them as a fraction of the total length of the array. The ratios should only be visible as 10^-6 form.

// To do this I simply iterated through the array using a for in loop and the we create two variables which store the count of the positive , negative and zero numbers. I set if else conditions in the loop and then check that whenever the number is negative , positive or zero add one to the positive , negative and zero variables. After that I divide the values with the length of the array and log the values using .toFixed(6)

let array = [-1,1,2,-3,-4,0]

const output = (arr)=>{
const length = arr.length
let positive = 0;
let negative = 0;
let zero = 0;
for(key in arr){
    if(arr[key] > 0){
positive += 1
    }
else if(arr[key] < 0){
    negative += 1
}
else if(arr[key] == 0){
zero += 1
}
}
let positiveFraction = (positive/length).toFixed(6)
console.log(positiveFraction)
let negativeFraction = negative/length
console.log(negativeFraction.toFixed(6))
let zeroFraction = zero/length
console.log(zeroFraction.toFixed(6))
}

output(array)