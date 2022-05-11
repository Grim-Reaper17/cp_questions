let grid = ['abc','hjk','mpq','rtv']
let counter =0;
let output = 'YES'
let newArr = []
for(let k=0; k<grid.length; k++){
    grid[k] =grid[k].split('').sort().join('')
}
for(let i=0; i<grid[0].length; i++){
    let newString = ''
for(let j=0; j<grid.length; j++){
newString+= grid[j][i]
}
newArr.push(newString)
}
console.log(newArr)
for(let f=0; f<newArr.length; f++){
if(newArr[f] == newArr[f].split('').sort().join('')){
counter += 1
}
else{
    output = 'NO'
}
}
console.log(output)

