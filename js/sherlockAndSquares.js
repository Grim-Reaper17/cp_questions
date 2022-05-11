let a= 100
let b= 1000
// Here we floor the square root of the first number and hence always including the upper limit and always missing the lower limit and the other way will be to get a condition to check when and when not to include the upper limit.

// The inherent logic of this solution is that for eg we have 24 and 49 and we take the required roots we'll have 4 and 7. Now between these numbers we will also have the square roots of 5,6 and 7 as we are supposed to include the upper limit and ignore the lower limit. 
console.log((Math.floor(Math.sqrt(b))- Math.ceil(Math.sqrt(a)))+1)