// const singleDigitSum = (digits) => {
//     if (digits > -10 && digits < 10) {
//         return digits
//     }
//     else {
//         let sum = 0;
//         let numString = digits.toString().split("")
//         console.log(numString);

//         for (let i = 0; i < numString.length; i++) {
//             sum += Number(numString[i])
//         }
//         return singleDigitSum(sum)
//     }

// }


const singleDigitSum = (digits) => {
     // if(digits > -10 && digits < 10)
     // {
     //      return digits
     // }
     // else{
     //      let splitNum=digits.toString().split('')
     //      let sum=0
     //      for(let val of splitNum)
     //      {
     //           sum+=Number(val)
     //      }
          
     //      return singleDigitSum(sum)
     // }
     // if(digits > -10 && digits < 10)
     // {
     //      return digits
     // }

     // let sum=0;
     // let splitNum=digits.toString().split('')
     // for(let val of splitNum)
     // {
     //      sum+=Number(val)
     // }
     // return singleDigitSum(sum)

     if(digits > -10 && digits < 10)
     {
          return digits
     }
     else{
          let sum=0;
          let splitNum=digits.toString().split('')
          for(let val of splitNum)
          {
               sum+=Number(val)
          }

          return singleDigitSum(sum)
     }

     

}
const result = singleDigitSum(43561)
console.log(result);
