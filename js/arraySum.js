// Given an array of N integers find its sum.

/* To do this I declared a string that has 0 as value then iterated through the array using a for-of loop and then add the key in the variable that I declared as 0 and if the variable is returned then we will get the sum as output by the function. I also used the array.reduce((a,b)=>{
    return a ,b
}) method in the second which basically takes a,b as the previous item and current item of the array and then goes through all of the array until all the items are done and we return a+b which basically adds the two numbers again and again giving us the sum ultimately.
*/
const findSum = (array)=>{
 let str = 0

 for(key of array){
 str += key
 }

return str

}

let array = [1,2,3,4,5,6]

console.log(findSum(array))
const findSum2 = (array)=>{
 return   array.reduce((a,b)=>{
return a+b
   })
  }
  let array2 = [1,2,3,4,5,6]

  console.log(findSum2(array))



