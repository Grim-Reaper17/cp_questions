let n = 2
let m = 2
if (n%2 == 0 || m == 1){
    console.log(2)
}
/* The examples of the conditions being checked here are the following :
n =2
m = 2
n reduced to 1 first and second time but player one lost cause he has to make the first move here.
n = 1
m = 1
If height ==1 , p1 lost because he cannot make a move at all.
*/
// Otherwise if the n is odd and m!=1 then p1 can take down a tower , p2 is gonna mirror but at the end he will have to make the last move which will means that he is gonna love so 1 is returned.
console.log(1)