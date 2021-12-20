// Link to the original problem : https://www.hackerrank.com/challenges/encryption/problem

let  s = 'chillout'
let l = s.length;
s = s.replace(/\s/g , '')
let rows = Math.floor(Math.sqrt(8))
let cols = Math.ceil(Math.sqrt(l))
if(rows*cols <l){
    rows += 1
}
let matrixString = ''
for(let i=0; i<cols; i++){
let jump =0;
while(i + jump < l){
    matrixString += s[i + jump]
    jump += cols;
}
matrixString += ' '
}
console.log(matrixString)

