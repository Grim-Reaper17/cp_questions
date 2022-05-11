// A simple one liner solution using the spread operator.
let arr = [1,2,3,4,5]
console.log(Math.abs(arr.reduce((a,b)=>{return a+b}) - Math.max(...arr)),Math.abs(arr.reduce((a,b)=>{return a+b})) - Math.min(...arr))