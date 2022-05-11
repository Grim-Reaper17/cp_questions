// Problem Link : https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=false

let arr  = [1,2,3,1,2,3,3,3]
let map = new Map()
for(let i=0; i<arr.length; i++){
if(map.has(arr[i])){
map.set(arr[i],map.get(arr[i])+1)
}
else{
map.set(arr[i],1)
}
}
console.log(arr.length - Math.max(...map.values()))