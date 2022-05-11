// Link to the original problem : https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=false

let s =[1 ,2 ,1 ,3 ,2]
let d= 3
let m = 2
let output =0;
for(let i=0; i<s.length; i++){
if(s.slice(i,i+m).reduce((a,b)=>a+b)==d&&s.slice(i,i+m).length==m)output++
}
console.log(output)