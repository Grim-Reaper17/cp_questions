// Link to the original problem : https://www.hackerrank.com/challenges/minimum-distances/problem?isFullScreen=false

let a= [3,2,1,2,3]
let min = Number.POSITIVE_INFINITY
for(let i=0;i<a.length; i++){
let secondIndex = a.indexOf(a[i],i+1)
if(secondIndex!=-1){
let minVal = Math.abs(i-secondIndex)
min = Math.min(min,minVal)
}
}
console.log(min)