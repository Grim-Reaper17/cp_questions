// Link to the original problem : 

let a= [-1,-3,-2,4,2]
let k = 3
let output=  (a.filter((element)=>{return element<=0}).length>=k) ? 'NO' : 'YES'
console.log(output)