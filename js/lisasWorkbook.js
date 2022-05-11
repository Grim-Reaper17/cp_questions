// Link to the original problem : https://www.hackerrank.com/challenges/lisa-workbook/problem

[n,k,arr] = [5,3,[4,2,6,1,10]]
let page,problemCounter;
[page,problemCounter] = [0,0]
for(let i=0; i<n; i++){
let counter=-1;
// We can either set the counter to -1 or set the arr[i]+1 to just arr[i] but the nature of the code does not allow to that because then we can miss number that was equal to page so we instead set the counter to -1 to copensate for the extra iteration.
page++
for(let j=1; j<arr[i]+1; j++){
counter++    
if(counter==k){counter=0;page++};
if(page==j)problemCounter++
}
}
console.log(problemCounter)