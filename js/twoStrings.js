let s1 = 'hackerrankcommunity'
let s2 = 'cdecdecdecde'
let output  = 'NO'
for(let i=0; i<Math.max(s1.length , s2.length); i++){
    if(s2.includes(s1[i])){
        output = 'YES'
        break;
    }
    else if(s1.includes(s2[i])){
        output = 'YES'
        break;
    }
    }
console.log(output)