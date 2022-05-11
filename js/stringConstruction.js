// Link to the problem : https://www.hackerrank.com/challenges/string-construction/problem?isFullScreen=false

let s = 'abab'
let cost =0;
let map = new Map()
for(let i=0; i<s.length; i++){
if(map.has(s[i])){
    map.set(s[i],map.get(s[i])+1)
}
else{
    map.set(s[i],1)
}
}

map.forEach((element,key)=>{
if(element%2==0){
    cost += 1
}
else if(element==1){
    cost += 1
}
else if(element%2!=0 && element>2){
    cost += 1
}
})
console.log(cost)