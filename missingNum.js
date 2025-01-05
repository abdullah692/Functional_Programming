let arr=[1,2,3,4,5,6,7,9,12,14]

const missingNum=(arr)=>{
    // for(let i=0 ;i<arr.length ;i++)
    // {
    //     if(arr[i +1] !== arr[i]+1)
    //     {
    //         return arr[i]+1
    //     }
    // }
    // return null;
    for(let i=0 ; i< arr.length ;i++)
    {
        if(arr[i+1] != arr[i]+1)
        {
            console.log("Missing nos is:",arr[i] +1);
            
        }
    }
    return null
   
    
}

const result=missingNum(arr)
console.log(result);