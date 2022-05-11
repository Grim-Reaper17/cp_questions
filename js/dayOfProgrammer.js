// Link to the original problem : https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=false

// We can remove the extra conditionals and just use return statements to further shorten the code.

let year = 2100
if(year==1918)console.log('26.09.1918')
else if((year%400==0||(year%4==0&&year%100!=0))||((year<1918)&&year%4==0))console.log(`12.09.${year} `)
else{console.log(`13.09.${year}`)}