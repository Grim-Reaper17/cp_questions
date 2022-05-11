let order = [10,40]
let k=40
let operations =0;
let sum = order.reduce((a,b)=>{return a+b})
if(sum==k){
console.log(order.length)
}
else if(k<order.reduce((a,b)=>{return Math.min(a,b)})){
   console.log(0)
}
else{
order.sort((a,b)=>a-b)
for(let i=0; i<order.length; i++){
    console.log(order[i])
    if(k==0||k<0){
        break;
    }
    if(order[i]>k){
        break;
    }
    operations++
    k-=order[i]
   
}
console.log(operations)
}