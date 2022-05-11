// Link to the original problem : https://www.hackerrank.com/challenges/service-lane/problem?isFullScreen=false

[width,cases] = [[2,3,1,2,3,2,3,3],[[0,3],[4,6],[6,7],[3,5],[0,7]]]
let output= []
for(let i=0; i<cases.length; i++){
output.push(Math.min(...width.slice(cases[i][0],cases[i][1]+1)))
}
console.log(output)
