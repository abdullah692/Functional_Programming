const arr = [
    ["b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b"],
    ["b", "b", "w", "w", "w"],
    ["b", "b", "w", "w", "w"],
    ["b", "b", "w", "w", "w"],
]

const Check = (arr) => {
    let top = 0;
    let height = 0;
    let left = 0;
    let width = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //             if(arr[i][j] == "w")
    //             {
    //                 if(top== 0 && left == 0)
    //                 {
    //                     top=i
    //                     left=j
    //                 }
    //                 height=i-top+1
    //                 width=j-left+1
    //             }
    //     }
    // }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == "w") {
                if (top == 0 && left == 0) {
                    top = i
                    left = j
                }

                height = i - top + 1
                width = j - left + 1
            }
        }
    }



    // for(let i=0 ; i<arr.length ;i++)
    // {
    //     for(let j=0 ; j< arr[i].length ; j++)
    //     {

    //         if(arr[i][j] == "w")
    //         {

    //             if(top == 0 && left == 0)
    //             {
    //                 top=i;
    //                 left=j
    //             }

    //             console.log(i , j);
    //             height=i - top +1;
    //             width=j-left +1

    //         }
    //     }
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     console.log("i", i, "val" + arr[i])

    //     for (let j = 0; j < arr[i].length; j++) {
    //         if (arr[i][j] == "w") {
    //             console.log(arr[i][j]);
    //             if (top == 0 && left == 0) {

    //                 top = i;
    //                 left = j;
    //             }
    //             console.log("top", top, "i", i);
    //             height = i - top +1;
    //             width=j -left +1;
    //         }

    //     }
    // }


    //    for(let i=0 ;i<arr.length;i++)
    //    {
    //     for(let j=0; j<arr[i].length;j++)
    //     {
    //         if(arr[i][j] == "w")
    //         {
    //             if(top==0 && left==0)
    //             {
    //                 top=i;
    //                 left=j
    //             }

    //             height=i-top+1
    //             width=j-left+1
    //         }
    //     }


    //    }

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         if (arr[i][j] == "w") {
    //             if (top == 0) {
    //                 top = i;
    //                 left = j;
    //             }
    //             height = i-top +1;
    //             width= j-left +1;
    //             console.log(i, "i");
    //             console.log(j, "j");
    //         }
    //     }
    // }
    console.log(top + "top", left + "left");
    console.log(height + "height", width + "width");
}

const result = Check(arr)
console.log(result);