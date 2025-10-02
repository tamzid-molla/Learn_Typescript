var users;
users = [];
var user1;
var user2;
user1 = { name: "tamzid", id: 101, isStudent: true };
user2 = { name: "molla", id: 111, isStudent: false };
users.push(user1, user2);
for (var key in users) {
    console.log(users[key]);
}
