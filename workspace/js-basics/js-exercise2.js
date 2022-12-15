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

//