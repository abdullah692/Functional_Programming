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



// const uniqueNum =(arr)=>{
//     let uniqueNum=[]

// for(let i=0 ; i< arr.length ; i++)
// {
//   if(!uniqueNum.includes(arr[i]))
//   {
//     uniqueNum.push(arr[i])
//   }
// }
// return uniqueNum;
//     for(let i=0 ;i<arr.length ;i++)
//     {
//         if(!uniqueNum.includes(arr[i]))
//         {
//             uniqueNum.push(arr[i])
//         }
//     }
//     return uniqueNum

// }



// let arr = [2, 4, 4, 1, 1, 2, 3, 4, 3, 6, 8, 9, 5, 5, 9];
// const result = uniqueNum(arr);
// console.log(result);





const findUniques=(arr1)=>{
    // let obj={}
    // for(let val of arr1)
    // {
    //     obj[val]=(obj[val] || 0)+1
    // }
    // return Object.keys(obj)
    // .filter(key => obj[key] === 1)
    // .map(Number); 

    // let obj={}
    // for(let val of arr1)
    // {
    //   obj[val]=(obj[val] || 0)+1
    // }

    // return Object.keys(obj).filter((val) => obj[val] == 1)


//     let obj={}

//     for(let val of arr1)
//     {
//       if(!obj[val])
//       {
//         obj[val] = (obj[val] || 0) + 1
//       }
//       else{
//         obj[val] ++
//       }
//     }
// console.log(obj);

// return Object.keys(obj).filter((key)=> obj[key] == 1)

let uniqueArr=[]

for(let val of arr1)
{
  if(!uniqueArr.includes(val))
  {
    uniqueArr.push(val)
  }
}

console.log(uniqueArr);

}


// const findUniques = (arr) => {
//     // let obj={}
//     // for(let val of arr)
//     // {
//     //     obj[val]=(obj[val] || 0)+1
//     // }
//     // console.log(obj);
//     // return Object.keys(obj).filter(value => obj[value] == 1).map(Number)
    
//   return  [... new Set(arr)]
// }
let arr1 = [2, 4, 1, 1, 2, 3, 4, 3, 6, 8, 5, 5, 9];

const result = findUniques(arr1);
console.log(result);

