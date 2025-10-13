// //Callback

// const Addition = (a, b, callback) => {
//     if (a + b > 20) {
//         setTimeout(() => {
//             let result = a + b
//             callback(result)
//         }, 2000)
//     }
// }

// const Sum = (res) => {
//     console.log("The sum is ", res);
//     handleResult(res);
//     // return res
// }

// const handleResult = (val) => {
//     console.log("the value is", val);

// }
// Addition(10, 30, Sum)


// const fetchCallBack = (callback) => {

//     setTimeout(() => {
//         let result = { id: 2, name: 'Abdullah' }
//         callback(result, null)
//     }, 2000)
// }

// const printCallback = (res, err) => {
//     if (res) {
//         console.log("The result is", res);
//     }
//     else {
//         console.log("The error is", err);

//     }
// }

// fetchCallBack(printCallback)


// //Promise

// const mulltiply = (a, b) => {
//     return new Promise((resolve, reject) => {
//         let result = a * b
//         if (result > 15) {
//             resolve(result)
//         }
//         else {
//             reject("Invalid")
//         }
//     })
// }

// const Multiplication = (a, b) => {
//     mulltiply(a, b).then((res) => {
//         console.log("THe multilplication result is", res);
//     }).catch((err) => {
//         console.log("The error is", err);

//     })
// }


// Multiplication(10, 2)


// const evenCheck = (val) => {
//     return new Promise((resolve, reject) => {
//         if (val % 2 == 0) {
//             resolve(`The num ${val} is even`)
//         } else {
//             reject(`The num ${val} is odd`)
//         }
//     })
// }

// const checkEven = (a) => {
//     evenCheck(a).then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log("THe error is", err);

//     })
// }
// checkEven(22)



//Async Await
const checkAsyn = (x) => {
    console.log("Fetching data....");

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let obj = {
                id: 1,
                name: "Ahmed"
            }

            if(obj.name == x)
            {
                resolve(obj)
            }
            else{
                reject(null)
            }

        }, 3000);


    })

}

const handleAsync = async (x) => {
    try {
        let result = await checkAsyn(x)
        console.log("THe result of asyn is", result);


    } catch (error) {
        console.log("The error of fetching data:", error);

    }
}

handleAsync("Ahmed")