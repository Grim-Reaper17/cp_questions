// Link to the original problem : https://www.hackerrank.com/challenges/halloween-sale/problem

[p,d,m,s] = [16,2,1,9981]
let toys = 0;
while(s>=p){
s-=p
toys++
p= Math.max(p-d,m)
}
console.log(toys)