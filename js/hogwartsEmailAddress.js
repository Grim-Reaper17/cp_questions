// Link to the original problem : https://www.hackerrank.com/contests/openbracket-2017/challenges/because-owlery-is-too-lazy

let email = 'harry@hogwarts.com'
let regex = /^[a-z]{5}@hogwarts\.com$/
let output= (regex.test(email)) ? 'Yes' : 'No'
console.log(output)