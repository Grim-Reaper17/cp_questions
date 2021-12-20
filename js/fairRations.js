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
