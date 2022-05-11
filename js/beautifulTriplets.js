// Link to the original problem : https://www.hackerrank.com/challenges/beautiful-triplets/problem

[arr,d] = [[2,2,3,4,5] , 1]
let counter  =0;
for(let i=0; i<arr.length; i++){
// This means to check if the array has the a[i]+d and a[i]+(d*2) which directely confirms that there is going to be a triplet. The goal here is to see if a triplet can be formed instead of forming one.
if(arr.includes(arr[i]+d)&&arr.includes(arr[i]+2*d))counter++
}
console.log(counter)