// Link to the original problem : https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=false

let a = [4,4]
let b= [16,32,96]
let factors = 0;
// The concept of a[0] *i : It has been done ot reduce the nubmer of operations because if we look closely then we find that all the factors need to have a[0] as their factor and instead of going through all possible outcomes we instead multiply them by a[0] and that will also do the same thing in (operations/a[0]) number of operations. We also choose i=1 as we are the checking for the first factor inside the loop we don't need to get it and we also slice the first number from a to reduce one more unecessary operation. After that we use a.every to check for possible factors and increment the factors as required. To aviod overflow we set the limit that a[0]*i should be less than or equal to b[0].
for(let i=1; a[0]*i<=b[0]; i++){
if(a.slice(1,a.length).every(item=>(a[0]*i)%item==0)&&b.every(item=>item%(a[0]*i)==0)){
factors++
}
}
console.log(factors)