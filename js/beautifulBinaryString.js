// Link to the original problem :  https://www.hackerrank.com/challenges/beautiful-binary-string/problem?isFullScreen=false

let b= '010010'
let counter =0;
let bArray = b.split('')
for(let i=0; i<bArray.length; i++){
    let subString= bArray.slice(i,i+3)
    console.log(subString)
  if(subString.join('')=='010'){
      bArray[i+2] = '1'
      counter += 1
  }
}
console.log(counter)