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
   if(digits > -10 && digits < 10)
   {
        return digits
   }
   else{
        let sum=0;
        let sumSplit=digits.toString().split('')
        for(let val of sumSplit)
        {
            sum+=Number(val)
        }
        return singleDigitSum(sum)
   }
    
}
const result = singleDigitSum(4352)
console.log(result);
