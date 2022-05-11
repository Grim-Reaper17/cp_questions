// Link to the original problem : https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=false

// This question can be solved in an oneLiner but we have saved the max element in a seperate variable because calculating it everytime give TLE on testCases with high values.

let max = Math.max(...candles)
console.log(candles.filter((element)=>{return element == max}).length)
