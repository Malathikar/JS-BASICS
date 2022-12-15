//funtion that counts the number of characters in a string//
var sen=" Hi, I'm Malathi. BDD Automation (bootcamp)$  "
console.log('using .length syntax = ', sen.length)
console.log('using trim method = ', sen.trim().length)
var regex = /[a-zA-Z0-9]/g
console.log('using regex method = ', sen.match(regex).length)

var regex=/[a-z]/g
console.log('using regex method = ', sen.match(regex).length)

//largest numer fo two//

var a,b;
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
console.log(cubert(200))

// inches to feet//

var a3;
var b3;
function inchtofeet(a3)
{
     b3 = a3/12;
    console.log(a3,'inches = ' ,'feet');
    return b3
}
console.log(inchtofeet(72));
console.log(inchtofeet(120));
console.log(inchtofeet(63));
    
//funtion for degree to fahrenhiet//

var a4;
var b4;
var b5;
function dtof(a4)
{
     b4 = a4 * 1.8;
     b5 = b4 + 32;

    console.log(a4,'degree = ',b5,'fahrenhiet');
}
console.log(dtof(40))
console.log(dtof(32))

//kilo grams to lb//

var a5;
let a6 = "kgs";
let a7 ="lbs";
let a8;

 function ktolb(a5,a8)
 {
    if(a8===a6)
    {
        console.log(a5,'kilograms = ')
      var b6 = a5 * 2.2;
      return b6;
      console.log( "pounds")
    }
else{
    console.log(a5,'pounds = ')
    var b6 = a5 / 2.2;
    return b6;
    console.log("kilogram")
}
 }
 console.log(ktolb(50,"lbs"))
 console.log(ktolb(110,"kgs"))
 //
