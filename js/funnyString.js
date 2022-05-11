let s = 'abc'
let sReverse = s.split('').reverse().join('')
let a1 = []
let a2 = []
for(let i=0; i<s.length; i++){
a1.push(s[i].charCodeAt(0))
a2.push(sReverse[i].charCodeAt(0))
}
let output = 'Funny'
for(let j=0; j<a1.length-1; j++){
    console.log(a2[j])
let difference = Math.abs(a1[j] - a1[j+1])
let difference2 = Math.abs(a2[j] - a2[j+1])
if(difference!=difference2){
    output = 'Not Funny'
    break;
}
}
console.log(output)
