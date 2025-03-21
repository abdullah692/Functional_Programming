//First Method

const palandrome = (val) => {

    //   let len=val.length ;
    //   for(let i=0 ; i< len/2 ; i++)
    //   {
    //       if(val[i] !== val[len-1-i])
    //       {
    //           return "It is not a palindome"
    //       }
    //   }
    //   return "It is palindrome"

//    let len=val.length;
//    for(let i=0 ; i< Math.floor(len/2); i++)
//    {
//         if(val[i] != val[len -1 -i])
//         {
//             return "Not a Palindrome"
//         }
//    }
//    return "It is a Palindrome"

let len=val.lenth;
for(let i=0 ; i<Math.floor(len/2) ; i++)
{
    if(val[i] != val[len-1-i])
    {
        return "Not a Palondrome"
    }
}
return "It is a Palindrome"
}
const value = palandrome('abababa');
console.log(value);


//With builtin method

// const checkPalindrome=(val)=>{
// const reverseVal=val.split("").reverse().join("");
// if(val == reverseVal)
// {
//     return "The value is palindrome"
// }
// else{
//     return "Not a plindrome"
// }

// }

// const check=checkPalindrome('radar')
// console.log(check);


//With recursion
const palindrome = (str) => {
    const val = str.toLowerCase();
    // if(val.length <=1)
    // {
    //     return 'It is a palindrome'
    // }

    // if(val.length > 1)
    // {
    //     if(val[0] !== val[val.length -1])
    //     {
    //         return 'It is not a palindrome'
    //     }
    // }

    // return palindrome(val.slice(1,val.length -1))

    if (val.length <= 1) {
        return 'It is a palindrome'
    }
    if (val.length > 1) {
        if (val[0] != val[val.length - 1]) {
            return 'Not a palindrome'
        }
    }

    return palindrome(val.slice(1,val.length -1))
}

const result = palindrome('abbab')
console.log(result);