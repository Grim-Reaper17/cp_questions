// Link to the problem : https://www.hackerrank.com/challenges/gem-stones/problem?isFullScreen=false

let arr = ['abcdde', 'baccd', 'eeabg']
let curMax =0
let maxElem = ''
let counter = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i].length>curMax){
        maxElem= arr[i]
    }
curMax = Math.max(arr[i].length,curMax)

}
let newSet = new Set(maxElem.split(''))
let firstElem = Array.from(newSet).join('')

for(let j=0; j<firstElem.length; j++){
let test = arr.every((element)=>{
return element.includes(firstElem[j])
})
if(test==true){
    counter += 1
}
}
console.log(counter)