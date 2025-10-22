//Traverse Array

// const traverseArray=(arr)=>{
//     for(let i=0 ; i<=arr.length -1 ; i++)
//     {
//         console.log('Value is', arr[i]);
//     }
// }

// let arr=[2,5,78,3,20,45,67,54,32]
// traverseArray(arr);

//Insert Value in array

// const insertArray = (arr) => {
//   let newVal = 69;
//   let index =0 ;
//   console.log(arr);

//   for (let i = arr.length - 1; i >= index ; i--) {

//     if(i>=index)
//     {
//         arr[i+1]=arr[i];
//         if(i == index)
//         {
//             arr[index]=newVal
//         }
//     }
//   }
//   console.log(arr);
// };

const insertArray = (arr) => {
  // let val = 100;
  // let index = 4;
  // for (let i = arr.length; i > index; i--) {
  //   arr[i] = arr[i - 1]
  // }
  // arr[index] = val
  // console.log(arr);

  //   let val = 100
  //   let index = 5

  // debugger
  //   for(let i=arr.length-1 ; i >= index ;i--)
  //   {
  //       arr[i+1]=arr[i] 
  //       if(i == index)
  //       {
  //         arr[i]=val
  //       }
  //   }

  //   return arr

  // let arr = [2, 5, 78, 3, 20, 45, 67, 54, 32];


  let val = 101;
  let index = 4;

  // for(let i=arr.length -1 ; i >= index; i--)
  // {
  //   arr[i+1]=arr[i]
  //   if(i == index)
  //   {
  //     arr[i]=val
  //   }

  // }

  // for(let i=arr.length -1 ; i>= index ; i--)
  // {
  //    arr[i+1]=arr[i]
  //    if(i == index)
  //    {
  //       arr[i]=val
  //    }
  // }
  arr.splice(index,0,val)

  return arr

  // for (let i = arr.length; i > index; i--) {
  //   arr[i] = arr[i - 1]
  // }
  // arr[index] = val
  // console.log(arr);

  // for(let i=arr.length; i>index; i--)
  // {
  //     arr[i]=arr[i-1]
  // }
  // arr[index]=val

  // console.log(arr);



  //   let value=arr.splice(index,0,100)
  //  console.log(arr) 



}

let arr = [2, 5, 78, 3, 20, 45, 67, 54, 32];
const result = insertArray(arr);
console.log(result);


let fruits = ["Apple", "Banana", "Cherry", "Date"];
let arr1 = [2, 5, 78, 3, 20, 45, 67, 54, 32];
arr1.splice(6,1)
fruits.splice(1,2)

console.log(fruits);
console.log(arr1);

