let arr = [2 ,4 ,3 ,2 ,3 ,1 ,2 ,1 ,3 ,3]
let map = new Map()
for(let i=0; i<arr.length; i++){
if(map.has(arr[i])){
map.set(arr[i],map.get(arr[i])+1)
}
else{
map.set(arr[i],1)
}
}
let maxElem= Math.max(...map.values())
let output = Number.POSITIVE_INFINITY;
map.forEach((element,key)=>{
if(element==maxElem&&output>key){
output = key
}
})
console.log(output)