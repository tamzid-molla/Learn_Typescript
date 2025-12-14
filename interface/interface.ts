interface IUser {
  id: number;
  name: string;
  age: number;
}

const users: IUser[] = [];

const user1: IUser = {
  id: 1,
  name: "Tamzid",
  age: 22,
};

const user2:IUser = {
  id: 2,
  name: "Ashikur",
  age: 24,
};

users.push(user1, user2);

const displayUser = (user:IUser) => {
  console.log(`ID : ${user.id} , Name:${user.name} , Age :${user.age}`);
};

users.forEach((user) => displayUser(user));
