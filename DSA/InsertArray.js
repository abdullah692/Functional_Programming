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

  let val = 100
  let index = 3

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
    
    let value=arr.splice(index,0,100)
   console.log(arr) 
}

let arr = [2, 5, 78, 3, 20, 45, 67, 54, 32];
insertArray(arr);
