let arr= [1,4,7,2]
    let k = 5
function sortNumber(a,b){
    return a-b
}
arr.sort(sortNumber)
console.log(arr)
let subArr= arr.slice(0,k)
console.log(subArr)
let difference = subArr.reduce((a,b)=>{
    return Math.max(a,b)
}) - subArr.reduce((a,b)=>{
    return Math.min(a,b)
})
console.log(difference)