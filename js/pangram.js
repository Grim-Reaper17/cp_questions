let regex = /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i
/*
This regex uses positive lookahead where the lookahed sees if a specific character is followed by another character. Here's its a bit different as its checking if a is preceeded by a single or multiple characters(which means that a exists) and the checking the same for each character of the string while not caring about the capitalisation.
*/
let s= 'The quick brown fox jumps over the lazy dog'
if(regex.test(s)){
   console.log('pangram')
}
else{
    console.log('not pangram')
}