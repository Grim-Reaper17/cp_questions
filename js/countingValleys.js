// Link to the original problem : https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=false

let steps = 8
let path = ['U','D','D','D','U','D','U','U']
let level =0;
let valleys= 0;
let map  = new Map()
for(let i=0; i<steps; i++){
if(path[i]=='D'){
level--
}
if(path[i]=='U'){
    level++
    }
if(level==0&&path[i]=='U'){
valleys++
}
}
console.log(valleys)
