const deleteArray=(arr,target)=>{
    // let index=2;
    // console.log(arr);
    // for(let i=index ; i <= arr.length - 1 ; i++)
    // {
    //     arr[i]=arr[i+1]
    // }
    // arr.length=arr.length-1;
    // console.log(arr);

    // const index=arr.indexOf(target)
    // if (index !== -1) {

    // for (let i=index ; i < arr.length -1 ; i++ )
    // {
    //     if(arr[i] == target)
    //     {
            
    //         arr.splice(index,1)
    //     }
    // }


//     const index=arr.indexOf(target);
//     if(index != -1)
//     {
//         for(let i=index ; i< arr.length ;i++)
//         {
//             if(arr[i] == target)
//             {
//                 arr.splice(index ,1)
//             }
//         }
//     }
//     // arr.length = arr.length - 1;
//    console.log(arr);


//splice method


    // let index=arr.indexOf(target)
    // console.log(index);
    // arr.splice(index,1)
    // return arr




    //loop  method

    let index=arr.indexOf(target)

    // arr.splice(index,1)
    for(let i=index ;i<arr.length ;i++)
    {
        arr[i]=arr[i+1]
    }
    arr.pop()
    return arr
}

let arr = [2, 5, 78, 3, 20, 45, 67, 54, 32];
const result=deleteArray(arr,67)
console.log(result);


