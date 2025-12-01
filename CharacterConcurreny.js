// const CharacterFrequency = (val) => {
//   let frequency = {};
//   for (const char of val) {
//     const normalChar = char.toLowerCase();
//     if (!frequency[normalChar]) {
//       frequency[normalChar] = 1;
//     } else {
//       frequency[normalChar]++;
//     }
// }
// console.log(frequency);
// };

// CharacterFrequency("Abdullah");


const CharacterFreq = (string) => {
  // let obj={}
  // for(let char of string)
  // {
  //     if(!obj[char])
  //     {
  //       obj[char]=1
  //     }
  //     else{
  //       obj[char]++
  //     }
  // }

  // let obj={}
  // for(let char of string)
  // {
  //   if(!obj[char])
  //   {
  //     obj[char]=(obj[char] || 0) +1
  //   }
  //   else{
  //     obj[char]++
  //   }
  // }
  // return obj


  let obj = {}
  for (let val of string) {
    obj[val] = (obj[val] || 0) + 1
  }
  return obj
}

const res = CharacterFreq('abdullahasasawewe')
console.log(res);



//With Array

const CharacterCheck = (arr1) => {
  let arr = []

  for (let char of arr1) {
    if (!arr.includes(char)) {
      arr[char] = (arr[char] || 0) + 1
    } else {
      arr[char]++
    }
  }
  return arr
}

const arr = ['a', 'a', 'a', 'b', 'b', 'b', 'b', "t", "y", "c", "c", "i", "o", "o"]
const result = CharacterCheck(arr)
console.log(result);


///Other program

// const frequency = (value) => {
//   // console.log(value);
//   let frequency={};
//   for (let i = 0; i < value.length; i++) {
//     const change = value[i].toLowerCase();
//     if(!frequency[change])
//     {
//         frequency[change]=1;
//     }
//     else{
//         frequency[change]++;
//     }
//   }
//   console.log(frequency);
// };

// const string = "Micissippie";
// const breaka = string.split("");
// frequency(breaka);



//Split method
// const text='helloWorld'
// const arr=[]
// for(const char of text)
// {
//     arr.push(char)
// }
// console.log(arr);


function migratoryBirds(arr) {
  // Write your code here
  let obj = {}
  let maxBird = 0

  for (let i of arr) {
    obj[i] = (obj[i] || 0) + 1;
    if (maxBird < obj[i]) {

      maxBird = obj[i]
    }
  }

  return Math.min(...Object.keys(obj).filter((key) => obj[key] == maxBird))
}


let arr2 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
const res2 = migratoryBirds(arr2)
console.log(res2);
