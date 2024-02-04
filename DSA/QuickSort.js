const val = [-2, 5, 3, -6, 12, 9, 43, 25, 11];

const QuickSort = (arr) => {

  //   let pivot = arr[arr.length - 1];
  //   let left = [];
  //   let right = [];

  //   for (let i = 0; i < arr.length - 1; i++) {
  //     if (arr[i] < pivot) {
  //       left.push(arr[i]);
  //     } else {
  //       right.push(arr[i]);
  //     }
  //   }
  //   console.log(arr);
  //   console.log(left,'left');
  //   console.log(right,'right');
  //   return [...QuickSort(left), pivot, ...QuickSort(right)];

  if(arr.length < 2)
  {
    return arr;
  }
  let pivot=arr[arr.length -1]
  let left=[];
  let right=[];

  for(let i=0 ;i < arr.length-1 ;i++)
  {
    if(arr[i] > pivot)
    {
      right.push(arr[i])
    }
    else
    {
      left.push(arr[i])
    }
  }

  return [...QuickSort(left) , pivot , ...QuickSort(right)]
  
  
  };

const result = QuickSort(val);
console.log(result);
