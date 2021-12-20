let string = '1:22:00A.M.'
let newArray = string.split(':')
console.log(newArray)
let lastElement = newArray.pop()
let spliced = lastElement.slice(-4)
let finalElement = lastElement.replace(spliced , '')
newArray[2] = finalElement
console.log(newArray.join(':'))

const timeConversion = (s)=>{
    let newArray = s.split(':')
    if(s.includes('P.M.')){
      
     if(newArray[0] < 12){
let newTime = Number(newArray[0]) + 12
newArray[0] = newTime
console.log(newArray.join(':'))

     }
if(newArray[0] == '12'){
console.log(newArray.join(':'))
}
else{
 console.log(newArray.join(':'))
}  
    }
    else if(s.includes('A.M.')){

        if(newArray[0] == 12){
            let newTime = newArray[0] - 12 + '' + 0
           newArray[0] = newTime
           console.log(newArray.join(':'))
        }
        console.log(newArray.join(':'))
    }
}

timeConversion(string)
let replace = '1233'
let ne = replace.replace(1 , 2)
console.log(ne)