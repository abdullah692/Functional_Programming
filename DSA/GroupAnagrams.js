const groupAnagram = (arr) => {
    // let obj={}
    // for(let word of arr)
    //     {
    //         let sortWords=word.split("").sort().join("")
    //         console.log(sortWords);
    //         // debugger
    //         obj[sortWords]=obj[sortWords] || []
    //         obj[sortWords].push(word)
    //     }   
    //     console.log(obj);

    //     return Object.values(obj).map(arr => `[${arr.map(w => `"${w}"`).join(", ")}]`)

    // let obj = {}

    // for (let char of arr) {
    //     let sortVal = char.split('').sort().join('')
    //     obj[sortVal] = obj[sortVal] || []
    //     obj[sortVal].push(char)
    // }
    // console.log(obj);

    // // return Object.values(obj)
    // return Object.entries(obj).map(([key,value]) => `id:${key} : value:${value} ]`)

    let obj={}
    for(let char of arr)
    {
        let sortArr=char.split('').sort().join('')
        if(!obj[sortArr])
        {
            obj[sortArr]=[]
        }
        obj[sortArr].push(char)
    }
    return obj
}


const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
const result = groupAnagram(arr)
console.log(result);
