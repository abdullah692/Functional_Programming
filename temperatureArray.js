let arr = [73, 74, 75, 71, 69, 72, 76, 73]

const temperatureCheck = (arr) => {

   
    let temp=[]
    for(let i=0 ;i< arr.length; i++)
    {
        let count=0;
        let found=false
        for(let j=i+1; j< arr.length; j++)
        {
            count++;
            if(arr[i] < arr[j])
            {
                temp.push(count)
                found=true
                break;
            }
        }

        if(!found)
        {
            temp.push(0)
        }
    }

    return temp;
    
    // let temp = []


    // for (let i = 0; i < arr.length; i++) {
    //     let count = 0;
    //     let found = false
    //     for (let j = i + 1; j < arr.length; j++) {
    //         count++
    //         if (arr[i] <= arr[j]) {
    //             temp.push(count)
    //             found = true
    //             break;
    //         }
    //     }

    //     if (!found) {
    //         temp.push(0)
    //     }
    // }


    // console.log(temp);

    // let temp = []

    // for (let i = 0; i < arr.length; i++) {
    //     let count = 0
    //     let found=false;

    //     for (let j =i+1; j < arr.length; j++) {
    //         // debugger
    //         count++
    //         if (arr[i] < arr[j]) {
    //             temp.push(count)
    //             found=true;
    //             break;
    //         }
    //     }

    //     if(!found)
    //     {
    //         temp.push(0)
    //     }
    // }
    // return temp


    // let temp=[]

    // for(let i=0; i< arr.length; i++)
    // {
    //     let count=0;
    //     let found=false
    //     for(let j=i+1; j< arr.length; j++)
    //     {
    //         count++
    //         if(arr[i] < arr[j])
    //         {
    //             temp.push(count)
    //             found=true
    //             break
    //         }
    //     }

    //     if(!found)
    //     {
    //         temp.push(0)
    //     }
    // }

    // return temp

}


let result = temperatureCheck(arr)
console.log(result);
