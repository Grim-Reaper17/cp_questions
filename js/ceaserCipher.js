// Link to the problem : https://www.hackerrank.com/challenges/caesar-cipher-1/problem?isFullScreen=false

let s = 'middle-Outz'
let k= 2
let alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let output  = ''
for(let i=0; i<s.length; i++){
if(!alphabetArray.includes(s[i]) && !alphabetArray.includes(s[i].toLowerCase())){
    output += s[i]
}
else if(alphabetArray.includes(s[i])){
let index = alphabetArray.indexOf(s[i])
let newElement = alphabetArray[(index+k)%alphabetArray.length]
output+= newElement
}
else{
    let index = alphabetArray.indexOf(s[i].toLowerCase())
    let newElement = alphabetArray[(index+k)%alphabetArray.length]
    output+= newElement.toUpperCase()
}
}

console.log(output)
