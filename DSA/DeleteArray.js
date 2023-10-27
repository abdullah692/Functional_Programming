const deleteArray=(arr,target)=>{
    // let index=2;
    // console.log(arr);
    // for(let i=index ; i <= arr.length - 1 ; i++)
    // {
    //     arr[i]=arr[i+1]
    // }
    // arr.length=arr.length-1;
    // console.log(arr);

    const index=arr.indexOf(target)
    if (index !== -1) {

    for (let i=index ; i < arr.length -1 ; i++ )
    {
        if(arr[i] == target)
        {
            // arr[i]=arr[i+1]
            arr.splice(index,1)
        }
    }
    // arr.length = arr.length - 1;
   console.log(arr);
}
}
let arr = [2, 5, 78, 3, 20, 45, 67, 54, 32];
deleteArray(arr,67)

