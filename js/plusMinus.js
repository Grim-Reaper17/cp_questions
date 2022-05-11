// Link to the original problem : https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=false

let arr = [-1,-2,1,2,0]
let negative = arr.filter((value)=>{
    return value <0
}).length
let positive = arr.filter((value)=>{
return value>0
}).length
let zeroes = arr.filter((value)=>{
    return value==0
    }).length
console.log((positive/arr.length).toFixed(6))
console.log((negative/arr.length).toFixed(6))
console.log((zeroes/arr.length).toFixed(6))