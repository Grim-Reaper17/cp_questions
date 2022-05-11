let s1 ='abc' 
let s2 = 'amnop'

let count =0;
let t = s2;
for(let i=0; i<s1.length; i++){
let index = t.indexOf(s1.charAt(i));
if(index!=-1){
t= t.substring(0,index) + t.substring(index+1);
count++;
}
}

// Here count refers to the similar characters in the string and then we subtract those similar character from the combined length of the two strings. In these types of problems we are supposed to find the entity that is similar in both the strings.

console.log(s1.length+s2.length - (count*2))