// Link to the original problem : https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=false

let keyboards,drives,b;
[keyboards,drives,b] = [[3,1],[5,2,8],10]
let cost = -1;
for(let i=0; i<keyboards.length; i++){
for(let j=0; j<drives.length; j++){
if(keyboards[i]+drives[j]<=b&&keyboards[i]+drives[j]>cost){
cost = keyboards[i] + drives[j]
}
}
}
console.log(cost)