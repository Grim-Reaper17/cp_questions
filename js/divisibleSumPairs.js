// Link to the original problem : https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

let a= [1,2,3,4,5,6]
let k=5;
let counter = 0;
for(let i=0; i<a.length; i++){
for(let j=0; j<a.length; j++){
if((a[i]+a[j])%k==0&&j<i){
    counter++
}
}
}
console.log(counter)