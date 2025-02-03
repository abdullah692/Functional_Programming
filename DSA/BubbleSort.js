const arr = [5, 3, -6, 12,15, 9, 43, 25]

const sortArr=(arr)=>{
    for(let i=0 ; i< arr.length ;i++)
    {
        for(let j=i+1 ; j<arr.length ; j++)
        {
            if(arr[i] > arr[j])
            {
                let val=arr[i]
                arr[i]=arr[j]
                arr[j]=val
            }
        }
    }

    return arr
    
}
const BubbleSort = (arr) => {
    // let swap;
    // do{
    //     swap=false;
    //    for(let i=0 ; i<arr.length ;i++)
    //    {
    //         if(arr[i] > arr[i+1])
    //         {
    //             let next;
    //             next=arr[i];
    //             arr[i]=arr[i+1];
    //             arr[i+1]=next;
    //             swap=true
    //         }
    //    }
    // }
    // while(swap);

    // return arr;


    let swap;
    do{
        swap=false
        for(let i=0 ; i<arr.length ; i++)
        {
            if(arr[i] > arr[i+1])
            {
                let next=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=next
                swap=true
            }
            console.log(arr,"Arr");
            
        }
        console.log(swap);
        
    }
    while(swap)

        return arr
}

const result = BubbleSort(arr)
console.log(result);