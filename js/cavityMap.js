// Link to the original problem : https://www.hackerrank.com/challenges/cavity-map/problem

[grid]=  [['989', '191','111']]
for(let i=1; i<grid.length-1; i++){
for(let j=1; j<grid[i].length-1;j++){
if(grid[i][j]>grid[i-1][j]&&grid[i][j]>grid[i+1][j]&&grid[i][j]>grid[i][j-1]&&grid[i][j]>grid[i][j+1]){
    // We can't use the string.replace approach because replace finds the first instance of the character to replace which might not be the case everytime.
    let sArr = grid[i].split('')
    sArr[j] = 'X'
    grid[i] = sArr.join('')
}
}
}
console.log(grid)