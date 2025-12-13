var User = /** @class */ (function () {
    function User(name, age) {
        this.userName = name;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("Name : ".concat(this.userName, " and age : ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Tamzid", 23);
user1.display();
