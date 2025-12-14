let function1: () => void;
let function2: (name:string) => void;
let function3: (name: string, age: number) => string;

function1 = () => {
    console.log("my name is tamzid , I am 22 years old");
};

function2 = (name:string) => {
    console.log(`my name is ${name} , I am 22 years old`);
};

function3 = (name:string,age:number) => {
   return `my name is ${name} , I am ${age} years old`
};

console.log(function3("Tamzid",22));