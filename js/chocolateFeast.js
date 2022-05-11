// Link to the original problem : https://www.hackerrank.com/challenges/chocolate-feast/problem

[n,c,m] = [15,3,2]
let chocolates = Math.floor(n/c);
let wrappers = chocolates;
while(wrappers>=m){
console.log(wrappers)
chocolates += Math.floor(wrappers/m)
wrappers = wrappers%m + Math.floor(wrappers/m)
}
console.log(chocolates)