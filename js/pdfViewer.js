// Link to the orignal problem : https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=false

let h= [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7]
let word = 'abc'
let alphabets=  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let maxArea = Number.NEGATIVE_INFINITY
for(let i=0; i<word.length; i++){
let height = h[alphabets.indexOf(word[i])]
let area = height*word.length
maxArea = Math.max(area,maxArea)
}
console.log(maxArea)