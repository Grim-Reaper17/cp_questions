let marks = [1,51,3,5,7]

const roundGrades = (grades)=>{
let finalOutput = ''
for(let i =0; i<100; i++){
    if(i%5!=0){
        continue
    }

if(grades[1] > 40 && Math.abs(grades[1]) - i < 3){
    grades[1] = i
}
if(grades[2] > 40 && Math.abs(grades[2]) - i < 3){
    grades[2] = i
}
if(grades[3] > 40 && Math.abs(grades[3]) - i < 3){
    grades[3] = i
}
if(grades[4] > 40 && Math.abs(grades[4]) - i < 3){
    grades[4] = i
}

finalOutput = [grades[1] , grades[2] , grades[3] , grades[4]]
}
console.log(finalOutput)
}

roundGrades(marks)