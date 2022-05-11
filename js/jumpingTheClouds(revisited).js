// Link to the original problem : https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?isFullScreen=true

let c = [1,1,1,0,1,1,0,0,0,0]
let k = 3
let j= (k)%c.length;
let energy = (c[j]) ? 97 : 99
while(j>0){
j = (j+k)%c.length
energy--
if(c[j])energy = energy-2
}
console.log(energy)