// Link to the original problem : https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=false

let a=[1,2,2,3,1,2]
a.sort((a,b)=>a-b)
let i = 0;
let j=1;
// Here we declare two variables at the iterators. Now we use a while loop to iterate through the array using the iterators and if we find a pair of two numbers which do not have the required difference we skip to the next pair otherwise we skip to the next number and compare it with i. This will give us 'i' as the no of pairs that are not possible and subtracting them from the length of the array will get us the required answer.
while(j<a.length){
if(Math.abs(a[i]-a[j])>1){
i++;
j++
}
else{
    j++
}
}
console.log(a.length-i)