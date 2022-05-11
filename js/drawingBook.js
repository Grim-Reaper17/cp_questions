// Link to the original problem : https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=false

let n,p;
[n,p] = [5,4]
console.log(Math.min(Math.floor(p/2),Math.floor(n/2)-Math.floor(p/2)))
/* Here the first p/2 find the number of pages that will have to be turned to reach the required page from the front part.
n=5
p = 3
Math.floor(5/3) = 1
The back count is going to be n/2 - frontCount 
because n/2 in the half the number of pages as a book has pages on both sides and that is subtracted from the front count as that specifies the number of less pages that need to be turned from that side.
*/