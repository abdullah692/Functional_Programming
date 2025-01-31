const groupAnagram=(arr)=>{
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

    let obj={}
    for(let word of arr)
    {
        // debugger
        let sortWord=word.split("").sort().join("")
        obj[sortWord]=obj[sortWord] || []
        obj[sortWord].push(word)
    }
    console.log(obj);
    return Object.values(obj)
    // return Object.values(obj).map(arr => `${[arr]}`)
    
}


const arr=["eat", "tea", "tan", "ate", "nat", "bat"]
const result=groupAnagram(arr)
console.log(result);
