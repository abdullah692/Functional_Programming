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

    let len = val.length;
    for (let i = 0; i < len / 2; i++) {
        if(val[i] != val[len -1 -i])
        {
            return "Not a Palindrome"
        }
    }
    return "It is a Palindrome"

}
const value = palandrome('abba');
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
        return "It is palindorme"
    }
    if (val.length > 1) {
        if (val[0] !== val[val.length - 1]) {
            return "Not a palindorme"
        }
    }
    return palandrome(val.slice(1, val.length - 1))
}

const result = palindrome('abba')
console.log(result);