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

class Student extends User{
    studentId: number;

    constructor(name: string,age:number,id:number) {
        super(name, age);
        this.studentId = id;
    }
    display():void{
    console.log(`Name : ${this.userName}, age : ${this.age} , ID : ${this.studentId}`);
    }
}

const student1 = new Student("Arafat", 23, 109);
student1.display()