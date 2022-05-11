[n,c] = [5,[0,4]]
c.sort((a,b)=>a-b)
let maxVal = c[0]
// Taking the first value of c as the maxVal initially because as the array is sorted this can be the initial max distance.
for(let i=1; i<c.length; i++){
    // Now we need to find the maximum distance between two space stations. This is going to be a city that is between a city.
/*
For eg : city : 0 1 2 3 4 5 6 7 8
 spaceStation : . . 2 . . . . 7 .
Cities 2 and 7 have a space station and hence the city number 5 is the required city and to find its distance from the cities we do floor(5/2).
Another Example : 
            n : 0 1 2 3 4
spaceStation :  0 . . . 4
Cities 0 and 4 have a space station. The required space station will be floor((4-0)/2) which is 2  and it indeed is the correct output.
*/
maxVal = Math.max((c[i]-c[i-1])/2,maxVal)
}
// For some edge cases we need to find the distance between the last city and the last spaceStation. After that we return.
console.log(((n-1) - c[c.length-1]<maxVal)?Math.floor(maxVal):(n-1) - c[c.length-1])
