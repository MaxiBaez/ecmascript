function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console(name, age, country)
}

//es6
function newFunction2(name='oscar', age= '32', country= 'MX') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Hol soy Maxi \n"
+ "Soy de Córdoba."

//es6
let lorem2 = `otra frase 
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name' : 'oscar',
    'age' : 32,
    'country' : 'MX' 
}
console.log(person.name, person.age);

//es6
let {name, age, country } = person;
console.log(name, age);
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

const a = 'b';
a = 'a'


let name = 'oscar';
let age = 32;
//es5
obj = {name: name, age: age};
//es6
obj2 = {name, age};
console.log(obj2);

const names = [
    {name: 'Oscar', age:32}
    {name: 'Yesica', age:27}
]

let listOfNames= names.map(function(item){
    console.log(item.name);
})

let listOfNames2= names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num=> num* num;

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve ('Hey!');
        } else {
            reject ('ups!');
        }
    });
}

helloPromise()
.then(Response => console.log(Response))
.then(() =>console.log ('hola'))
.catch(error=> console.log(error));

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueb = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc= new calculator();
console.log(calc.sum(2,2));

import { hello } from './module';

hello ();

function* helloWorld () {
    if (true) {
        yield 'hello, ';
    }
    if (true) {
        yield 'World';
    }
    if (true) {
        yield 'Maxi';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);