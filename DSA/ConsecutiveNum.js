const consecutiveSum = (arr) => {
    //   let sum=[]
    //   for(let i=0 ;i< arr.length -3 ;i++)
    //   {
    //      sum[i]=arr[i]+arr[i+1]+arr[i+2]
    //   }
    //   console.log("sum",sum);
    //   let maxSum=sum[0]
    //   for(let j=0; j< sum.length ;j++)
    //   {
    //      if(maxSum < sum[j])
    //      {
    //           maxSum=sum[j]
    //      }
    //   }
    //   return maxSum


    // let arr1 = []
    // let sum=0
    // for (let i = 0; i < arr.length-3; i++) {
    //     sum+=arr[i]+arr[i+1]+arr[i+2]
    //     console.log(sum);
        
    //     arr1.push(sum)
    // }

    // console.log(arr1);
    
    // return Math.max(...arr1)
let sum=0
let arr1=[]
let maxSum=0

for(let i=0 ;i< arr.length-3; i++)
{
    sum+=arr[i]+arr[i+1] + arr[i+2]
    arr1.push(sum)
    if(sum > maxSum)
    {
        maxSum=sum
    }
}

return {arr1,maxSum}
};

// const consecutiveSum = (arr) => {
//   let sum=[];
//   for(let i=0 ; i<arr.length-3 ;i++)
//      {
//           let add=arr[i] + arr[i+1] + arr[i+2]
//           sum[i]=add
//      }
//      console.log(sum);

//      let highest=-1;
//      for(let i=0 ; i<sum.length ;i++)
// {
//      if(sum[i] > highest)
//      {
//           highest=sum[i]
//      }
// }
// return highest
// };

let arr = [2, 5, 45, 3, 20, 67, 78, 54, 32];
const result = consecutiveSum(arr);
console.log(result, "Max value");
