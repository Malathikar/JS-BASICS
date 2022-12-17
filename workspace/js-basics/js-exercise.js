//funtion that counts the number of characters in a string//
var sen=" Hi, I'm Malathi. BDD Automation (bootcamp)$  "
console.log(sen)
console.log('using .length syntax = ', sen.length)
console.log('using trim method = ', sen.trim().length)
var regex = /[a-zA-Z0-9]/g
console.log('using regex method = ', sen.match(regex).length)

var regex=/[a-z]/g
console.log('using regex method = ', sen.match(regex).length)

//largest numer fo two//

var a,b;
var a2=true 
function compare(a,b)
{
if(a<b)
{
  console.log('largest of two number', a, b, 'is')
   return b;
}else{
    console.log('largest of two number', a, b, 'is')
 return a;
}
}
console.log(compare(10,20))
console.log(compare(30,40))