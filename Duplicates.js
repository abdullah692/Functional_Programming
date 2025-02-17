// const findDuplicates=(arr)=>{
    // let seen=[]
    // let dup=[]

    // for(let val of arr)
    // {
    //     // debugger
    //     if(!seen.includes(val))
    //     {
    //         seen.push(val)
    //     }else if(!dup.includes(val)){
    //         dup.push(val)
    //     }
    // }
    // return dup

//     let seen={}
//     let dup=[] 

//     for(let char of arr)
//     {
//         if(!seen[char])
//         {
//             seen[char]=(seen[char] || 0)+1
//         }else if(!dup.includes(char))
//         {
//             dup.push(char)
//         }
//     }

//     return dup
// }

//Another Approach

// const findDuplicates=(arr)=>{


//     let seen={}
//     let dup=[]

//     for(let i=0 ; i<arr.length ;i++)
//     {
//         // debugger

//         if(!seen[arr[i]])
//         {
//             seen[arr[i]]=true
//         }else if(!dup.includes(arr[i])){
//             dup.push(arr[i])
//         }
//     }
//     return dup

// let seen={}
// let dup=[]

// for(let val of arr)
// {
//     if(!seen[val])
//     {
//         seen[val]=true
//     }else if(!dup.includes(val))
//     {
//         dup.push(val)
//     }
// }
// return dup
// }


//With set

const findDuplicates = (arr) => {
    // let seen = new Set()
    // let duplicate = new Set()

    // for (let val of arr) {
    //     if (!seen.has(val)) {
    //         seen.add(val)
    //     }
    //     else {
    //         duplicate.add(val)
    //     }
    // }

    // return [...duplicate]

    // let seen=new Set()
    // let duplicate=new Set()

    // for(let val of arr)
    // {   
    //     if(!seen.has(val))
    //     {
    //         seen.add(val)
    //     }else{
    //         duplicate.add(val)
    //     }
    // }
    // return [...duplicate]

    // let seen={}
    // let duplicate=[]
    // for(let val of arr)
    // {
    //     if(!seen[val])
    //     {
    //         seen[val]=(seen[val] || 0)+1
    //     }
    //     else if(!duplicate.includes(val)){
    //         duplicate.push(val)
    //     }
    // }

    // return duplicate


    let seen=new Set()
    let dup=new Set()

    for(let char of arr)
    {
        if(!seen.has(char))
        {
            seen.add(char)
        }
        else{
            dup.add(char)
        }
    }
    return [...dup]
}


console.log(findDuplicates([1, 2, 3, 1, 2, 4]));
console.log(findDuplicates([5, 3, 6, 3, 6, 6]));