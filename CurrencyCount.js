// const currencyCount=(arr,amnt)=>{
//     // let count={}
//     // const sortArr=arr.reverse();

//     // for(let i=0; i< sortArr.length ;i++)
//     // {
//     //     if(amnt >= sortArr[i])
//     //     {
//     //         const val=Math.floor(amnt/sortArr[i])
//     //         count[sortArr[i]]=val
//     //         amnt%=sortArr[i]
//     //     }
//     // }
//     // return count

//     let count={};
//     let arrRev=arr.reverse()
//     for(let i=0 ; i<arrRev.length; i++)
//     {
//         if(amnt >= arrRev[i])
//         {
//             let val=Math.floor(amnt / arrRev[i]);
//             count[arrRev[i]]=val
//             amnt %= arrRev[i]
//         }
//     }
//     return count

// }

// const arr=[1,2,5,10,20,50,100,500]
// const amount=999
// const result=currencyCount(arr,amount)
// console.log(result);

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



const atmCurrency = (amnt) => {
    let count = {}
    // let arr=[5000,1000.,500]
    let count5000 = 0
    let count1000 = 0
    let count500 = 0

    while (amnt > 0) {
        if (amnt > 5000) {
            amnt -= 5000
            count5000++;
            count[5000]=count5000;
        }
        else if (amnt > 1000) {
            amnt -= 1000
            count1000++;
            count[1000]=count1000
        }
        else if (amnt > 500) {
            amnt -= 500
            count500++;
            count[500]=count500
        }
      
    }

    return count
    // console.log(count5000, "count5000");
    // console.log(amnt, "amnt");




}



const amount = 5000
const result = atmCurrency(amount)
console.log(result);