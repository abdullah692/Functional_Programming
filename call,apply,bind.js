let person1={
    name:"Ali",
    greet:function(message,greeting){
        console.log(`${message} , I am ${this.name} , ${greeting}`);
    }
}

let person2={
    name:"Abdullah"
}


let person3={
    name:"Rahul"
}

//call
person1.greet.call(person2,"Hello","Assalam o Allikum")


//aplly
person1.greet.apply(person2,["Hello","Namaste"])


//bind
let printName=person1.greet.bind(person2,"Hello","Assalam o Allikum")
console.log(printName);
printName()
