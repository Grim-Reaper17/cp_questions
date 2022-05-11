let s = 'abbcccdddd'
let queries = [1,7,5,4,15];
let sa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let ta = [];
let output = [];
let cs = 0;
let ci = 0;
for(let i=0; i<s.length; i++){
let pi = sa.indexOf(s[i]);
if(pi!=ci){
    cs = 0;
    ci = pi;
}
cs += pi+1;
ta.push(cs);
}
for(let j = 0;j <queries.length; j++){
if(ta.includes(queries[j])){
output.push("Yes");
}
else{
output.push("No");
}
}
console.log(output)