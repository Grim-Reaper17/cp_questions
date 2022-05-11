let x1 = 21
let v1 = 6
let x2 = 47
let v2 = 3
if((x2>x1&&v2>v1)||(x1>x2&&v1>v2)){
console.log('NO')
}
for(let i=0; i<2500; i++){
x1+= v1
x2+= v2
if(x1==x2){
console.log('YES')
}
}
console.log('NO')