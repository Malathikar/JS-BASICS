// string input comparison//
let a1,a2;
function strinp(a1,a2)
{
    console.log('Given inputs',a1, a2)
    if(a1.length<a2.length)
    {
        return a2;
    }
    else{
        return a1;
    }
}
console.log(strinp("malathi","karmugelan"))
console.log(strinp("Automation"," Testing"))

// string comparison uring array//
let a3 = ['apple','orange','watermelon','kiwi'];
var a3len = a3.length;
    
    for(var i=0;i<=a3len;i+2)
    {
       // console.log(a3[i]);
        var i1 = i++;
        
    //    console.log(a3[i1]);
    }
//console.log(arrstr())
//console.log(arrstr("apple","orange","watermelon","kiwi"))