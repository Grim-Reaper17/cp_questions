let uc = "";
let pairs = [];
let max= 0;
for(let a =0; a<s.length; a++){
if(!uc.includes(s[a])){
uc += s[a];
}
}
uc = uc.split("").sort().join("");
for(let b = 0; b<uc.length; b++){

for(let c = b+1; c<uc.length; c++){
let p = "";
p += uc[b];
p+= uc[c];
pairs.push(p);
}
}
console.log(pairs);
for(let i=0; i<pairs.length; i++){
let news = s.split("");
let fa = news.filter(element=>element==pairs[i][0]||element==pairs[i][1]).join("");
let length = 0;
for(let j = 0; j<fa.length; j++){
if(fa[j]!=fa[j+1]){
length += 1;
}
else{
length = 0;
break;
}
}
if(length>max){
max = length;
}
}
console.log(max);