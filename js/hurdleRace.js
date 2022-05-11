// Link to the original problem : https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=false

let height = [1,2,3,3,2]
let k = 1
if(Math.max(...height)<=k){console.log(0)}
else{
console.log(Math.max(...height)-k)
}