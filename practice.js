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
    // let pay = 0
    // if (hrs <= 2) {
    //     pay = hrs * 50
    // }
    // else {
    //     pay = ((hrs - 2) * 30) + (2 * 50)
    // }

    // return `pay ${pay} of hrs${hrs}`

    let pay=0;

    if(hrs <= 2)
    {
        pay=hrs * 50
    }
    else{
        pay= (2 * 50) + ((hrs -2) * 30)
    }

    return pay


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

console.log(parkPay(2),"paypark")
console.log(parkPay(5),"paypark")
console.log(parkPay(3),"paypark")
console.log(parkPay(1),"paypark")
console.log(parkPay(6),"paypark")
console.log(parkPay(0),"paypark")



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
   // units <= 100 

    // if (units <= 100) {
    //     bill += units * 100
    // }
    // else if (units <= 200) {
    //     bill += (100 * 10) + ((units - 100) * 15)
    // }
    // else {
    //     bill += (100 * 10) + (100 * 15) + ((units - 200) * 20)
    // }

    // return bill

    if(units <= 100)
    {
        bill += units * 10
    }
    else if(units <= 200)
    {
        bill+= (100 * 10) + ((units - 100) * 15)
    }
    else
    {
        bill += (100 * 10) + (100 * 15) + ((units - 200) * 20)
    }

    return bill
}

console.log(calculateBill(250))
console.log(calculateBill(350))
console.log(calculateBill(150))
console.log(calculateBill(100))




const calculateDiscount = (amnt) => {
    let discountAmt = 0
//     if (amnt > 5000) {
//         discountAmt = amnt - (amnt * 20 / 100);
//     }
//     else if (amnt >= 2000 && amnt <= 5000) {
//         discountAmt = amnt - (amnt * 10 / 100);
//     }
//     else {
//         discountAmt = amnt
//     }
//     return discountAmt

    if(amnt > 5000)
    {
        discountAmt= amnt - (amnt * 20 /100)
    }
    else if(amnt >= 2000 && amnt <= 5000)
    {
        discountAmt= amnt - (amnt * 10 /100)
    }
    else{
        discountAmt=amnt
    }

    return discountAmt
} 

console.log("Discount amnt", calculateDiscount(6000))
console.log("Discount amnt", calculateDiscount(6700))
console.log("Discount amnt", calculateDiscount(5700))
console.log("Discount amnt", calculateDiscount(4000))
console.log("Discount amnt", calculateDiscount(1800))


// Abbreviation Creator:
// "Pakistan International Airlines" → "PIA".


const abbreviation = (name) => {

    // let splitName = name.split(" ");
    // let abbreviationName = ''
    // for (let val of splitName) {
    //     if (val[0] == val[0].toUpperCase()) {
    //         abbreviationName += val.slice(0, 1)
    //     }
    // }
    // return abbreviationName

    let splitName= name.split(" ")
    let abbreviationName=''

    for(let val of splitName)
    {
        if(val[0] == val[0].toUpperCase())
        {
            abbreviationName += val[0].toUpperCase()
        }
    }
    return abbreviationName
}

console.log(abbreviation("Pakistan International Airlines"));
console.log(abbreviation("For Your Information"));
console.log(abbreviation("In My Opinion / In My Humble Opinion"));
console.log(abbreviation("Laughing Out Loud"));
console.log(abbreviation("Office of Foreign Disaster Assistance"));


const arrObj = [{ item: 'apple', qty: 2, price: 100 }, { item: 'banana', qty: 3, price: 50 }]


const calculateCost = (arrObj) => {
    let totalCost = 0;

    for (let {qty, price } of arrObj) {
        totalCost += (qty * price)
    }

    return totalCost
}

const result = calculateCost(arrObj)
console.log(result);


const arr={
    user_name: "john",
    user_details: {
      home_address: "123 St"
    }
  
}

// {
//     userName: "john",
//     userDetails: {
//       homeAddress: "123 St"
//     }
//   }

const convertKeys=(obj1)=>{

    let obj={}
    for(let key in obj1)
    {
        // debugger
        let newKey= key.replace(/_([a-z])/g,(_,c)=> c.toUpperCase())
        obj[newKey]=typeof obj1[key] === "object" ? convertKeys(obj1[key]) : obj1[key]
    }
    return obj
}

const result1=convertKeys(arr)
console.log(result1);
