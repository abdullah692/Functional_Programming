//Only implement on Sorted Arrays
//We find the middle element first , if it match the target value than return its index 
//otherwise if the taget value is less than the middle element than we search in the left side of the array from the middle 
//and if larger than in right side of the element 
//After deciding the side again repeat the process to break it in middle element and left , right side

const arr=[-5,2,4,6,10,13,15]

const BinarySearch=(arr,target)=>{

    // let leftindex=0
    // let rightIndex=arr.length -1;
    // while(leftindex <= rightIndex)
    // {
    //     const middleIndex=Math.floor((leftindex + rightIndex)/2)
    //     console.log(middleIndex); 
    //     if(arr[middleIndex] == target)
    //     {
    //         return middleIndex;
    //     }
    //     if(target < arr[middleIndex])
    //     {
    //         rightIndex=middleIndex-1;
    //     }
    //     else{
    //         leftindex=middleIndex+1
    //     }
    // }

    // return -1;

    // let leftindex=0;
    // let rightIndex=arr.length-1;
    // while(leftindex <= rightIndex)
    // {
    //     const middleIndex=Math.floor((leftindex+rightIndex)/2)
    //     if(arr[middleIndex] == target)
    //     {
    //       return `The value ${target} is at index ${middleIndex}`
    //     }
    //     if(arr[middleIndex] > target)
    //     {
    //       rightIndex=middleIndex-1;
    //     }
    //     else{
    //       leftindex=middleIndex+1
    //     }
    // }
    // return -1

    let leftindex=0
    let rightIndex=arr.length-1
    
    while(leftindex <= rightIndex)
    {
        let middleIndex=Math.floor((leftindex+rightIndex)/2)
        if(arr[middleIndex] == target)
        {
          return `Value found at ${middleIndex}`
        }
        else if(arr[middleIndex] > target)
        {
          rightIndex=middleIndex-1
        }
        else{
          leftindex=middleIndex+1
        }
    }
  
    return "No value eists"
  }


const result=BinarySearch(arr,13)
console.log(result);

