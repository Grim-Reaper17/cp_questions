let arr = [11 ,4 ,11 ,7 ,13 ,4 ,12 ,11 ,10 ,14]
let brr =[3,8,11 ,4 ,11 ,7 ,3 ,7, 10, 13 ,4 ,8,12,11 ,10, 14 ,12]
let elements = []
let map = new Map()
let map2 = new Map()
for(let i=0; i<arr.length; i++){
if(map.has(arr[i])){
    map.set(arr[i],map.get(arr[i])+1)
}
else{
    map.set(arr[i],1)
}
}
for(let j=0; j<brr.length; j++){
if(map2.has(brr[j])){
map2.set(brr[j],map2.get(brr[j])+1)
}
else{
    map2.set(brr[j],1)
}
}
map2.forEach((element,key)=>{
if(map.has(key)){

}
else{
    map.set(key,element)
    elements.push(key)
}
let getKey= map.get(key)
if(getKey!=element){
    elements.push(key)
}
})
function sortNumber(a,b){
    return a-b
}
console.log(elements.sort(sortNumber))