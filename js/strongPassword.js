// Link to the original problem : https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=false

[password] = ['AUzsnV-']

let numReg = /[^0-9]/g
let capReg = /[^A-Z]/g
let smallReg = /[^a-z]/g
// We need to use \ because - does not match otherwise as this is a special regex character.
let specialReg = /[^!@#$%^&*()\-+]/g
let output = 0;
let regArr = [numReg,capReg,smallReg,specialReg]
for(let i=0; i<regArr.length; i++){
let length = password.replace(regArr[i],'').length
if(length==0){
output += 1
}
}
output=  (password.length+output>=6) ? output : output  += 6-(output+password.length)
console.log(output)