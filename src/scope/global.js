// Scope global

var hello = 'Hello' 
console.log(hello);

let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = "I'm global"
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = "I'm global";
}

anotherFunction();
console.log(globalVar);


