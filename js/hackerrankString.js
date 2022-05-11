let s= 'rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'
let j=0;
let hackerrankSplit = 'hackerrank'.split('')
let sSplit = s.split('')
for(let i=0; i<sSplit.length; i++){
if(sSplit[i] === hackerrankSplit[j]){
    j++
}
}
if(j==hackerrankSplit.length){
   console.log('YES')
}
else{
console.log('NO')
}