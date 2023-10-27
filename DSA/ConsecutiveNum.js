// const consecutiveSum = (arr) => {
//   let sum = [];
//   for (let i = 0; i <= arr.length - 4; i++) {
//     const add = arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3];
//     sum[i] = add;
//   }
//   console.log(sum);

//   let max = sum[0];
//   for (let j = 0; j < sum.length; j++) {
//     if (sum[j] > max) {
//       max = sum[j];
//     }
//   }
//   console.log("Maximum number is ", max);
// };

const consecutiveSum = (arr) => {
   let sum=[]
   for(let i=0 ; i<arr.length -3 ; i++)
   {
        let add=arr[i] + arr[i+1] +arr[i+2]
        sum[i]=add;
   }
   console.log(sum);

   let highest=0
   for(let i=0 ;i < sum.length ;i++)
   {
        if(sum[i] > highest)
        {
            highest=sum[i]
        }
   }
   return highest
};

let arr = [2, 5, 78, 3, 20, 45, 67, 54, 32];
const result = consecutiveSum(arr);
console.log(result,"Max value");
