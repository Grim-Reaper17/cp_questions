// Link to the original problem : https://www.hackerrank.com/challenges/tower-breakers-1/problem 

[n,m] = [2,2];

// This questions involves imagining about the possibilty rather than executing it and hence requires common sense more than coding skills. We can see that if the tower height is equal to 1 or if there are even towers so for eg : there are two towers with height 6 and player 1 takes the first down to 3 and player 2 takes the second down to 3 and then player 1 takes the first down to 1 and player matches the move player two wins and this will be true for every condition. In all other cases player is going to win.

console.log((m==1||n%2==0)?2:1)