// Link to the original problem : https://www.hackerrank.com/challenges/fair-rations/problem

let B=  [1,2]
let bread = 0;
for(let i=0; i<B.length-1; i++){
    // Here we avoid the last element of the array and the check for the rest of the array. 
if(B[i]%2!==0){
    // Checking that is the present index is not divisible by 2 then increamenting that index and the next index and also increamenting the bread variable by 2.
B[i]++
B[i+1]++
bread+=2
}

}
if(B[B.length-1] % 2!==0){
   
console.log("NO")
}
else{
     // Checking that if the last element is even and if it is then returning bread as the it is possible to evenly divide breads.
     console.log(bread)
}

// To prove that this algorithm does indeed return the minimum number of bread we can prove that the mirror of this algorithm in which we iterate through the array from back to front is also true and returns the same answer.

// let operations =0;
// for(let i=B.length-1; i>=1; i--){
// console.log(B[i])
// if(B[i]%2!=0){
// B[i]++
// B[i-1]++
// operations += 2
// }
// }
// operations = (B[0]%2==0) ? operations : 'NO'
// console.log(operations)
