let s ='aeiouia'
let k=3
let cVal =0;
let output = ''
for(let i=0; i<s.length; i++){
let subs = s.slice(i,i+k)
if(subs.length ==k){
let split = subs.split('')
let counter =0;
split.forEach((element)=>{
if(element =='a' || element =='e' || element =='i' || element =='o' || element =='u'){
counter +=1
}
})
if(counter>cVal){
    cVal = counter 
    output = subs
}
}
}
if(output.length ==0){
return 'Not found!'
}
return output