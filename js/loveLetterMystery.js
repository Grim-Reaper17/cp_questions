let s= 'cba'
let output =0;
// First we target the part to the right from the center of the string and the part to the left of string from the center.
let rightCenter = Math.ceil(lowerCase.length/2)
// We use Math.ceil because we want to skip the center and just get the rigth side of the string.
let leftCenter = Math.floor((lowerCase.length/2)-1)

// We used Math.floor beacause here the center of the string is indeed required so that we can search upto the center(not including the center so it is still skipped).

// After that we declare a loop where we iterate through the right part and left part and compare the characters at the same opposite indices. To do so we use smart conditioning.
for(let i=rightCenter,j=leftCenter; i<lowerCase.length; i++,j--){
// After that we find the difference between the two opposite characters and add that difference to the output because that's the nubmer of subtractions we will have to do to make the characters equal.
    let difference = Math.abs(lowerCase.charCodeAt(i) - lowerCase.charCodeAt(j))
output += difference
}
console.log(output)