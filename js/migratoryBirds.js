let arr= [1,4,4,4,5,3]
function sortNumber(a, b) {
    return a - b;
  }
  arr.sort(sortNumber)
let map = new Map()
for(let key of arr){
if(map.has(key)){
map.set(key , map.get(key)+1)
}
else{
    map.set(key , 1)
}
}
let curMax = Math.max(...map.values())
map.forEach((element,key)=>{
if(element!==curMax){
map.delete(key)
}

})
let output= Math.min(...map.keys())
return output
