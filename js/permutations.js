// Link to the original problem : https://www.leetcode.com/problems/permutations/

// We have used recursion in this question and the actual equation has been discussed elsewhere.

let nums = [1,2,3];
let container = [];
function permute(p,up){
if(up.length==0){
container.push(p);
return;
}
let pushNum = [up[0]];
for(let i=0; i<p.length+1; i++){
let first = p.slice(0,i);
let second = p.slice(i,p.length);
let one= first.concat(pushNum);
let final = one.concat(second);
permute(final,up.slice(1))
}
}
permute([],nums);
console.log(container);