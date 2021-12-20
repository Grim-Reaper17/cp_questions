let array = [1,2,3,3,3]

let maxVal = array.reduce((a,b)=>{
    return Math.max(a,b)
})
console.log(maxVal)

const allIndex = (arr , value)=>{
let indexes = []
for(let i=0; i<arr.length; i++){
    if(arr[i] == value){
        indexes.push(i)
    }

}
return indexes
}
console.log(allIndex(array , maxVal))