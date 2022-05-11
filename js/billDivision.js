// Link to the original problem : https://www.hackerrank.com/challenges/bon-appetit/problem

let bill,k,b;
[bill,k,b] = [[3,10,2,9],1,7]
bill.splice(k,1);console.log((Math.abs( Math.ceil(bill.reduce((a,b)=>a+b)/2)-b==0)) ? 'Bon Appetit' : Math.abs( Math.ceil(bill.reduce((a,b)=>a+b)/2)-b))