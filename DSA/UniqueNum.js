// const uniqueNum = (arr) => {
//   let check = [];
//   debugger;
//   for (let i = 0; i < arr.length; i++) {
//       let isDuplicate = false;
//     for (let j = 0; j < check.length ; j++) {
//             if(arr[i] === check[j])
//             {
//                 isDuplicate=true
//                 break;
//             }
//     }

//     if (!isDuplicate) {
//         check.push(arr[i]);
//     }
//   }

//   console.log(check);
// };



const uniqueNum =(arr)=>{
    let uniqueNum=[]

    // for(let i=0 ; i< arr.length ; i++)
    // {
    //   if(!uniqueNum.includes(arr[i]))
    //   {
    //     uniqueNum.push(arr[i])
    //   }
    // }
    // return uniqueNum;

   for(let i=0 ; i< arr.length ;i++)
   {
        if(!uniqueNum.includes(arr[i]))
        {
            uniqueNum.push(arr[i])
        }
   }
   return uniqueNum;
}

let arr = [2, 4, 4, 1, 1, 2, 3, 4, 3, 6, 8, 9, 5, 5, 9];
const result = uniqueNum(arr);
console.log(result);


