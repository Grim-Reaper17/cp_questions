let a= [1,2,3,3]
let newMap = new Map()
for(let key of a){
if(newMap.has(key)){
    newMap.set(key, newMap.get(key) + 1)
}
else{
    newMap.set(key , 1)
}
}
let resultArr = []
newMap.forEach((key,value)=>{
    if(key>1){
        resultArr.push(value)
    }
})
if(resultArr.length == 0){
    return -1
}
let output = []
for(const key of resultArr){
const difference = Math.abs(a.indexOf(key) - a.indexOf(key , a.indexOf(key) + 1))
output.push(difference)
}
const min = output.reduce((a,b)=>{
    return Math.min(a,b)
})
return min