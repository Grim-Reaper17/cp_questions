// Problem : https://www.hackerrank.com/challenges/magic-square-forming/problem
/*
Here it asks that given a square find the minimum cost to make it a magic square where the cost on conversion is abs(number(being changed) - (replacing number))

A magic square : 

A magic square in this problem is a 3*3 matrix being represented by a 2D Array. It should have the sum of all rows , cols and diagonals equal.

To satisfy this condition ,let's consider a square with nubmers 1 to 9.
So in numbers 1 to 9 ,
1 + 2 + 3 + 4 + 5 + 6 +7 + 8 + 9 = 45
and there are three rows i.e.
R1 + R2 + R3 = 45
3 R = 45
R = 15
That means that in every magic square the sum of the matrix should always be 15.
Now from 1 to 9 there are only 8 combinations that satisfy these conditions :
1+9+5
2+8+5
3+7+5
4+6+5
4+3+8
6+2+7
6+1+8
9+2+4
From these conditions the following results can be inferred
5 is always going to be the center.
Edges have to be 1,3,7,9.
Corners have to be 2,4,6,8
*/

// The solution : 

// Getting all the possible matrices :

const possibleMatrices = [
        [[8,1,6],[3,5,7],[4,9,2]],
        [[6,1,8],[7,5,3],[2,9,4]],
        [[4,9,2],[3,5,7],[8,1,6]],
        [[2,9,4],[7,5,3],[6,1,8]],
        [[8,3,4],[1,5,9],[6,7,2]],
        [[4,3,8],[9,5,1],[2,7,6]],
        [[6,7,2],[1,5,9],[8,3,4]],
        [[2,7,6],[9,5,1],[4,3,8]],


]
const s = [
    [4, 5 ,8],
    [2, 4 ,1],
    [1, 9 ,7]
]
let minCost = Number.MAX_SAFE_INTEGER
// Setting the minCost to the max possible value on an integer.
let array = []
for(let m=0; m<8; m++){
    
    let cost = 0;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
// Checking the differences betweenn the positions of the matrices to find the best possible cost. We subtract every possible matrice of the input square from the magic and then compare the abs value 
/*
Here the s[i][j] mean starting from the first index of the first array and then moving on and s[m][i][j] also means starting from the first index of the first array and all the possible cost in calculated and then added as the matrices are compared and we can store the cost in the array and the return the minimum cost.
*/
cost += Math.abs(s[i][j] - possibleMatrices[m][i][j])
        }
    }
array.push(cost)
}
const min = array.reduce((accm,cVal)=>{
    return Math.min(accm , cVal)
})
console.log(min)