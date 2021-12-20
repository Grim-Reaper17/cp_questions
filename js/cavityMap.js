let grid = ['1912', '8316367721984838592282693133446625341275338241466354524729424384615647514615523763198353549484986131', '1892', '1912']
let newArr = []
let output =[]
for(let i=0; i<grid.length; i++){
newArr.push(grid[i].split(''))
}
for(let j=0; j<newArr.length; j++){
    if(j==0 || j==newArr.length-1){
    
    }
else{
for(let k=0; k<newArr[j].length; k++){
if(k!=0 && k!=newArr[j].length - 1){
if(newArr[j][k] > newArr[j][k-1] && newArr[j][k+1]<newArr[j][k]){
    newArr[j][k] = 'X'
}
}

}
}
}
newArr.forEach((element)=>{
    output.push(element.join(''))
})
console.log(output)
