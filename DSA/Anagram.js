// const Anagram = (string1, string2) => {
//    let obj={}
//    if(string1.length != string2.length)
//    {
//       return false
//    }
   
//    for(const char of string1)
//    {
//       obj[char]=(obj[char] ||0)+1
//    }
//    console.log(obj);
//    for(const char of string2)
//    {
//       if(!obj[char])
//       {
//          return "Not an Anagram"
//       }
//       else{
//          obj[char]=obj[char]-1
//       }
//    }
//    return "It is an Anagram"
// }

//   let obj={}
  
//   if(string1.length != string2.length)
//   {
//       return "Not an Anagram"
//   }
//   for(let char of string1)
//   {
//       obj[char]=(obj[char] || 0) +1
//   }
//   for(let char of string2)
//   {
//       if(!obj[char])
//       {
//          return "Not an Anagram"
//       }
//       obj[char]--
//   }
  
//   return "It is an anagram"
// }

// const result=Anagram('abdullahsidd','abdullasiddh')
// console.log(result);


//Anagram Program

const anagram = (string1, string2) => {
  
//   if(string1.length != string2.length)
//   {
//     return "Not an Anagram because of length"
//   }
//   const check1=string1.split('').sort().join("");
//   const check2=string2.split('').sort().join("");
//   if(check1 == check2)
//   {
//     return "It is an Anagram"
//   }
//   else{
//     return "Not an Anagram"
//   }

if(string1.length != string2.length)
{
   return "Not an Anagram"
}

const check1=string1.split('').sort().join('')
console.log(check1);

const check2=string2.split('').sort().join('')
console.log(check2);

if(check1 == check2)
{
   return "It is an Anagram"
}
return "Not an Anagram"



}

const result =
  anagram("hellod", "oehffc");
console.log(result)
