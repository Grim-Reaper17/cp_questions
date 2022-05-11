// Link to the original problem :

let i = 20
let j = 23
let k = 6
let counter = 0;
for(let l=i; l<j+1; l++){
if(Math.abs(Number((String(l).split('').join('')))-Number((String(l).split('').reverse().join(''))))%k==0)counter++
}
console.log(counter)