//string comparison uring array//
let a3 = ['apple','orange','watermelon','kiwi','strawberry','grapes'];
var a3len = a3.length;
   console.log(a3len)
   function minstring(array)
   {
    let minEle =array[0];
    for(let i=1;i<array.length;i++){
    
        if(array[i].length<minEle.length){
          minEle = array[i];
        }
    }
    
    return minEle;
    }
console.log(minstring(arr))
  