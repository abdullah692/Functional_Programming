const moveZeroToEnd = (arr) => {
    // let zeroIndex = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] != 0) {
    //         if (i != zeroIndex) {
    //             let temp = arr[i];
    //             arr[i] = arr[zeroIndex];
    //             arr[zeroIndex] = temp
    //         }
    //         zeroIndex++;
    //     }
    // }
    // return arr
    // let nonZeorIndex = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] != 0) {
    //         let temp = arr[nonZeorIndex]
    //         arr[nonZeorIndex] = arr[i]
    //         arr[i] = temp
    //         nonZeorIndex++;
    //     }
    // }
    // return arr;

    //ONeloop

    // for(let i=0 ; i< arr.length ; i++)
    // {
    //     if(arr[i] !=0)
    //     {
    //         let temp=arr[nonZeorIndex]
    //         arr[nonZeorIndex]=arr[i]
    //         arr[i]=temp
    //         nonZeorIndex++
    //     }
    // }
    // return arr


    //Move zero to right

    // let nonZeorIndex = 0;
    // for (let i=0 ;i< arr.length; i++)
    //  {
    //      if(arr[i] == 0)
    //      {
    //          let temp=arr[nonZeorIndex]
    //          arr[nonZeorIndex]=arr[i]
    //          arr[i]=temp
    //          nonZeorIndex++
    //      }
    //  } 
    //  return arr

    let nonZeorIndex=0;
    for(let i=0 ;i < arr.length ;i++)
    {
        if(arr[i] !=0)
        {
            let temp=arr[nonZeorIndex]
            arr[nonZeorIndex]=arr[i]
            arr[i]=temp
            nonZeorIndex++
        }
    }
    return arr


    //With two loops

    // let nonZeorIndex = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     // debugger
    //     if (arr[i] != 0) {
    //         arr[nonZeorIndex]=arr[i]
    //         nonZeorIndex++
    //     }
    // }

    // console.log(nonZeorIndex);
    // for(let i=nonZeorIndex ; i< arr.length ; i++)
    // {
    //     arr[i]=0
    // }
    // return arr


}

const arr = [0, 0, 2, 4, 0, 12, 14, 0, 6, 0, 0, 4, 5, 8, 0]
const result = moveZeroToEnd(arr);
console.log(result, 'result');
