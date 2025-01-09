// const consecutiveSum = (arr,k) => {
//     let start=0 , windowSum=0 ,maxSum=0 ,startIndex;

//     for(let i=0 ; i< arr.length ;i++)
//     {
//         windowSum+=arr[i]
//         if(i >= k-1)
//         {
//             if(maxSum < windowSum)
//             {
//                 maxSum=Math.max(maxSum,windowSum);
//                 console.log(start,"Start");
//                 startIndex=start
//             }
//             windowSum-=arr[start]
//             start++
//         }
//     }
//     return arr.slice(startIndex,startIndex+3)
// }


const consecutiveSum = (arr, k) => {
    let start = 0, windowSum = 0, maxSum = 0

    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i]
        if (i >= k - 1) {

            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[start]
            start++
        }
    }
    return `maxSum is ${maxSum}`
}


console.log(consecutiveSum([2, 1, 5, 1, 3, 2], 3));

