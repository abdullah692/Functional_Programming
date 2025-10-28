let str = "Hello world from JS"

const reverseStr = (str) => {
    let splitStr = str.split(" ")
    let reverse = ""
    console.log(splitStr, "splitStr")
    for (let i = splitStr.length - 1; i >= 0; i--) {
        console.log(splitStr[i]);
        reverse += splitStr[i] + " "

    } console.log(reverse);


}

reverseStr(str)



const parkPay = (hrs) => {
    let pay = 0
    if (hrs <= 2) {
        pay = hrs * 50
    }
    else {
        pay = ((hrs - 2) * 30) + (2 * 50)
    }

    return `pay ${pay} of hrs${hrs}`
    // let devidePay=hrs -2 ;

    // if(hrs > 2)
    // {
    //     hrs-=2;
    //     pay=hrs * 30.
    // }

    // if(hrs <= 2)
    // {
    //     pay=hrs * 50
    // }
    // else if(hrs > 2)
    // {
    //     pay=hrs * 30
    // }
    // else{
    //     pay =0
    // }
    // return `pay ${pay} of hrs${hrs}`


}

console.log(parkPay(2))
console.log(parkPay(5))
console.log(parkPay(3))
console.log(parkPay(1))
console.log(parkPay(6))
console.log(parkPay(0))



const calculateBill = (units) => {
    let bill = 0;
    // let first100 = false
    // let second100 = false

    // let sum = 0;
    // debugger

    // while (units > 0) {
    //     if(!first100)
    //     {
    //         if(units >= 100)
    //         {
    //             bill+=100 * 10;
    //             units-=100
    //         }
    //         else{
    //             bill+=units * 10
    //             units=0
    //         }
    //         first100=true
    //     }
    //     else if(!second100)
    //     {
    //         if(units >= 100)
    //         {
    //             bill+=100 * 15;
    //             units-=100
    //         }
    //         else{
    //             bill+=units * 15
    //             units=0
    //         }
    //         second100=true
    //     }
    //     else 
    //     {
    //         bill+=units *20
    //         units=0
    //     }

    // }

    // return bill

    if(units <= 100)
    {
        bill+= units * 100
    }
    else if(units <= 200)
    {
        bill+= (100 * 10) + ((units - 100) * 15)
    }
    else
    {
        bill+= (100 * 10) + (100 * 15) +((units - 200) * 20)
    }

    return bill
}

console.log(calculateBill(250))
console.log(calculateBill(350))
console.log(calculateBill(150))
console.log(calculateBill(100))




const calculateDiscount=(amnt)=>{
    let discountAmt=0
    if(amnt > 5000)
    {
        discountAmt= amnt - (amnt * 20 / 100);
    }
    else if(amnt >=  2000 && amnt <= 5000)
    {
        discountAmt= amnt - (amnt * 10 / 100);
    }
    else{
        discountAmt=amnt
    }
    return discountAmt
}

console.log("Discount amnt",calculateDiscount(6000))
console.log("Discount amnt",calculateDiscount(6700))
console.log("Discount amnt",calculateDiscount(5300))
console.log("Discount amnt",calculateDiscount(4000))
console.log("Discount amnt",calculateDiscount(1800))


