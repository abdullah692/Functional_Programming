// const SearchArray = (arr) => {
//   let searchVal=32;
//   for(let i=0 ; i<=arr.length-1 ; i++)
//   {
//         if(arr[i] === searchVal)
//         {
//             console.log(`The value ${searchVal} is at position ${i + 1}`);
//             break;
//         }
//   }
// };

// let arr = [2, 5, 78, 3, 20, 45, 67, 54, 32];
// SearchArray(arr);

//Merge Array

const mergeArray = (arr, arr1, arr2) => {
  // for (let i = 0; i < arr.length; i++) {
  //   arr2[i] = arr[i];
  // }
  // console.log(arr2);
  // console.log(arr.length);
  // for (let i = 0; i < arr1.length; i++) {
  //   console.log(i);
  //   arr2[arr.length + i] = arr1[i];
  // }
  // console.log(arr2);

  arr2=[...arr, ...arr1]
  console.log(arr2);
  
};

let arr = [2, 5, 78, 3, 20, 45, 67, 54, 32];
let arr1 = [100, 9,21, 35, 23];
let arr2 = [];
mergeArray(arr, arr1, arr2);
