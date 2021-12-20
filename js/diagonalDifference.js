// We need to find the sum of two diagonals of a 2D array and then return the absoulute difference of the two numbers.

// To do this we first take the array as a parameter and get the length of the first array stored inside the parent array. After that we declare two iterators i and j in a for loop and set the condition as the length of the first array so that the loop runs until i is equal to the length. Now we do i++ and j-- to get the entities of the left and the right digonals. Then we add the two sums into different variable and return the absoulute difference.

let x = [
[1,2,3],
[1,2,3],
[1,2,3]
  ];

const findDifference = (x)=>{
    const length = x[0].length
    let leftSum = 0;
    let rightSum = 0;
    
    for(let i=0 , j=length-1; i<length; i++ , j--){
      /*
      Here in left sum i in increasing so the code runs in the following manner.
      The length of the first sub-array is 3 so the i will increment in the 0,1,2 way. So that will give us the first array , then the second and then the third and then we get the first entry of the first array and then the second entry of the second array and then the third entry of the third array.
      In rightSum we do the same thing but we use  j so that we get the third entity of the first array and then second of second and first of the first.
      */
     leftSum += x[i][i];
     rightSum += x[i][j];
   
        
    }
    const difference = leftSum - rightSum;
    return Math.abs(difference);
}

console.log(findDifference(x))

