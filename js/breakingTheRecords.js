// Link to the original problem : https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=false

let scores = [10, 5 ,20 ,20 ,4 ,5 ,2 ,25 ,1]
let max = 0;
let min =0;
let curMin = scores[0]
let curMax =scores[0]
for(let i=0; i<scores.length; i++){
if(scores[i]>curMax){
curMax = scores[i]
max++
}
if(curMin>scores[i]){
    console.log(i)
curMin = scores[i]
min++
}
}
console.log([max,min])