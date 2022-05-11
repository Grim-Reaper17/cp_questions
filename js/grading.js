let grades = [73,67,38,33,]
for(let i=0; i<grades.length; i++){
if(Math.ceil(grades[i]/5)*5 - grades[i] <3 && grades[i]>37){
grades[i] = Math.ceil(grades[i]/5)*5
}
}
console.log(grades)