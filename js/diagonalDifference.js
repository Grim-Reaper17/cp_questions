// Link to the original problem : https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=false
let arr = [
  [1,2,3],
  [4,5,6],
  [9,8,9]
  ]
let ls,rs;
[ls,rs] = [0,0]
for(let i=0,j=arr.length-1; i<arr.length; i++,j--){
ls+= arr[i][i]
rs+= arr[i][j]
}
console.log(Math.abs(ls-rs))