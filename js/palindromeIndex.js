// let s = 'baa'
// let newArray = s.split('')
// let right= Math.ceil(s.length/2)
// let left = Math.floor((s.length/2)-1)
// for(let i=right,j=left; i<s.length;i++,j--){
// newArray.splice(i,1)
// if(newArray.join('') == newArray.reverse().join('')){
//     console.log(false)
// console.log(i)
// }
// newArray = s.split('')
// console.log(newArray)
// newArray.splice(j,1)
// if(newArray.join('') == newArray.reverse().join('')){
//   console.log(newArray)
//     console.log(j)
// }

// newArray = s.split('')
// }
let s= 'baaa'
let l = s.length;
let i,j,a,b;
for (i=0, j=l-1; i<l; i++,j--){
    if (s.charAt(i)!=s.charAt(j))
        break;
}
if (i>j) console.log(-1);

for (a = i+1, b = j;a<j && b>i+1; a++,b--){
    if (s.charAt(a)!=s.charAt(b))
        console.log(j)
}
console.log(i)