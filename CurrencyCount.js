const currencyCount=(arr,amnt)=>{
    // let count={}
    // const sortArr=arr.reverse();

    // for(let i=0; i< sortArr.length ;i++)
    // {
    //     if(amnt >= sortArr[i])
    //     {
    //         const val=Math.floor(amnt/sortArr[i])
    //         count[sortArr[i]]=val
    //         amnt%=sortArr[i]
    //     }
    // }
    // return count

    let count={}
    let revArr=arr.reverse();
    for(let i=0 ; i<revArr.length ;i++)
    {
        if(amnt > revArr[i])
        {
            let val=Math.floor(amnt/revArr[i])
            count[revArr[i]]=val
            amnt%=revArr[i]
        }
    }

    return count
}

const arr=[1,2,5,10,20,50,100,500]
const amount=476
const result=currencyCount(arr,amount)
console.log(result);

//Net solution

// function countCurrencyNotes(currency, denominations) {
//     // Sort denominations in descending order
//     denominations.sort((a, b) => b - a);
  
//     const result = {};
  
//     for (const denomination of denominations) {
//       const count = Math.floor(currency / denomination);
//       if (count > 0) {
//         result[denomination] = count;
//         currency %= denomination;
//       }
//     }
  
//     return result;
//   }
  
//   const currencyAmount = 26;
//   const denominationsArray = [1, 2, 5, 10, 20, 50, 100];
  
//   const result = countCurrencyNotes(currencyAmount, denominationsArray);
  
//   console.log(To make ${currencyAmount} currency, you need:);
//   for (const denomination in result) {
//     const count = result[denomination];
//     console.log(${count} times ${denomination});
//   }