// let person1={
//     name:"Ali",
//     greet:function(message,greeting){
//         console.log(`${message} , I am ${this.name} , ${greeting}`);
//     }
// }

// let person2={
//     name:"Abdullah" 
// }


// let person3={
//     name:"Rahul"
// }

//call
// person1.greet.call(person2,"Hello","Assalam o Allikum")


//aplly
// person1.greet.apply(person2,["Hello","Namaste"])


//bind
// let printName=person1.greet.bind(person2,"Hello","Assalam o Allikum")
// console.log(printName);
// printName()



let names={
    first:"Abdullah",
    lastName:"Siddiqui"
}

let myName=function(val,country){
    console.log(this.first +" "+ this.lastName +"and belongs from" ,val + "country",country);   
}


Function.prototype.myBind=function(...args){
    let obj=this
    params=args.slice(1)
    console.log('args',args);
    
    return function(...args1){
        console.log(...args1);
        
        obj.apply(args[0],[...params,...args1])
    }
}

let printName2=myName.myBind(names,"Karachi")
printName2('Pakistan')