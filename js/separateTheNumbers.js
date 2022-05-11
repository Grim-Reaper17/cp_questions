// Link to the original problem : https://www.hackerrank.com/challenges/separate-the-numbers/problem

/* Core concept used in the solution :
This problem is simples solved with brute force implementation.
We take the string as then start to create possible combinations of the string by taking the first letter of the string and then adding +1 integers to that string.
For eg : 
initial string = 99100101;
We take 9 as the first letter but this cannot form a sequence so we skip. It forms the sequence 910111213 which is not equal to the actual string(sorted).
We take 99 as the string. It forms 99100101. At this point the condition meets and we break the nested loop and return the values.
To take the next value of the string we increment j which initially starts with 0.
*/

let s = "998999";
let ssor = s.split("").sort().join("");
let output = "NO";
let j =1;
while(true){
let ts = "";
let ses = "";
for(let a = 0; a<j; a++){
ts+= s[a];
}
if(ts.length>Math.floor(s.length/2)){

// We check that if length of the test string is greater than half the length of actual string there is not way it'll form a sequence because the numbers so formed will be altogether greater than the length of the string.

break;
}

// As the length of the string is as big as 32 we have to use BigInt to store the numbers. After from this we do the other necessary type conversions.

let n= BigInt(ts);
let sn = String(n);
ses += String(n);
while(true){
    n++;
    ses += String(n);
let sesor = ses.split("").sort().join("");
if(ses.length == s.length&&sesor==ssor){
output = `YES ${sn}`
// Answer found and we store the first value that we started with in this.
break;
}
else if(ses.length>s.length){

// If the length of the string that we are forming is greater than the length of the actual then we break the loop because after this its not possible to make a meaningful sequence from this string.

break;
}
}
// Incrementing J :
j++;    
}
console.log(output);