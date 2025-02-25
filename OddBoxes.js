// const findOddBox = (boxes) => {
//     let count = {}
//     let maxCount = 0;
//     let majorityKey = null
//     for (let box of boxes) {
//         const key = `${box.type}-${box.color}-${box.weight}`
//         count[key] = (count[key] || 0) + 1
//     }
//     console.log(count);
//     for (let val in count) {
//         if (count[val] > maxCount) {
//             maxCount = count[val]
//             majorityKey = val 
//         } 
//     }
//     // console.log(maxCount, "maxCOunt", majorityKey);


//     //For key value
//     const oddBoxes = boxes.filter((val) => {
//         const key = `${val.type}-${val.color}-${val.weight}`
//         return majorityKey != key
//     })

//     const oddBoxesVal = Object.entries(count).filter(([key, value]) => value !== maxCount);
//     const oddBoxesKeys = Object.keys(count).filter((key) => count[key] !== maxCount);


//     // console.log(Object.entries(count), "enties");
//     // console.log(Object.keys(count), "keys");


//     // console.log(oddBoxes, "oddBoxes");


//     console.log(oddBoxesVal, "oddBoxesKeys");



// }

//Practice


// const findOddBox=(boxes)=>{
//     let count=0;
//     let obj={}
//     let maxCount=0;

//     for(let val of boxes)
//     {
//         let key=`${val.type}-${val.color}-${val.weight}`
//         obj[key]=(obj[key] || 0)+1
//     }

//     console.log(obj);

//     for(let val in obj)
//     {
//         if(obj[val] > maxCount)
//         {
//             maxCount=obj[val]
//         }
//     }

//     console.log(Object.values(obj));

//     let maxValue=Math.max(...Object.values(obj))
//     console.log(maxValue);


//     // return Object.keys(obj).filter(val => obj[val] !=maxValue)

//     return Object.entries(obj).filter(([key,value]) => obj[key] !=maxValue)
//     .map(([key,value])=>({
//         id:key,
//         count:value
//     }))



//Values return
// return Object.values(count).filter(val => maxCount != val
// )

//Keys return
// return Object.keys(count).filter(val => count[val] != maxCount)

//Key value return
// return Object.entries(count).filter(([key,value]) => count[key] != maxCount)


//Return in array of objects

// return Object.entries(count).filter(([key,value]) => count[key] != maxCount)
// .map(([key,value])=> ({
//     id:key,
//     count:value
// }))


// }


// const findOddBoxes = (boxes) => {
//     let arr = []
//     let count = {}
//     let maxCount=0;

//     for (let obj of boxes) {
//         if (!count[obj]) {
//             let key = `${obj.type}-${obj.color}-${obj.weight}`
//             count[key] = (count[key] || 0) + 1
//         }
//         else {
//             count[key]++
//         }
//     }
//     console.log(count);
//     for(let val in count)
//     {
//         if(count[val] > maxCount)
//         {
//             maxCount=count[val]
//         }
//     }

//     //Return data in array of obejcts

// const oddBoxes = Object.entries(count)
//   .filter(([key, value]) => value !== maxCount) // Keep only non-majority items
//   .map(([key, value]) => ({ id: key,count:value })); 

//     return oddBoxes

// }


const findOddBox = (boxes) => {
    // let obj={}
    // let maxBox=null
    // let maxCount=0
    // for(let val of boxes)
    // {
    //     let key=`${val.type}-${val.color}-${val.weight}`
    //     if(!obj[key])
    //     {
    //         obj[key]=(obj[key] || 0) +1
    //     }else{

    //         obj[key]++
    //     }

    //     if(maxCount < obj[key])
    //     {
    //         maxCount=obj[key]
    //         maxBox=key
    //     }

    // }
    // // return {maxBox ,maxCount}
    // return Object.fromEntries(Object.entries(obj).filter(([key,value]) => obj[key] != maxCount))

    let obj={}
    let maxCount=0;
    let maxVal=null;

    for(let val of boxes)
    {
        let key=`${val.type}-${val.color}-${val.weight}`
        obj[key]=(obj[key] || 0)+1
        if(obj[key] > maxCount)
        {
            maxCount=obj[key]
            maxVal=key
        }
    }

    return Object.fromEntries(Object.entries(obj).filter(([key,value])=> value != maxCount))
    
    
}


const boxes = [
    { type: "small", color: "red", weight: 5 },
    { type: "small", color: "red", weight: 5 },
    { type: "large", color: "red", weight: 5 },
    { type: "small", color: "red", weight: 5 },
    { type: "xl", color: "blue", weight: 5 },
];

const result = findOddBox(boxes)
console.log(result);
