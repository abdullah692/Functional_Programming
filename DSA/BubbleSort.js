const arr = [5, 3, -6, 12, 9, 43, 25]


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
    do {
        debugger
        swap = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let next = arr[i];
                arr[i] = arr[i + 1]
                arr[i + 1] = next;
                swap = true
            }
        }
        console.log(swap);
        
    }
    while (swap)
    return arr
    
}

const result = BubbleSort(arr)
console.log(result);