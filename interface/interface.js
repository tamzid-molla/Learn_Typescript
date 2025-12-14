var users = [];
var user1 = {
    id: 1,
    name: "Tamzid",
    age: 22,
};
var user2 = {
    id: 2,
    name: "Ashikur",
    age: 24,
};
users.push(user1, user2);
var displayUser = function (user) {
    console.log("ID : ".concat(user.id, " , Name:").concat(user.name, " , Age :").concat(user.age));
};
users.forEach(function (user) { return displayUser(user); });
