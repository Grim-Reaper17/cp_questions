// Link to the original problem : hackerrank.com/challenges/staircase/problem?isFullScreen=false

let n= 4
for(let i=0,ii=n-1; i<n; i++,ii--){
    // The goal of the problem is to create a system that adds (n-(i+1)) no of spaces(can be achieved by a loop that runs  (n-(i+1)) no of time) and another loop that adds (n-(n-(i+1))) no of '#' symbols in the ouptut string. This can be achieved by using smart loops and assuming that n=4 we need to use 3-2-1-0 using one loop and 1-2-3-4 using another loop and this has been achieved by using these loops.
    let output = ''
for(let j=i+1; j<n; j++){
output += ' '
}
for(let k=0; k<(n-ii); k++){
output += '#'
}
console.log(output)
}
