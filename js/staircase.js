/*I need to write an algorithm that takes a number and print '#' in the following format.
If n =2 , then print :
 #
##
or 
If n = 5 , then print :
    #
   ##
  ###
 ####
#####
Note : The last line must have 0 spaces.

*/

/*
To solve this problem we first iterate through n.
i.e.
for(let i=0; i<n; i++){
    let string = ''

}
Now for this algorithm to work the spaces in the first line must be one number less than n and to do that we can use the algorithm , n-i-1 in another loop that is declared inside the first for loop. We have to use n-i-1 because the number i is going to be 0 for the first case and suppose n is 5 that will lead to 5 spaces but reducing one will result in the creation of the perfect tree. We can add the spaces inside the string in the loop so that as the loop runs f number of times a single space will be added whenever the loop runs.

for(let j=0; j<n-i-1; j++){
    string += ' '
}

To add '#' to the string we will have to create another loop and give it the conditions i+1 cause again i will be 0 and always one less than n but we want a '#' to appear at the first iteration and hence we give i+1 condition to the loop :
for(let k=0; k<i+1; k++){
    string += '#'
}
One more thing to notice in the solution is that there two loops inside one big loop and hence they all run simultaneously.
*/

function staircase(n) {
    for(let i=0; i<n; i++){
        let string = ''
        for(let j=0; j<n-i-1; j++){
            /*
            Here n = 2;
            and 
            i= 0(for the first iteration of the loop),1
            and the -1 is constant.
            For the first space n-0-1 i.e.
            n-2-0 = Two 
           */

            string+= ' '
        }
        for(let k=0; k<i+1; k++){
            /*
            Here now to have the hash for the first iteration,
            k = 0;
            i=0;
            Although after evaluation i becomes 1 as one is added to it.
            So the loop will print one '#' on the first iteration and two '#' on the second iteration and the cycle will continue.
            */
            string += '#'
           
        }
      console.log(string)  
    }
 
 }

let n=7;
staircase(n)