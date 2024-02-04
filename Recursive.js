

const SumRecurive=(arr,i=0 )=>{
    if(arr.length == i)
    {
        return 0;
    }
    else{
        return arr[i] + SumRecurive(arr,i+1)
    }
}

const arr = [2, 4, 1, 6, 12, 3];

// const SumRecurive=(arr,i=0)=>{
//     if(arr.length == i)
//     {
//         return 0;
//     }
//     else{
//         return arr[i] + SumRecurive(arr,i+1)
//     }
// }
// const result = SumRecurive(arr);
// console.log(result);

//Reverse a String

const reverseString=(string)=>{
    console.log(string);
   if(string.length <=1)
   {
     return string
   }
   else{
    return string[string.length -1] + reverseString(string.slice(0,string.length-1))
   }
}

// const reverseString=(val)=>{
//     if(val.length <=1)
//     {
//         return val
//     }
//     else{
//         return val[val.length -1] + reverseString(val.slice(0,-1))
//     }
// }


// const result=reverseString("abdullah")
// console.log(result);



//Reverse the array

// const reverseArray=(arr ,i=0)=>{
//      if(arr.length == i)
//      {
//         return []
//      }
//      else{
//         return [arr[arr.length -1] , ...reverseArray(arr.slice(0,-1))]
//      }
// }

const reverseArray=(arr)=>{
    console.log(arr);
    if(arr.length < 1)
    {
        return []
    }
    else{
        return [arr[arr.length -1] , ...reverseArray(arr.slice(0,-1))]
    }
}

const originalArray = [1, 2, 3, 4, 5];
const result=reverseArray(originalArray)
console.log(result);

// Palindrome Check
