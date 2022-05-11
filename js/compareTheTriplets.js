// Link to the original problem : https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=false
let a= [5,6,7]
let b= [3,6,10]
let aScore = 0;
let bScore =0; 
for(let i=0; i<a.length; i++){
if(a[i]>b[i]) aScore++
else if(b[i]>a[i]) bScore++ 
}
console.log([aScore,bScore])