let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
let map = new Map()
for(let key of ar){ 
if(map.has(key)){
    map.set(key, map.get(key)+1)
}
else{
    map.set(key,1)
}
}
console.log(map)
let pairs = 0;
map.forEach((element,key)=>{
if(element%2==0){
    pairs += element/2
}
else if(element%2==1){
    pairs += Math.floor(element/2)
}
})
console.log(pairs)