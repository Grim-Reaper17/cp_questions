// Link to the original problem : https://www.hackerrank.com/challenges/acm-icpc-team/problem

// Here to find the number of max topics we need to check if any character from the two pairs is equal to '1' because if one of the persons in the pair know about the topic in the pair it is considered that the topic is known.

let topic = ['10101','11100','11010','00101']
let max = Number.NEGATIVE_INFINITY
let teams = 0;
for(let i=0; i<topic.length; i++){
for(let j=i+1; j<topic.length; j++){
    let count = 0;
for(let k=0; k<topic[0].length; k++){
if(topic[i][k]=='1'||topic[j][k]=='1'){
count++
}
}
if(count>max){teams=0;teams++;}
else if(count==max)teams++;
max = Math.max(max,count)
}
}
console.log([max,teams])
