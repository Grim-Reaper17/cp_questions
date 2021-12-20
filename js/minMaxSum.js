let array = [1,2,3,5,7]

const minMaxSum = (arr)=>{
    let index = 0
let max = arr.reduce((a,b)=>{
    return Math.max(a,b)
})
let min = arr.reduce((a,b)=>{
    return Math.min(a,b)
})
let minIndex = arr.indexOf(min)
let secondArray = arr
secondArray.splice(minIndex , 1)

let maxSum = 0;
for(key in secondArray){
maxSum += secondArray[key]
}

index = arr.indexOf(max)
let newArray = arr
newArray.splice(index,1)
let minSum = 0;
for(let i=0; i<newArray.length; i++){
minSum += newArray[i]
}
console.log()
console.log(secondArray , newArray)
}
console.log(minMaxSum(array))