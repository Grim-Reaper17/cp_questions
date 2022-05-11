// Link to the original problem : https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=false

let s,t,a,b,apples,oranges;
[s,t,a,b,apples,oranges] = [7,10,4,12,[2,3,-4],[3,-2,-4]]
let ac = 0;
let oc =0;
for(let i=0, j=0; i<apples.length||j<oranges.length; i++,j++){
apples[i] = apples[i]+a
if((apples[i]>=s&&(apples[i]<t||apples[i]<=t)))ac++
oranges[j] = oranges[j]+b
if((oranges[j]>=s&&(oranges[j]<t||oranges[j]<=t)))oc++
}
console.log(ac+'\n'+oc)
    