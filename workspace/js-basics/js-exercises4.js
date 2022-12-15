
//boolean flag

var a1;
var b1=true
var b2=false
function useboolean(a1)
{if(a1>5000 && a1<9999)
{
    console.log('under given boolean condition', a1 ,'is')
    return b1;}
else{
    console.log('under given boolean condition', a1 ,'is')
    return b2;}}
console.log(useboolean(100))
console.log(useboolean(9899))

// cube root//
var a2;
function cubert(a2)
{
    console.log('cube root of', a2)
    return a2*a2*a2;
}
console.log(cubert(5))
console.log(cubert(25))
