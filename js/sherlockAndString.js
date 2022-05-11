let s= 'abbccc'
let output = 'NO'
let counter =0;
let arr =[]
let map = new Map()
for(let i=0; i<s.length; i++){
if(map.has(s[i])){
    map.set(s[i],map.get(s[i])+1)
}
else{
    map.set(s[i],1)
}
}
let types =-1;
let checker =0;
let curMax =0;
let curSmall = Number.POSITIVE_INFINITY;
for(let key of map){
if(checker!=key[1]){
checker=key[1]
types+= 1
}
if(key[1]>curMax){
   curMax = key[1] 
}
if(key[1]<curSmall){
curSmall = key[1]
}
}
let maxElement =0;
let minElement =0;
map.forEach((element,key)=>{
if(element==curMax){
maxElement+=1
}
if(element==curSmall){
    minElement+=1
}
})
if((maxElement==1 || minElement==1)&&Math.abs(curMax-curSmall)==1){
    output= 'YES'
}
if((curMax==1&&maxElement==1)||(curSmall==1&&minElement==1)){
    if(types>=2){ 
    }
    else{
        output = 'YES'
    }
}
if(types==0){
output= 'YES'
}
console.log(output)