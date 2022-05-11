// Link to the original problem : https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=false

let s ='12:01:00PM'
let newString = s.split(':')[0]
if(s.slice(s.length-2)=='PM'&&newString!=12){
newString= Number(newString)+12
}
else if(newString==12&&s.slice(s.length-2)!='PM'){
newString = '00'
}
console.log(String(newString) + s.slice(2,s.length-2))