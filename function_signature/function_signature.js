var function1;
var function2;
var function3;
function1 = function () {
    console.log("my name is tamzid , I am 22 years old");
};
function2 = function (name) {
    console.log("my name is ".concat(name, " , I am 22 years old"));
};
function3 = function (name, age) {
    return "my name is ".concat(name, " , I am ").concat(age, " years old");
};
console.log(function3("Tamzid", 22));
