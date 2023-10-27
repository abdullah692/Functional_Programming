// Callback

// const sum=(a,b,callback)=>{
// setTimeout(()=>{
//     callback(a,b)
// },1000)
  
// }
// const callback=(x,y)=>{
//     let sum=x+y;
//     console.log('the sum is',sum);
// }

// sum(10,8,callback)


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
// const sum=(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         let result=a+b;
//         resolve(result);   
//     })
// }

// const Addition=(x,y)=>{
//     sum(x,y).then((result)=>{
//         console.log("The result is",result);
//     }).catch((err)=>{
//         console.log('Error is',err);
//     })
// }


const sum=(a,b)=>{
    return new Promise(function(resolve,reject){
        let result=a+b;
        resolve(result);
    })
}

const Val=(a,b)=>{
    sum(a,b).then((res)=>{
        console.log("The result is of promise",res);
    })
    .catch((err)=>{
        console.log("Error MEssage is",err);
    })
}
Val(10,15)

// const Addition=async(a,b)=>{
//         const promise= new Promise((resolve,reject)=>{
//             console.log("This is promises program of addition");
//             let result=a+b;
//             resolve(result);
//         });

//         const value=await promise; 
//         console.log(`The addition is of gi${a} & ${b}`,value);

       
// }

const Addition=async(a,b)=>{
    const promise=new Promise((resolve,reject)=>{
        let result=a+b;
        resolve(result);
    })

    const value=await promise;
    console.log("the value of asyn await is",value);

}

Addition(10,50)

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


const Value=()=>{
    return new Promise((resolve,reject)=>{
        let result=10+5;
        if(result > 10)
        {
            resolve(result)
        }
        else{
            reject("Error")
        }
    })
}

Value().then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
})




