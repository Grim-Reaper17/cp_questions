// Link to the original problem : https://www.hackerrank.com/challenges/mars-exploration/problem

[s] = ['SOSTOT']
let counter =0;
for(let i=0; i<s.length; i++){

// i%3 gives us the character of the "SOS" string in the sequence 'S'-'O'-'S' on repeat.

if(s[i]!="SOS"[i%3])counter++;
}
console.log(counter)    