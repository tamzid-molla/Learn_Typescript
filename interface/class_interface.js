var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.formateUser = function () {
            return " Name : ".concat(_this.name, ", age : ").concat(_this.age);
        };
    }
    return User;
}());
;
var newUser = new User("Tamzid", 22);
console.log(newUser.formateUser());
