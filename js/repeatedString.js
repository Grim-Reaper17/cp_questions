// The actual problem on hackerrank : https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=false

let counter =0;
const n = 10
const s = 'aba'
if(n >= s.length){
    // Checking that if the length of the string is greater than the number of characters to be found and if true the executing the following statement.

    // This uses spread operator to convert the string into an array and filter out and counter the number of a's that are already present.
let occurances = [...s].filter(char => char === 'a').length
// After the counter is multiplied with the occurances of a found to get the amount of a's in the string.
/*
n / s.length = 3
This is the number of additions required and multiplying it by occurances of a will give us the occurances of a in those additions.
*/
counter = Math.floor(n/s.length) * occurances

}
/* Checking if the string needs more additions but not of entire length
For eg:
s = 'aba'
n =10
string with above code = abaabaaba
No of a's = 6
But still required the addition of one more character and that number can be obatined by getting the remainder of n/s.length
*/
let tailString = n % s.length
for(let i=0; i<tailString; i++){
    // Checking if the character ==='a' and if true then adding one to the counter.
    if(s[i] === 'a'){
        counter += 1
    }
}

console.log(counter)