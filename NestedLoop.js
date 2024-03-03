// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const libArr = [
  ["abc", "ab", "adf", "aef"],
  ["bad", "back", "bench", "board"],
  ["center", "cab", "canada"],
];

const FindBook = (libArr, name) => {
  // for (let i = 0; i < libArr.length; i++) {
  //   for (let j = 0; j < libArr[i].length; j++) {
  //     if (libArr[i][j] == name) {
  //       console.log(`${name} is at ${j + 1} in ${i+1}`);
  //       return "Book find";
  //     }
  //   }
  // }
  // return "Unavailabe";
  for (let i = 0; i < libArr.length; i++) {
    for (let j = 0; j < libArr[i].length; j++) {
      if (libArr[i][j] == name) {
        return `${name} is found at ${j + 1}`
      }
    }
  }
  return "Unavailable"
};

const result = FindBook(libArr, "sds");
console.log(result);

