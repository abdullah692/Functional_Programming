const arr=[1,4,6,2,5,-2,6,4,12,11,15]

const ArrLength=(arr , i=0)=>{
    let  ArrLenCount =0;
     while(arr[i] != undefined)
     {
          ArrLenCount++;
          i++
     }
     return ArrLenCount
}

const reverseArr=(arr)=>{
     let revArr=[]
     for(let i=arr.length-1 ; i>=0 ;i--)
     {
          revArr.push(arr[i])
     }
     return revArr
}

// const ArrLength=(arr, i=0) => 
// {
//     // let counter=0;
//     // while(arr[i] != undefined)
//     // {
//     //     counter ++;
//     //     i++
//     // }
//     // return counter;

//    let counter=0;
//    while(arr[i] !== undefined)
//    {
//      counter++;
//      i++;
//    }
//    return counter;
// }

// const ArrLength=(arr,i=0)=>{

//      if(i == arr.length)
//      {
//           return 0;
//      }

//      return 1 + ArrLength(arr, i+1)
// }
const result=reverseArr(arr)
console.log(result);
