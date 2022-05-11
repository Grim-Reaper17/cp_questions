// Link to the original problem : https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=false

[x,y,z] = [1,2,3]
if(Math.abs(z-x)>Math.abs(z-y))console.log('Cat B');else if(Math.abs(z-x)==Math.abs(z-y)) console.log('Mouse C');else{console.log( 'Cat A')}