let s= 'saveTheseInTheEditor'
let words = 1
for(let i=0; i<s.length; i++){
if(s[i] !== s[i].toLowerCase()){
words += 1
}
}
console.log(words)