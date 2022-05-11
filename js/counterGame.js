let n = 605846385118282
// We'll come back to this...
let binary =(n >>> 0).toString(2);
console.log(binary)
let operations = 0;
for(let i=0; i<1000; i++){
    if(n%2==0&&operations>=1){
n=n/2
operations++
    }
 
else{
    let variable =1 << 31 - Math.clz32(n)
    console.log(variable)
    n = Math.abs(variable-n)
    operations++
}
if(n==1){
    break;
}
}
console.log(operations)
if(operations%2==0){
    console.log('Richard')
}
else{
    console.log('Louise')
}