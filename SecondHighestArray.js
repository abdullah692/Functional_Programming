let arr = [2, 5, 4, 3, 12, 11, 89, 12, 67, 32, 12, 43, 23, 76];

// const HighestEelement=(arr)=>{
// let max=0;
// for(let i=0; i<arr.length ;i++)
// {
//     if(arr[i] > max)
//     {
//       max=arr[i]
//     }
// }
// return max
//   let max=0
//     for(let i=0 ; i<arr.length  ;i++)
//     {
//         if(arr[i] > max)
//         {
//           max=arr[i]
//         }
//     }
//     return max;
// }

// const result=HighestEelement(arr)
// console.log('The  highest value in array is' , result);

const HighestSecondEelement = (arr) => {

  // let first = -1;
  // let second = -1;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > first) {
  //     second = first
  //     first = arr[i]
  //   }
  //   else if (arr[i] > second) {
  //     second = arr[i]
  //   }
  // }

  // return second
  // let arr = [2, 5, 4, 3, 12, 11, 89, 12, 67, 32, 12, 43, 23, 76];

  let first = -1;
  let second = -1;

  for(let i=0; i< arr.length; i++)
  {
      if(arr[i] > first)
      {
          second=first
          first=arr[i]
      }
      else if(arr[i] > second)
      {
        second=arr[i]
      }
  }

  return second


};

// const result = HighestSecondEelement(arr)
// console.log(result, "result");

// const result = HighestSecondEelement(arr);
// console.log("The second highest value in array is", result);

// const nHighest = (arr, n) => {
//   // if(n > 0 && arr.length >= n)
//   // {
//   //     const sortedArray=arr.sort((a,b)=>b-a)
//   //     console.log(sortedArray);

//   //     return sortedArray[n-1]
//   // }

//   if (n > 0 && arr.length > n) {
//     const sortArr = arr.sort((a, b) => a - b);
//     console.log(sortArr);
//     return sortArr[sortArr.length - n]
//   }
// }


const nHighest=(arr,n)=>{
    if(n > 0 && arr.length > n)
    {
        let sortArr=arr.sort((a,b)=>a-b);
        console.log(sortArr);
        console.log(sortArr[sortArr.length - n]);
        
        
    }
}

const result = nHighest(arr, 4)
console.log('The nth highest value in array is', result);
