const DivideNConquere = (arr, num) => {
  const sortArr = arr.sort((a, b) => a - b);
  console.log(sortArr);
  let left = 0;
  let right = sortArr.length - 1;
  while (left <= right) {
    const midValue = Math.floor((left + right) / 2);
    console.log(midValue);
    console.log(sortArr[midValue]);
    if (sortArr[midValue] > num) {
      right = sortArr[midValue] - 1;
    } else if (sortArr[midValue] < num) {
      left = sortArr[midValue] + 1;
    } else {
      return midIndex;
    }
  }
    return -1;
};

let num = 67;
let arr = [2, 5, 78, 3, 20, 45, 67, 54, 32, 7, 4, 8, 43, 21];
const result = DivideNConquere(arr, num);
console.log(result);
