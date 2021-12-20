// Link to the original problem : https://www.hackerrank.com/challenges/lisa-workbook/problem

let arr =[4,2,6,1,10]
let k =3;
let count =0 ;
let page = 0;
for(let i=0; i<arr.length; i++){
for(let j= 1; j<=arr[i]; j++){
    console.log(j)
if(k==1 || j%k ==1){
    // This is the main functionality here and mostly the part in use is the right hand side part i.e. j%k == 1 and it means that increase page on 4 for e.g but it won't work on a single length array and for that case we have checked very specifically for the first condition to staisfy that type of test case.
    page +=1
    console.log('changing page')
}
if(page == j){
    count+=1
}
}
console.log('break;')
}
console.log(count++)