let crew_id= [1, 3, 4, 5, 6]
let job_id = [1, 3, 8, 9, 15]
job_id.sort(function(a,b){return a-b})
crew_id.sort(function(a,b){return a-b})
let output = []
for(let i=0; i<job_id.length; i++){
    let traverseArr = []
for(let j=0; j<crew_id.length; j++){
const diff = Math.abs(job_id[i] - crew_id[j])
traverseArr.push(diff)

}
const min = traverseArr.reduce((a,b)=>{
    return Math.min(a,b)
})
output.push(min)
let index = traverseArr.indexOf(min)
crew_id.splice(index , 1)
}
console.log(output.reduce((a,b)=>{
return a+b
}))