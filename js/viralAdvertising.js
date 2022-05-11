let n = 3
let start = 5
let output = 0;
for(let i=0; i<n; i++){
output += Math.floor(start/2)
start = Math.floor(start/2)*3
}
console.log(output)
