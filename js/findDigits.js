// Link to the original problem : https://www.hackerrank.com/challenges/find-digits/problem

let n = 121
console.log(String(n).split('').filter((element)=>{return n%Number(element)==0}).length)