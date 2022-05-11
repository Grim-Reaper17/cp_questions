let customer = ['a','b','c','d','e','f','f']
let output = []
let map = new Map()
for(let i=0; i<customer.length; i++){
if(map.has(customer[i])){
    map.set(customer[i],map.get(customer[i])+1)
}
else{
    map.set(customer[i],1)
}
}
map.forEach((element,key)=>{
if((element/customer.length)*100>=5){
output.push(key)
}
})
console.log(output.sort())