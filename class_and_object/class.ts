class User{
    userName: string;
    age: number;

    constructor(name: string, age:number) {
        this.userName = name;
        this.age = age
    }

    display():void{
    console.log(`Name : ${this.userName} and age : ${this.age}`);
    }
}

const user1 = new User("Tamzid", 23);
user1.display()