interface IUser {
    formateUser: () => string;
}

class User implements IUser {
    constructor(private name: string, private age: number) { }

    formateUser = () => {
        return ` Name : ${this.name}, age : ${this.age}`
    };
};

const newUser = new User("Tamzid", 22);

console.log(newUser.formateUser());