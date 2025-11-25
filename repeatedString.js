let str="a"
let n=10000000000000000

// const repeatString=(str,n)=>{
//     let count=0;
//     let strLen=str.length;
//     let stnPrint=""
//     let i=0;
//     while(i != n)
//     { 
//         for(let x=0; x< strLen; x++)
//         {

//             stnPrint+=str[x]
//             i++
//             if(i == n)
//             {
//                 break;
//             }
            
//         }
//     }
//     let filterVal = stnPrint.split('').filter((val)=> val == "a").length
//     return filterVal
// }

// console.log(repeatString(str,n))

//Another method

// let str = "aba";
// let n = 10;

// const repeatString = (str, n) => {
//     let count = 0;
//     let strLen = str.length;
//     let i = 0;

//     while (i != n) {
//         for (let x = 0; x < strLen; x++) {
//             // instead of storing string, just count 'a'
//             if (str[x] === "a") count++;
            
//             i++;

//             if (i === n) {
//                 break;
//             }
//         }
//     }
//     return count;
// }

// console.log(repeatString(str, n));



const repeatString=(str,n)=>{
    let strnLen= str.length;
    let aInOne=0
    
    for(let i=0; i< strnLen ; i++)
    {
        if(str[i] == "a")
        {
            aInOne++;
        }
    }

    console.log(aInOne,"aInOne");
    
    //repeated string
    let repeatedStr = Math.floor(n/strnLen)
    console.log(repeatedStr,"repeatedStr");

    //Remainder character
    let remand = n % strnLen
    console.log(remand,"remand");

    // Check remaining chara is "A" or not
    let aInRemainder=0;

    for(let i=0; i< remand; i++)
    {
        if(str[i] == "a")
        {
            aInRemainder++
        }
    }
    
    console.log(aInRemainder,"aInRemainder");
    

    return repeatedStr * aInOne + aInRemainder
    
}

const result=repeatString(str,n)
console.log(result);

