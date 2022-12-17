
//string comparison uring array//
let a3 = ['apple', 'orange', 'watermelon', 'kiwi', 'strawberry', 'grapes'];
var a3len = a3.length;
console.log(a3len)

for (var i = 0; i <= a3len; i++) {
    console.log(a3[i]);
}


function arrstring(array) {
    let minstr = array[0];
    for (let i = 1; i < array.length; i++) {

        if (array[i].length < minstr.length) {
            minstr = array[i];
        }
    }

    return minstr;
}
console.log(arrstring(a3))