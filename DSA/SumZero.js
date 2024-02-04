
// const SumZero=(arr)=>{
//     console.log(arr);


//     for(let num of sortArr)
//     {
//         for(let i=1; i<sortArr.length ; i++)
//         {
//             console.log(num);
//             console.log(arr[i]);
//             if(num + arr[i] === 0)
//             {
//                 return [num,arr[i]]
//             }
//         }
//     }
//     const sortArr=arr.sort((a,b)=>a-b)
//     console.log(sortArr);

//     for(let val of sortArr)
//     {
//         for(let i=1 ; i < sortArr.length ; i++)
//         {
//             if(val + sortArr[i] == 0)
//             {
//                 return [val,sortArr[i]]
//             }
//         }
//     }
//     return "No value exists in array which sum is equal to zero"
// }

// let arr = [2, 5, 78, 3, 20, 45, 67, 54, 32,-78];
// const result=SumZero(arr)
// console.log(result);



// const SumZero=(arr)=>{
//     let left=0;
//     let right=arr.length -1;
//     const sortArr=arr.sort((a,b)=>a-b)

//     while(left < right)
//     {
//         let sum=arr[left] + arr[right];
//         if(sum === 23)
//         {
//             return [arr[left],arr[right]]
//         }
//         else if(sum > 23)
//         {
//             right--
//         }
//         else{
//             left++;
//         }
//     }

// }


// let arr = [2, 5, 78, 3, 20, 45, 67, 54, 32,-78];
// const result=SumZero(arr)
// console.log(result);



const SumZero=(arr,target)=>{
    for(let i=0 ;i< arr.length ;i++)
    {
        for(let j=i+1 ; j< arr.length ;j++)
        {
            if(arr[i] + arr[j] == target)
            {
                return [arr[i] ,arr[j] , i,j]
            }
        }
    }
    return -1;
}


const arr=[2,4,6,5,10,7,2]
const result=SumZero(arr,15)
console.log(result);


