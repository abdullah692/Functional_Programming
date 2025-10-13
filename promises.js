// Callback
// const sum=(a,b,callback)=>{
//     setTimeout(()=>{
//        return callback(a,b)
//     },2000)
// }

// const callback=(x,y)=>{
//     let result=x+y;
//     console.log("The result is", result);
// }
// sum(10,8,callback)

const sum = (a, b, callback) => {
    setTimeout(() => {
        const result = a + b;
        callback(result); // Pass the result to the callback
    }, 2000);
};

// Callback that handles the result and uses it elsewhere
const handleResult = (result) => {
    console.log(`The sum is ${result}`); // Use the result here

    anotherFunction(result);
    // return result
    // Pass it to another function, for example:
};

// Another function that uses the result
const anotherFunction = (value) => {
    console.log(`Using the result in another function: ${value * 2}`);
};

// // Call the sum function
// sum(10, 5, handleResult).then((res)=>{
//     console.log("The result is",res);
    
// });


const Sum1 = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = x + y;
            resolve(sum);
        }, 4000);
        console.log("It is an asynchronous task");
    });
};

const Addition1 = async (a, b) => {
    const result = await Sum1(a, b);
    return `The sum of async/await is ${result}`;
};

const displayResult=Addition1(10, 30);
console.log("displayResult",displayResult);


// // Use an async function to log the result after the promise is resolved
// const displayResult = async () => {
//     const value = await Addition1(10, 30);
//     console.log(value); // This will log the resolved value after 4 seconds
// };

// displayResult();




//Even Odd
const checkEven=(num)=>{
    return new Promise((resolve,reject)=>{
        if(num%2 ==0)
        {
             resolve(num)
        }
        else{
            reject(num);
            
        }
    })
}

const EvenPromise=(num)=>{
    return checkEven(num).then((res)=>{
        // console.log("It is even:",res);
        return `It is even:${res}`

        
    }).catch((err)=>{
        console.log("It is odd",err);
        
    })
}

const val=EvenPromise(46)
val.then((res)=>console.log(res))




// const sum=(a,b,callback)=>{
//     setTimeout(()=>{
//         callback(a,b) 
//     },2000)
// }

// const addition=(x,y)=>{
//     let result=x+y
//     console.log(`The sum is ${result}`);
     
// }
// sum(10,9,addition)
// console.log(val);


// const fetchCallBack=(callback)=>{
//     setTimeout(() => {
//         const data={id:1,name:"Abdullah"}
//         callback(data,null)
//     }, 2000);
// }

// const printCallback=(data,error)=>{
//     if(data)
//     {
//         console.log("Data is fetched",data);
//     }
//     else{
//         console.log("Error occured",error);
        
//     }
// }


// fetchCallBack(printCallback)


const fetchCallBack=(callback)=>{
    setTimeout(() => {
        let data={id:1, "name":"ali"}
        callback(data,null)
    }, 2000);
}


const printCallback=(data,err)=>{
    if(data)
    {
        console.log("data is fetched");
    }
    else{
        console.log("Eror pccured");
        
    }
}
fetchCallBack(printCallback)


// const sum=(a,b,callback)=>{
//     setTimeout(()=>{
//            return callback(a,b) 
//     },1000)
// }

// const callback=(x,y)=>{
//     let result=x+y;
//     console.log("sum is",res);
// }

// sum(10,8,callback)

//Promise


//Multiolication
// const multiply=(x,y)=>{
//     return new Promise((resolve,reject)=>{
//         let result=x*y;
//         resolve(result)
//     })
// }

// const Multiplication=(a,b)=>{
//     multiply(a,b).then((res)=>{
//         console.log("THe result is",res);
//     }).catch((error)=>{
//         console.log("THe error occured");
        
//     })
// }


// Multiplication(10,15)

const mulltiply=(a,b)=>{
    return new Promise((resolve,reject)=>{
        let result=a*b
        if(result>20)
        {
            resolve(result)
        }else{
            reject("Error")
        }
    })
}

const Multiplication=(a,b)=>{
    mulltiply(x,y).then((res)=>{
        console.log("The res is",res);
    }).catch((err)=>{
        console.log("tHE err is",err);
        
    })
}

Multiplication(10,15)


//CHeck Name
// const fetchData=(data)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(data.name =="Ali")
//             {

//                 resolve(data)
//             }else{

//                 reject("Data is not fetched correclty")
//             }
//         }, 2000);

//     }
// )
// }

// const FetchPromise=(obj)=>{
//     fetchData(obj).then((res)=>{
//         console.log("THe data fetched is",res);
//     }).catch((error)=>{
//         console.log("THe error is :",error);    
//     })
    
// }

// const data={id:1 , name:"AHmed"}
// FetchPromise(data)





// const sum=(a,b)=>{
//     return new Promise(function(resolve,reject){
//         let result=a+b;
//         resolve(result);
//     })
// }

// const Val=(a,b)=>{
//     sum(a,b).then((res)=>{
//         console.log("The result is of promise",res);
//     })
//     .catch((err)=>{
//         console.log("Error MEssage is",err);
//     })
// }
// Val(10,15)

// const Addition=async(a,b)=>{
//         const promise= new Promise((resolve,reject)=>{
//             console.log("This is promises program of addition");
//             let result=a+b;
//             resolve(result);
//         });

//         const value=await promise; 
//         console.log(`The addition is of gi${a} & ${b}`,value);

       
// }

// const Addition=async(a,b)=>{
//     const promise=new Promise((resolve,reject)=>{
//         let result=a+b;
//         resolve(result);
//     })

//     const value=await promise;
//     console.log("the value of asyn await is",value);

// }

// Addition(10,50)

//Promise

// const Value=()=>{
//     return new Promise((resolve,reject)=>{
//         let result=10+16;
//         if(result > 15)
//         {
//             reject("Error ! Value not match the condition")
//         } 
//         else{
//             resolve(result)
//         }
//     })
// }

// Value().then((val)=>{
//     console.log("The promise is Resolved",val);
// }).catch((err)=>{
//     console.log("Not resolved",err);
// })


// const Value=()=>{
//     return new Promise((resolve,reject)=>{
//         let result=10+5;
//         if(result > 10)
//         {
//             resolve(result)
//         }
//         else{
//             reject("Error")
//         }
//     })
// }

// const Value=(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         let result=a+b;
//         if(result > 30)
//         {
//             resolve(result)
//         }
//         else{
//             reject("Not a valid")
//         }
//     })
// }

// Value(20,15).then((res)=>{
//     console.log("The promise is resolve",res);
// }).catch((err)=>{
//     console.log("The error is",err);
// })


// const Multiplication=async(a,b)=>{
//     const promise= new Promise((resolve,reject)=>{
//         let result=a*b;
//         resolve(result)
//     })

//     const val=await promise;
//     console.log(val);
// }

// Multiplication(10,2)


const Sum=(x,y)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let sum=x+y;
            resolve(sum)
        }, 4000);

        console.log("It is asynchrous task");
        
    })
}

const Addition=async(a,b)=>{
    const result=await Sum(a,b)
    return `The sum of asyn/await ${result}`
    
}


const value=Addition(10,30)
console.log(value); 


