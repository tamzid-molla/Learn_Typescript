
let users: object[];
users = [];
let user1: { name: string, id: number, isStudent: boolean };
let user2: { name: string, id: number, isStudent: boolean };
user1 = { name: "tamzid", id: 101, isStudent: true };
user2 = { name: "molla", id: 111, isStudent: false };
users.push(user1, user2);

for (const key in users) {
    console.log(users[key]);

}
