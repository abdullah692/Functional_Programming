//Prototype

function Person(name) {
    this.name = name
}

Person.prototype.sayHello = function () {
    console.log(`Hello, I am ${this.name}`);
     
}

const person1 = new Person("Abdullah")
person1.sayHello()


//Prototype Inheritance

const animal={
    eat(){
        console.log("It is eating.....");
        
    }
}

const dog=Object.create(animal)

dog.bark=()=>{
    console.log("Barking......");
    
}

dog.bark()
dog.eat()