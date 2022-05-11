// Link to the original problem : https://www.hackerrank.com/challenges/save-the-prisoner/problem

[n,m,s] = [7,19,2]

// My apporach was right but had just one flaw and that is that we are supposed to subtract one from the (m+s) value because we are suppose to include the first prisoner and for that we need to minus one from the (m+s). If the last is 0 then that means that the prisoner to be warned it n.

console.log((m+s-1)%n||n)