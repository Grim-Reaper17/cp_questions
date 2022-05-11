// Link to the original problem : https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=false

let n = 5
let growth = 0;
for(let i=0; i<n+1; i++){
if(i%2==0){
    growth += 1
}
else if(i%2!=0){
growth = growth *2
}
}
console.log(growth)