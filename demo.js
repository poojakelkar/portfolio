var add = function(){
    var counter;
    return function () {counter += 1; return counter}
}
// add();
console.log(add());