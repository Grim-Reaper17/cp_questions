const topic = ['10101',
    '11100',
    '11010',
    '00101']
let newArr = []
for(let i=0; i<topic.length; i++){
    // console.log('Iteration Break')
for(let j=i + 1; j<topic.length; j++){
    // Creating another loop for the second pair.
  let count =0;
  for(let k=0; k<topic[0].length; k++){
    //   console.log(topic[i][k] + '  ' + topic[j][k])
    // Finally checkign the number of topics knows by both paris collectively.
/*
The loop goes something like this.
['11110' , '10101', '00001']
Pair (0,1)(1,2)(2,1)
And then the check the indices of their string for know topics.
Like:
['11110' , '10101']
topic[i][k] && topic[j][k]
The counter goes up whenver the string index equals 1.
*/
     if(topic[i][k] === '1' || topic[j][k] === '1'){
        count +=1  
     }
  }
newArr.push(count)
}
}
const max = newArr.reduce((a,b)=>{
    return Math.max(a,b)
})
let secondCount = 0; 
for(let key of newArr){
    if(key == max){
     secondCount += 1   
    }
}
console.log([max, secondCount])