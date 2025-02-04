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

//     let sum=0;
//     for(let key in data)
//     {
//         sum+=data[key]
//     }
//     return sum
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

let obj = {
    name: "Alice",
    age: 25,
    city: "New York"
}

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


const Capatalize = (obj) => {
    let objCap = {}
    for (let key in obj) {
        let firstLetter = key[0].toUpperCase();
        let restLetter = key.slice(1);
        let concatLetter = firstLetter.concat(restLetter);
        objCap[concatLetter] = obj[key]
    }
    console.log(objCap);

}

Capatalize(obj);


//     const newObj={}
//     for(let i=0 ;i < Capital.length ; i++)
//     {
//         newObj[Capital[i]]= obj[Object.keys(obj)[i]];
//     }

//     console.log(newObj);
// }



//Length of the Keys

const sampleObject = {
    name: "Alice",
    age: 25,
    city: "New York"
};

// const LengthKey=(obj)=>{
// const arr=[];
// for(let key in obj)
// {
//     let keyLength=key.length;
//     console.log(keyLength);
//     arr.push(keyLength);
// }
// return arr;
//     let arr={}
//     for(let key in obj)
//     {
//         let keyLength=key.length;
//         arr[key]=keyLength
//     }
//     return arr

// }

// const result=LengthKey(sampleObject)
// console.log(result);


// const arrayOfPeople = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 30 },
//   ];

//Specified Value

// let name='Bob';
// for(const value of arrayOfPeople)
// {
//     if(value.name === name)
//     {
//         return value
//     }
// }
// return null;

// const SpecifiedValue=(arr,target)=>{
//     for(let val of arr)
//     {
//         if(val.name == target)
//         {
//             // console.log(val);

//             return val
//         }

//     }   
// }


// const resultSep=SpecifiedValue(arrayOfPeople,"Bob")
// console.log(resultSep);

//Group the objects of same age

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


// const GroupByAge = (arr) => {
//     let obj={}
//     for(let val of arr)
//     {
//         let {age}=val
//         if(!obj[age])
//         {
//             obj[age]=[]
//         }
//         obj[age].push(val)
//     }
//     console.log(obj);


// }

const GroupByAge = (arr1) => {
    // let arr={};
    // for(let value of arr1)
    // {
    //     // debugger
    //     let {age,name}=value;
    //     if(!arr[age])
    //     {
    //         arr[age]=[]
    //     }
    //     arr[age].push(name)
    //     console.log(arr);   
    // }

    // const convertArray=Object.keys(arr).map((val)=>{
    //     return{
    //         age:val,
    //         names: arr[val]
    //     }
    // })
    // return convertArray

    const arrayOfPeople = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 30 },
    ];
    

    let obj = {}
    for (let value of arr1) {
        let { age, name } = value
        if (!obj[age]) { 
            obj[age] = []
        }
        obj[age].push(name) 
    }
    console.log(obj);
    
    const mapVal=Object.keys(obj).map((val)=>{
        return{
            age:val,
            names:obj[val]
        }
    })
    return mapVal
}



const resultAge = GroupByAge(arrayOfPeople);
console.log(resultAge);



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

// let obj={}
// for(i=0 ; i<arr.length ;i++){
//     obj[i]=arr[i]
// }
// return obj
//     let obj={}
//     for(let i=0 ;i<= arr.length ;i++)
//     {
//         if(i==0)
//         {
//         obj[i]="zero" 
//         }else{

//             obj[i]=arr[i-1]   
//         }
//     }
//     console.log(obj);

// }

// const resultArr=ArrayToObj(array)
// console.log(resultArr);

const obj1 = { 0: "one", 1: "two", 2: "three", 3: "four" };

const objToArr = (obj) => {
    //     let arr=[];
    //     for(let key in obj)
    //     {
    //         arr[key]=obj[key]
    //     }
    //    return arr

    let arr = []
    for (let key in obj) {
        arr.push(obj[key])
    }
    return arr
};

const result = objToArr(obj1);
console.log(result);
