let s = 'abccde'

if(s.length%2!=0){
console.log(-1)
}
let s1 = s.slice(0,s.length/2)
let s2 = s.slice(s.length/2,s.length)
for(let i=0; i<s1.length; i++){
    
// Here we check if s2 contains the words at s1's index and if it does we delete that word and then we get the length of s2 as the final solution.

if(s2.indexOf(s1[i])!=-1){
    s2 = s2.substring(0,s2.indexOf(s1[i]))+s2.substring(s2.indexOf(s1[i])+1)
}
}
console.log(s2.length)