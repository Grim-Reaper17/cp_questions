// Link to the original problem : https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=false

[arr] = [[1,2,3,4,3,3,2,1]]
let iterations = []
let map = new Map()
for(let i=0; i<arr.length; i++){
if(map.has(arr[i])){
map.set(arr[i],map.get(arr[i])+1)
}
else{
map.set(arr[i],1)
}
}
for(let j=0; j<map.size; j++){
    iterations.push(arr.length)
let min = Math.min(...arr)
let element = arr.filter((element)=>{return element!=min})
arr=element
}
console.log(iterations)