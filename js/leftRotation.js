// Link to the problem : https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=false

let arr = [1,2,3,4,5]
let d= 2
for(let i=0; i<d; i++){
    let firstElem = arr[0]
    arr.splice(arr.indexOf(firstElem),1)
    arr.push(firstElem)
}
console.log(arr)