const exampleMatrix = [
  // [1, 2, 3], [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
  // [4, 5, 6],
  // [7, 8, 9]
];


const matrix = (arr) => {

  // let leftDiagonal = 0;
  // let rightDiagonal = 0;
  // let numCols=arr[0].length || 0;

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     if (i == j) {
  //       leftDiagonal += arr[i][j]
  //     }
  //     if(i+j == numCols-1)
  //     {
  //       rightDiagonal+=arr[i][j]
  //     }
  //   }
  // }

  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonal+=arr[i][i]
    rightDiagonal+=arr[i][arr.length - 1 - i]
  }


  console.log("leftDiagonal", leftDiagonal);
  console.log("rightDiagonal", rightDiagonal);


  // let leftDiagonal=0; 
  // let rightDiagonal=0;
  // let numCols=arr[0].length || 0
  // console.log(arr[0]);

  // for(let i=0 ; i< arr.length ;i++)
  // {
  //   for(let j=0 ; j< arr.length ;j++)
  //   {
  //       if(i == j)
  //       {
  //         leftDiagonal+=arr[i][j]
  //       }

  //       if(i + j == numCols -1)
  //       {
  //         rightDiagonal+= arr[i][j]
  //       }
  //   }
  // }

  // return [leftDiagonal,rightDiagonal]
  // let leftDiagonal=0
  // let rightDiagonal=0
  // let numCols=arr[0].length || 0
  // for(let i=0 ;i<arr.length; i++)
  // {
  //   for(let j=0 ;j< arr.length; j++)
  //   {
  //       if(i == j)
  //       {
  //         leftDiagonal+=arr[i][j]
  //       }
  //       if(i+j == numCols-1)
  //       {
  //         rightDiagonal+=arr[i][j]
  //       }
  //   }
  // }

  // return {leftDiagonal , rightDiagonal}

  // let leftDiagonal = 0;
  // let rightDiagonal = 0;
  // let numCols = arr[0].length || 0
  // console.log(numCols, "numCols");


  // for (let i = 0; i < arr.length; i++)
  //   for (let j = 0; j < arr[i].length; j++) {
  //     if (i == j) {
  //       leftDiagonal += arr[i][j]
  //     }
  //     if (i + j == numCols - 1) {
  //       rightDiagonal += arr[i][j]
  //     }
  //   }

  // console.log(leftDiagonal, "leftDiagonal");
  // console.log(rightDiagonal, "rightDiagonal");


  // let leftDiagonal=0;
  // let rightDiagonal=0;

  // for(let i=0 ; i< arr.length; i++)
  // {
  //   // debugger
  //   console.log(arr[i]);
  //   leftDiagonal+=arr[i][i]
  //   rightDiagonal+=arr[i][arr.length - 1 -i]

  // }
  // console.log(leftDiagonal,"leftDiagonal");
  // console.log(rightDiagonal,"rightDiagonal");



}


//With one loop

//  const matrix=(arr)=>{

//   let leftDiagonal=0; 
//   let rightDiagonal=0;
//   // console.log(arr[0]);

//   // for(let i=0 ; i< arr.length ;i++)
//   // {
//   //   leftDiagonal+=arr[i][i]
//   //   rightDiagonal+=arr[i][arr.length -1 -i]

//   // }  
//   // return [leftDiagonal,rightDiagonal]

//   for(let i=0 ; i<arr.length ; i++)
//   {
//       leftDiagonal+=arr[i][i]
//       rightDiagonal+=arr[i][arr.length -1 -i]
//   }
//   return [rightDiagonal,leftDiagonal]


//  }


// const matrix=(arr)=>{
//   let leftDiagonal=0
//   let rightDiagonal=0

//   for(let i=0 ;i< arr.length ;i++)
//   {
//     leftDiagonal+=arr[i][i]
//     rightDiagonal+=arr[i][arr.length -1 -i]
//   }

//   return {leftDiagonal,rightDiagonal}
// }












const exampleMatrix4x4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
// const matrix=(arr)=>{
//     // let leftDiagonal=0;
//     // let rightDiagonal=0;
//     // const numCols = arr[0]?.length || 0;
//     // let diff=0;
//     // console.log(numCols,"ssssssssss");

//     // for(let i=0 ; i<arr.length ;i++)
//     // {
//     //     console.log("i",i)
//     //     for(let j=0; j< arr.length ;j++)
//     //     {
//     //         console.log("j",j);
//     //         if(i === j)
//     //         {
//     //             leftDiagonal+=arr[i][j]
//     //         }

//     //         if(i +j == numCols -1 )
//     //         {
//     //             console.log(arr[i][j]);
//     //             rightDiagonal+=arr[i][j]
//     //         }
//     //     }
//     // }

//     // diff=Math.abs(leftDiagonal - rightDiagonal);
//     // console.log("diff is",diff);
//     // return {leftDiagonal , rightDiagonal}

//     // let leftDiagonal=0;
//     // let rightDiagonal=0;
//     // let numCols=arr[0]?.length || 0;
//     // let numRows=arr.length;

//     //  if(numRows != numCols)
//     //  {
//     //     return "Invalid no of rows and columns"
//     //  }

//     // for(let i=0 ;i<arr.length ;i++)
//     // {
//     //     for(let j=0 ; j<arr[i].length ;j++)
//     // {
//     //     if( i == j)
//     //     {
//     //         leftDiagonal+=arr[i][j]
//     //     }
//     //     if(i +j == numCols -1)
//     //     {
//     //         rightDiagonal+=arr[i][j]
//     //     }
//     // }
//     // }
//     // console.log("leftDiagonal",leftDiagonal);
//     // console.log("rightDiagonal",rightDiagonal);

//   //  let leftDiagonal=0;
//   //  let rightDiagonal=0;

//   //  for(let i=0; i< arr.length ;i++)
//   //  {
//   //   // debugger
//   //       leftDiagonal+=arr[i][i]
//   //       rightDiagonal+=arr[i][arr.length-1-i]
//   //  }
//   //   return {leftDiagonal,rightDiagonal}


//   let leftDiagonal=0;
//   let rightDiagonal=0;

//   for(let i=0 ; i<arr.length ;i++)
//   {
//       leftDiagonal+=arr[i][i]
//       rightDiagonal+=arr[i][arr.length-1-i]
//   }

//   return {leftDiagonal,rightDiagonal}
// }

const result = matrix(exampleMatrix)
console.log(result); 