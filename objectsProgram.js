//Iterate thorugh the object

// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022
// };

// for(let keys in car )
// {
//     console.log(`The property of car object is "${keys}" with the value of "${car[keys]}"`);
// }

// Object Sum

// const operateOnObject=(data)=>{
   
//    let sum=0;
//    for(const key in data)
//    {
//     console.log(key, "value is", key);
//     sum+=data[key]
//    }
//    return sum;
// }

// const data = {
//     apples: 5,
//     bananas: 3,
//     oranges: 2,
//     grapes: 4
// };

// const result = operateOnObject(data);
// console.log("Sum of values:", result);

// Key Capitalization

// let obj={
//     name: "Alice",
//     age: 25,
//     city: "New York"
// }

// const Capatalize=(obj)=>{
//    let capitalObj={}
//    for(let key in obj)
//    {
//         const firstLetter=key[0].toUpperCase()
//         const restLetter=key.slice(1)
//         const conCat=firstLetter+restLetter;
//         capitalObj[conCat]=obj[key];     
//    }
//    console.log(capitalObj);
// }

// Capatalize(obj);


//     const newObj={}
//     for(let i=0 ;i < Capital.length ; i++)
//     {
//         newObj[Capital[i]]= obj[Object.keys(obj)[i]];
//     }

//     console.log(newObj);
// }



//Length of the Keys

// const sampleObject = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
// };

// const LengthKey=(obj)=>{
    // console.log(obj);
    // const arr=[];
    // for(let key in obj)
    // {
    //     let keyLength=key.length;
    //     console.log(keyLength);
    //     arr.push(keyLength);
    // }
    // return arr;
//     let arr=[];
//     for(let key in obj)
//     {
//         const len=key.length;
//         arr[key]=len
//     }
//     return arr
// }

// const result=LengthKey(sampleObject)
// console.log(result);

//Specified Value

//     let name='Bob';
//     for(const value of arrayOfPeople)
//     {
//         if(value.name === name)
//         {
//             return value
//         }
//     }
//     return null;

// for(let value of arrayOfPeople)
// {
//     const {name}=value;
//     if(name == Valname)
//     {
//         return value
//     }
// }
// }

// const result=SpecifiedValue(arrayOfPeople,"Bob")
// console.log(result);

//Group the objects of same age

// const arrayOfPeople = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 30 },
// ];

// const GroupByAge = (arr) => {
//     let obj={}
//     for(let values of arr)
//     {
//         const {age}=values;
//         if(!obj[age])
//         {
//             obj[age]=[]
//         }
//         obj[age].push(values)
//     }
//     console.log(obj);
 
// }
// const result = GroupByAge(arrayOfPeople);
// console.log(result);



// let obj={}

// for(let value of arr)
// {
//     const {age}=value;
//     if(!obj[age])
//     {
//         obj[age]=[]
//     }
//     obj[age].push(value)
// }
// return obj;
// }


   
/////////////////////////////
// arr.forEach((persons)=>{
//     console.log(persons);
//     const {name,age}=persons;
//     if(!obj[age])
//     {
//         obj[age]=[]
//     }

//         obj[age].push(persons)

// })
// return obj
// };


//

//Total Sum

// const arrayOfItems = [
//     { item: "apple", price: 2.5 },
//     { item: "banana", price: 1.0 },
//     { item: "orange", price: 1.75 }
// ];

// const sumProperty=(arr,keyName)=>{

//    let sum=0;
//    for(let val of arr)
//    {
//         sum+=val.price
//    }
//    return sum
// }

// const totalPrice = sumProperty(arrayOfItems, "price");
// console.log("Total Price:", totalPrice);

//Array to object

// const array = ["one", "two", "three", "four"];

// const ArrayToObj=(arr)=>{
    
//     let obj={}
//     for(i=0 ; i<arr.length ;i++){
//         obj[i]=arr[i]
//     }
//     return obj
// }

// const result=ArrayToObj(array)
// console.log(result);

const obj = { 0: "one", 1: "two", 2: "three", 3: "four" };

const objToArr = (obj) => {
    let arr=[];
    for(let key in obj)
    {
        arr[key]=obj[key]
    }
   return arr
};

const result = objToArr(obj);
console.log(result);
