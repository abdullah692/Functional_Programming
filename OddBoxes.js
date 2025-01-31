const findOddBox = (boxes) => {
    let count = {}
    let maxCount = 0;
    let majorityKey = null
    for (let box of boxes) {
        const key = `${box.type}-${box.color}-${box.weight}`
        count[key] = (count[key] || 0) + 1
    }
    console.log(count);
    for (let val in count) {
        if (count[val] > maxCount) {
            maxCount = count[val]
            majorityKey = val 
        } 
    }
    console.log(maxCount, "maxCOunt", majorityKey);


    //For key value
    const oddBoxes = boxes.filter((val) => {
        const key = `${val.type}-${val.color}-${val.weight}`
        return majorityKey != key
    })

    const oddBoxesVal = Object.entries(count).filter(([key, value]) => value !== maxCount);
    const oddBoxesKeys = Object.keys(count).filter((key) => count[key] !== maxCount);


    console.log(Object.entries(count), "enties");
    console.log(Object.keys(count), "keys");


    console.log(oddBoxes, "oddBoxes");


    console.log(oddBoxesKeys, "oddBoxesKeys");



}

//Practice

const findOddBoxes = (boxes) => {
    let arr = []
    let count = {}
    let maxCount=0;

    for (let obj of boxes) {
        if (!count[obj]) {
            let key = `${obj.type}-${obj.color}-${obj.weight}`
            count[key] = (count[key] || 0) + 1
        }
        else {
            count[key]++
        }
    }
    console.log(count);
    for(let val in count)
    {
        if(count[val] > maxCount)
        {
            maxCount=count[val]
        }
    }

    //Return data in array of obejcts

const oddBoxes = Object.entries(count)
  .filter(([key, value]) => value !== maxCount) // Keep only non-majority items
  .map(([key, value]) => ({ id: key,count:value })); 
  
    return oddBoxes

}



const boxes = [
    { type: "small", color: "red", weight: 5 },
    { type: "small", color: "red", weight: 5 },
    { type: "large", color: "red", weight: 5 },
    { type: "small", color: "red", weight: 5 },
    { type: "xl", color: "blue", weight: 5 },
];

const result = findOddBoxes(boxes)
console.log(result);
