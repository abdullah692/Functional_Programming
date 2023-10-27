const Anagram = (string1, string2) => {
  //         if(string1.length !== string2.length)
  //         {
  //             return false;
  //         }
  //         let words={}
  //         for(let val of string1)
  //         {
  //             words[val]=(words[val] || 0)+1;
  //         }
  //         console.log(words);
  //         for(let item of string2)
  //         {
  //             console.log(words[item]) ;
  //             if(!words[item])
  //             {
  //                 console.log(words);
  //                 return false
  //             }
  //             words[item]-=1;
  //         }
  //         return true;

  // }

  // const result=anagram('instrument','truinntsme')
  // console.log(result);

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

  let obj={};

  for(let val of string1)
  {
      obj[val]=(obj[val] || 0)+1
  }
  for(let val of string2)
  {
    if(!obj[val])
    {
      return "Not a anagram"
    }
    obj[val]=obj[val]-1
  }
  console.log(obj);
};
const result = Anagram("instrument", "trunentsmi");
console.log(result);

//Anagram Program

// const anagram = (string1, string2) => {
//   if (string1.length !== string2.length) {
//    console.log("Not an anagram");
//    }
//    const check1=string1.split("").sort().join("")
//    console.log(check1);
//    const check2=string2.split("").sort().join("")
//    if(check1 == check2)
//    {
//       console.log("It is an Anagram");
//    }
//    else{
//       console.log("Not an anagram");
//    }

//    };

//   const check1 = string1.split("").sort().join("");
//   console.log(check1);

//   const check2 = string2.split("").sort().join("");
//   console.log(check2);
//   if (check1 === check2) {
//     console.log("Given strings is anagram");
//     return true;
//   } else {
//     console.log("Given strings is not anagram");
//     return false;
//   }

// const result =
// anagram("hello", "lloeh");
// console.log(result)
