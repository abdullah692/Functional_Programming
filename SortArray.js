let arr=[4,2,17,12,1,131,67,52]

const sort=(arr)=>{

  for(let i=0 ; i< arr.length ;i++)
  {
    for(let j=0 ; j< arr.length ; j++)
    {
      if(arr[j] > arr[j+1])
      {
        let val=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=val
      }
    }
  }
  return arr
}

const result=sort(arr);
console.log(result);

// const arr = [4, 2, 6, 12, 1, 67,121];

// const bubbleSort = (arr) => {
//   const n = arr.length;
//   let swapped;

//   do {
//     swapped = false;
//     for (let i = 0; i < n - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);

//   return arr;
// };

// const result = bubbleSort(arr);
// console.log(result);


// function bubbleSort(arr) {
//     const n = arr.length;
  
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // Swap arr[j] and arr[j + 1]
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         } 
//       }
//     }
  
//     return arr;
//   }
  
//   const unsortedArray = [64, 34, 25, 12, 22, 11, 90,3,12,55];
//   const sortedArray = bubbleSort(unsortedArray);
//   console.log(sortedArray);



//Insertion Sort


// function insertionSort(arr) {
//     const n = arr.length;
  
//     for (let i = 1; i < n; i++) {
//       // Store the current element to be compared.
//       const currentElement = arr[i];  //11
//       let j = i - 1;  //0
//       console.log(j);
  
//       // Move elements of arr[0..i-1] that are greater than currentElement
//       // one position ahead of their current position.
//       while (j >= 0 && arr[j] > currentElement) {

//         arr[j + 1] = arr[j];
//         j--;
//       }
  
//       // Place the current element at its correct position in the sorted part of the array.
//       arr[j + 1] = currentElement;
//     }
//   }
  
//   // Example usage:
//   const myArray = [12, 11, 13, 5, 6];
//   insertionSort(myArray);
//   console.log(myArray); // Output: [5, 6, 11, 12, 13]
  