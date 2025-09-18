const arr =
    [[4, 3, 2, -1],
    [3, 2, 1, -2],
    [1, 1, -1, -3],
    [-1, 2, -3, -4]]


//Basic method
const countNegative = (arr) => {
    // let count=0;
    // for(let i=0 ;i< arr.length; i++)
    // {
    //     for(j=0 ; j<arr.length; j++)
    //     {
    //         if(arr[i][j] < 0)
    //         {
    //             count++
    //         }
    //     }
    // }

    //     let count=0
    //     for(let i=0; i< arr.length; i++)
    //     {
    //         for(let j=0; j< arr.length; j++)
    //         {
    //             if(arr[i][j] < 0)
    //             {
    //                 count++
    //             }
    //         }
    //     }
    // return count

    // return arr.flat().filter((val) => val < 0).length
    // return count

    // let count=0;
    // for(let i=0 ;i<arr.length; i++)
    // {
    //     for(let j=0 ; j< arr.length;j++)
    //     {
    //         if(arr[i][j] < 0)
    //         {
    //             count++
    //         }
    //     }
    // }
    // return count
    // return arr.flat().filter(val => val < 0).length
    // return arr.flat().filter(val => val < 0).length
}

//Flat method

// const countNegative=(arr)=>{
//     // return arr.flat().filter(val => val < 0).length   

//     return arr.reduce((total,row)=> total+ row.filter(num => num <0).length ,0)

// }

const result = countNegative(arr)
console.log(result);


const transposeMatrix = (matrix) => {
    // debugger
    // let result = [];
    // console.log(matrix[0]);

    // for (let i = 0; i < matrix[0].length; i++) {
    //     let row = [];
    //     for (let j = 0; j < matrix.length; j++) {
    //         row.push(matrix[j][i]);
    //         // console.log(matrix[j],"j");

    //     }
    //     console.log(row);

    //     // result.push(row);
    // }

    // // return result;

    // let result = []
    // for (let i = 0; i < matrix.length; i++) {
    //     let row = []

    //     for (let j = 0; j < matrix[i].length; j++) {
    //         console.log(matrix[j][i]);
    //         row.push(matrix[j][i])

    //     }
    //     result.push(row)

    // }
    // return result

    // let result = []
    // for (let i = 0; i < matrix[0].length; i++)
    // {
    //     result.push(matrix.map((val)=> val[i]))
    // }

    // return result

    let result = []

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix.map((val)=> val[i]));
        result.push(matrix.map((val)=> val[i]))
        
    }
    return result


};

// Example usage:
console.log(transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
// Output:
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]
