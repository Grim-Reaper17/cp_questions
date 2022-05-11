// Link to the original problem:https://www.hackerrank.com/challenges/funny-string/problem?isFullScreen=false 

// This code works when inside a function with return statements replacing the console logs.

let s= 'this is A random string';

s =s.toLowerCase()
for(let i=97; i<123; i++){
if(!s.includes(String.fromCharCode(i))){console.log('not pangram');break;}
}
console.log('pangram')