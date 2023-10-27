
const FLattenedArray=(arr)=>{
    const value=arr.flat(2);
    console.log(value);
}

let arr=[1, [2, 3], [4, [5]]]
FLattenedArray(arr);