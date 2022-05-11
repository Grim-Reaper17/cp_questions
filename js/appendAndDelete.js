[s,t,k] = ['y','yu',2]
let count =0;
let output= 'No'
for(let i=0; i<Math.max(s.length,t.length); i++){
if(s[i]==t[i]){
count+= 1;
}
else{
break;
}
}
let checker = (s.length-count) + (t.length-count)
if((k==checker||k>=s.length+t.length)||(checker%2==k%2&&checker<=k)){
    // For the output to be yes there are three conditions. Now first of all this questions wants us to check if the strings can be made equal to each other by performig excatly k number of operations nothing more nothing less. Hence if the deletes and adds required are equal to k then output='Yes' or if k is greater than the length of the two strings then too output='Yes'. Now if these conditions are not true then we check that the checker(deletes+addsRequired) and k are either both even or odd. Because if they are opposite then we will never be able to equalize the strings and we also check that k<=checker so that we can perform the deletes.
output='Yes'
}
console.log(output)