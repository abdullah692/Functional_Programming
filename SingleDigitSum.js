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


const singleDigitSum=(digits)=>{
    if(digits > -10 && digits < 10)
    {
        return digits
    }
    else{
        let sum=0;
        let splitValue=digits.toString().split("")

        for(let i=0 ;i<splitValue.length ;i++)
        {
            sum+=Number(splitValue[i])
        }
        console.log(sum);

        return singleDigitSum(sum)
        
    }

}
const result = singleDigitSum(4352)
console.log(result);
