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
    let nonZeorIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            let temp = arr[nonZeorIndex]
            arr[nonZeorIndex] = arr[i]
            arr[i] = temp
            nonZeorIndex++;
        }
    }
    return arr;
}

const arr = [2, 4, 0, 12, 14, 0, 6, 0, 0.0, 4, 5, 8, 0]
const result = moveZeroToEnd(arr);
console.log(result);
