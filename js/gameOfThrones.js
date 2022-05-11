let s = 'cdcdcdcdeeeef'
let map = new Map()
let output = 'YES'
for(let i=0; i<s.length; i++){
if(map.has(s[i])){
    map.set(s[i],map.get(s[i])+1)
}
else{
    map.set(s[i],1)
}
}
let counter = 0;
map.forEach((element,key)=>{
if(element==1){
    counter+=1
}
else if(element%2!=0){
    counter += 1
}
if(counter>1){
    output = 'NO'
    
}
})
console.log(output)