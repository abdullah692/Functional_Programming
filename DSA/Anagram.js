const Anagram = (string1, string2) => {
   let obj={}
   if(string1.length != string2.length)
   {
      return false
   }
   
   for(const char of string1)
   {
      obj[char]=(obj[char] ||0)+1
   }
   console.log(obj);
   for(const char of string2)
   {
      if(!obj[char])
      {
         return "Not an Anagram"
      }
      else{
         obj[char]=obj[char]-1
      }
   }
   return "It is an Anagram"
}

const result=Anagram('abdullahsidd','sidabddullah')
console.log(result);

// const Anagram=(string1 , string2)=>{
// let obj={}

// if(string1.length != string2.length)
// {
//   return false;
// }
// for(const char of string1)
// {
//   obj[char]=(obj[char] || 0)+1
// }
// console.log(obj);

// for(const char of string2)
// {
//   if(!obj[char])
//   {
//       return false
//   }
//   obj[char]=obj[char] -1;
// }

//   let obj={}

//   for(let char of string1)
//   {
//     obj[char]=(obj[char] || 0) +1
//   }
//   for(let char of string2)
//   {
//     if(!obj[char])
//     {
//       return false
//     }
//     obj[char]=obj[char] -1;
//   }
//   console.log(obj);
// };
// const result = Anagram("instrument", "trunentsmi");
// console.log(result);

//Anagram Program

// const anagram = (string1, string2) => {
  
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

// }

// const result =
//   anagram("hellod", "lloehff");
// console.log(result)
