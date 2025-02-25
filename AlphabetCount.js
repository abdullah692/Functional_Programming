const countUnsortedAlphabets=(val)=>{
    // let obj={}
    // let count=0 
    // let sortAlpha=val.split('').sort().join('')
    // console.log(sortAlpha);

    // for(let i=0 ;i<val.length ;i++)
    // {
    //     if(val[i] !=sortAlpha[i])
    //     {
    //         // obj[val]=1
    //         count++
    //     }
    // }

    // return count

let count=0
let alphabets=[]
let sortVal=val.split('').sort().join('')
for(let i=0 ;i< val.length; i++)
{
  if(sortVal[i] != val[i])
  {
    count++
    alphabets.push(val[i])
  }
}
return {count,alphabets}
}




const value = "cabd";
console.log(countUnsortedAlphabets(value));



// function countUnsortedAlphabets(input) {
//     const seen = new Set(); // Track the characters we've processed
//     let maxChar = 'a'; // Track the highest character lexicographically seen so far
//     let count = 0;
  
//     for (let char of input) {
//         debugger
//       if (maxChar > char) {
//         // Increment count if the current character is out of order
//         count++;
//       }
//       // Update maxChar and add the current character to the set
//       maxChar = maxChar > char ? maxChar : char;
//       seen.add(char);
//     }
  
//     return count;
//   }
  
//   // Example usage
//   const input = "cabd";
//   console.log(countUnsortedAlphabets(input)); // Output: 3
  