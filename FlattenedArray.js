
const FLattenedArray = (arr) => {
    const value = arr.flat(2);
    console.log(value);
}

let arr = [1, [2, 3], [4, [5]]]
FLattenedArray(arr);


function flattenArray(arr) {
    //     let result = [];
    //     let stack = [arr];
    //   debugger
    //     while (stack.length) {
    //       let current = stack.shift();
    //       console.log(current,"currents")// Take the first element
    //       if (Array.isArray(current)) {
    //         stack.unshift(...current); // Flatten step-by-step
    //       } else {
    //         result.push(current);
    //       }
    //     }
    //     return result;

  let result=[]
  while(arr.length)
  {

    let current=arr.shift()
    console.log(current,"current");
    
    if(Array.isArray(current))
    {
        console.log(arr,"before");
        arr.unshift(...current)
        console.log(arr);
        
    }
    else{
        result.push(current)
    }
  }

  return result
}

console.log(flattenArray([1, [2, [3, [4]], 5]])); // Expected Output: [1, 2, 3, 4, 5]
