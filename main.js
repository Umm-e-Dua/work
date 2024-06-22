// Rest parameter 
function myName(a, b) {
    var number = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        number[_i - 2] = arguments[_i];
    }
    console.log(myName);
}
myName(1, 2, 3, 4);
