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


const CharacterFreq=(string)=>{
 const obj={}
  for(let char of string)
  {
    if(!obj[char])
    {
      obj[char]=1
    }
    else{

      obj[char]++
    }
  }
  console.log(obj);
}

CharacterFreq('abdullahasasawewe')


//With Array

const CharacterCheck=(arr)=>{
  const obj=[]
  for(let char of arr)
  {
    if(!obj[char])
    {
      obj[char]=1
    }
    else{

      obj[char]++
    }
  }
  console.log(obj);}

const arr=['a','a','a','b','b','b','b',"t","y","c","c","i","o","o"]
const result=CharacterCheck(arr)
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