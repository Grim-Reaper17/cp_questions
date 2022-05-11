// Link to the original problem : https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=false

let ar = [1 ,1 ,3 ,1 ,2 ,1 ,3 ,3 ,3 ,3]
let n= ar.length
let pairs = 0;
let map  = new Map()
for(let i=0; i<n; i++){
if(map.has(ar[i])){
map.set(ar[i],map.get(ar[i])+1)
}
else{
    map.set(ar[i],1)
}
}
map.forEach((element)=>{
if(element>1&&element%2!=0)pairs+=Math.floor(element/2)
else if(element%2==0)pairs+= element/2
})
console.log(pairs)