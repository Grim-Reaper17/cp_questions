// Alice and Bob create a problem for hackerrank and the reviewer gives them a point on a scale of 1 to 100 so if Alice get high score then Bob then add one to her score and vice versa.

// To do this we first get two arrays as input of the scores of Alice and Bob. Then we define two variables AliceScore and BobScore and the length of the two arrays is goning to be the same so we iterate thou



let array1 = [4,2,3]
let array2 = [1,2,6]
let aliceScore = 0;
let bobScore = 0;
const compare = (a ,b)=>{
    for(let i=0; i<a.length; i++){


        if(a[i] < b[i]){
            bobScore += 1
        }
        if(a[i] == b[i]){
        
        }
        if(a[i] > b[i]){
        aliceScore += 1
        }
        
        
        }
        console.log(aliceScore + ' ' + bobScore)
}
compare(array1 , array2)