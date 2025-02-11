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
  let obj={}
  for(let char of string)
  {
    if(!obj[char])
    {
      obj[char]=1
    }
    obj[char]++
  }
  return obj
}

const res=CharacterFreq('abdullahasasawewe')
console.log(res);



//With Array

const CharacterCheck = (arr1) => {
  let arr = []
  for(let char of arr1)
  {
    if(!arr[char])
    {
      arr[char]=1
    }
    else{
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