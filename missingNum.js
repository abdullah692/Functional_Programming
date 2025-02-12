let arr = [2, 3, 4, 5, 6, 7, 9, 12, 14]

const missingNum = (arr) => {
    // for(let i=0 ;i<arr.length ;i++)
    // {
    //     if(arr[i +1] !== arr[i]+1)
    //     {
    //         return arr[i]+1
    //     }
    // }
    // return null;
    let missingNum = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] != arr[i] + 1) {
            missingNum.push(arr[i] + 1)
        }
    }
    return missingNum

}

const result = missingNum(arr)
console.log(result);