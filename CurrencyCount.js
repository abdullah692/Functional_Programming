const currencyCount = (arr, amnt) => {
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

    // let count = {}
    // const revArr = arr.reverse();
    // for (let i = 0; i < revArr.length; i++) {
    //     if (amnt > revArr[i]) {
    //         let val = Math.floor(amnt / revArr[i])
    //         count[revArr[i]] = val
    //         amnt %= revArr[i]
    //     }
    // }
    // return countfor*
    let count = {}
    let reverseArr = arr.reverse();

    for (let val of reverseArr) {
        if (amnt >= val) {
            let countVal = Math.floor(amnt / val)
            count[val] = countVal
            amnt %= val
        }
    }
    return count

}
z
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
    // let count = {}
    // // let arr=[5000,1000.,500]
    // let count5000 = 0
    // let count1000 = 0
    // let count500 = 0
    // // let amnt=amnt

    // if(amnt % 500 !=0)
    // {
    //     return  'Invalid amount entered'
    // }
    // while (amnt > 0) { // Change condition to prevent infinite loop
    //     if ((amnt - 5000) > 0) { // Fix condition to >=
    //         amnt -= 5000;
    //         count5000++;
    //         count[5000] = count5000;
    //     } 
    //     else if ((amnt - 1000)> 0) { // Fix condition to >=
    //         amnt -= 1000;
    //         count1000++;
    //         count[1000] = count1000;
    //     } 
    //     else if ((amnt -  500) >= 0) { // Fix condition to >=
    //         amnt -= 500;
    //         count500++;
    //         count[500] = count500;
    //     }
    // }

    // return count

    // let count = {}
    // let count5000 = 0
    // let count1000 = 0
    // let count500 = 0

    // if (amnt % 500 != 0) {
    //     return "Invalid amount input"
    // }

    // while (amnt > 0) {
    //     if ((amnt - 5000) > 0) {
    //         amnt -= 5000
    //         count5000++
    //         count[5000] = count5000
    //     }
    //     else if ((amnt - 1000) > 0) {
    //         amnt -= 1000
    //         count1000++
    //         count[1000] = count1000
    //     }
    //     else if((amnt - 500) >= 0) {
    //         amnt -= 500
    //         count500++
    //         count[500] = count500
    //     }
    // }

    // return count

    let count = {}
    let count5000 = 0
    let count1000 = 0
    let count500 = 0

    if (amnt % 500 != 0) {
        return 'Invalid amount entered'
    }

    while (amnt > 0) {
        if ((amnt - 5000) > 0) {
            amnt -= 5000;
            count5000++;
            count[5000] = count5000
        }
        else if ((amnt - 1000) > 0) {
            amnt -= 1000;
            count1000++;
            count[1000] = count1000
        }
        else if ((amnt - 500) >= 0) {
            amnt -= 500;
            count500++;
            count[500] = count500
        }

    }

    return count
}

// let amount = 20000
// const result = atmCurrency(amount)
// console.log(result);