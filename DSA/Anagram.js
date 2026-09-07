const Anagram = (string1, string2) => {

   // let obj={}
   // if(string1.length != string2.length)
   // {
   //    return "Not an Anagram"
   // }
   // for(let val of string1)
   // {
   //    obj[val]=(obj[val] || 0)+1
   // }
   // for(let val of string2)
   // {
   //    if(!obj[val])
   //    {
   //       return "Not an Anagram"
   //    }
   //    obj[val]--
   // }

   // return "It is an Anagram"

   // let obj={}
   // if(string1.length != string2.length)
   // {
   //    return "Not an Anagram"
   // }
   // for(let char of string1)
   // {
   //    obj[char] = (obj[char] || 0) +1
   // }
   // console.log(obj);

   // debugger
   // for(let char of string2)
   // {
   //    if(!obj[char])
   //    {
   //       return "Not an Anagram"
   //    }
   //    else{
   //       obj[char]-=1
   //    }
   // }

   // return "It is an Anagram"

   // let obj={}

   // if(string1.length != string2.length)
   // {
   //    return "Not an Anagram"
   // }

   // for(let val of string1)
   // {
   //    obj[val] = (obj[val] || 0) + 1
   // }

   // for(let val of string2)
   // {
   //    if(!obj[val])
   //    {
   //       return "Not an Anagram"
   //    }
   //    else{
   //       obj[val]--
   //    }
   // }

   // return "It is anagram"

   // let obj = {}

   // if (string1.length != string2.length) {
   //    return "Not an Anagram"
   // }

   // for (let val of string1) {
   //    obj[val] = (obj[val] || 0) + 1
   // }

   // for (let val of string2) {
   //    if (!obj[val]) {
   //       return "Not an Anagram"
   //    }
   //    obj[val] -= 1 

   // }

   // return "It is an Anagram"


   let obj = {}
   let flagAna=false;

   if (string1.length != string2.length) {
      return "Not an Anagram"
   }

   for (let i = 0; i < string1.length; i++) {
      // debugger
      let char1 = string1[i]
      let char2 = string2[i]

      obj[char1] = (obj[char1] || 0) + 1
      obj[char2] = (obj[char2] || 0) - 1

      console.log(obj);

      console.log(obj[char2] < 0);

      if(obj[char2] < 0)
      {
         flagAna = false
         // return "Not an Anagram"
      }
      else{
         flagAna = true
      }
   }

   
   return flagAna == true  ? "It is an Anagram" : "Not an Anagram"

}

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

// const result = Anagram('abdullahsidd', 'abdullasiddh')
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

   // if(string1.length != string2.length)
   // {
   //    return "Not an Anagram"
   // }

   // const check1=string1.split('').sort().join('')
   // console.log(check1);

   // const check2=string2.split('').sort().join('')
   // console.log(check2);

   // if(check1 == check2)
   // {
   //    return "It is an Anagram"
   // }
   // return "Not an Anagram"


   if (string1.length != string2.length) {
      return "Not an Anagram"
   }

   let value1 = string1.split('').sort().join('')
   let value2 = string2.split('').sort().join('')

   if (value1 == value2) {
      return "It is an Anagram"
   }
   else {
      return "Not an Anagram"

   }



}

const result =
   Anagram("abdullah", "abllduha");
console.log(result)
