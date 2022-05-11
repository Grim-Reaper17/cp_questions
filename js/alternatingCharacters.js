// Link to the problem statement : https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=false

let  s= 'AABAAB'
let deletions = 0;
for(let i=0; i<s.length-1; i++){
if(s[i]==s[i+1]){
    deletions = deletions+1
}
}
console.log(deletions)