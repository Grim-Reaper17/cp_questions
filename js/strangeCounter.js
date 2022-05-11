// Link to the problem : https://www.hackerrank.com/challenges/strange-code/problem?isFullScreen=false

// This solution is a discovery algorithm that was found out while the creator of the solution tried to find the solution.
let t = 4;
let a =3;
let time=1;
while((a+time) <= t){
     // Here we add the value of the 'time' to 'a'. So as the time is 1 here the value of 'time' becomes 4 after adding 3 to it.
    time= a+time;
    // The value of a is also increamented to double its current value. It becomes 6 in this case.
    a= a*2;
}
// Now we return 'a' + 'time' subtracted from t which comes out to be 6 here and this algorithm also works for all other test cases.
console.log((a+time) - t);
