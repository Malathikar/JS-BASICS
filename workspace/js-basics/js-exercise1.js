
var inches;
var feet;
function inchtofeet(inches)
{
     feet = inches/12;
    console.log(inches,'inches = ' ,feet ,'feet');
   return feet;
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

