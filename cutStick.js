const cutStick = (arr) => {
    // let stickOut = []
    // let count = 0;

    // while (arr.some((v)=> v > 0)) {
    //     let minVal = Math.min(...arr.filter((v)=> v> 0))
    //     console.log(minVal);
    //     count=0

    //     for(let i=0; i < arr.length; i++)
    //     {
    //         if(arr[i] - minVal >= 0)
    //         {

    //             arr[i]=arr[i] - minVal
    //             count++
    //         }
    //     }
    //     console.log(arr,"arr");
    //     stickOut.push(count)

    // }
    // return stickOut

    // let stick = []

    // while (arr.some((v) => v > 0)) {
    //     let minVal = Math.min(...arr.filter((v) => v > 0))
    //     let count = 0;
    //     for(let i=0 ;i< arr.length; i++)
    //     {
    //         if(arr[i] - minVal >= 0)
    //         {
    //             arr[i]=arr[i] - minVal
    //             count++
    //         }
    //     }

    //     stick.push(count)


    // }
    // return stick

    let stick=[]

    while(arr.some((v)=> v > 0))
    {
        let count=0
        let minVal= Math.min(...arr.filter((v) => v > 0))

        for(let i=0; i< arr.length; i++)
        {
            
            if(arr[i] - minVal >= 0)
            {
                arr[i] = arr[i] - minVal
                count++
                
            }
        }
        console.log(arr); 
        stick.push(count)
    }

    return stick
}

let arr = [1, 2, 3, 4, 3, 3, 2, 1]
// let arr = [5, 4, 4, 2, 2, 8]

const result = cutStick(arr)
console.log(result, "result");
