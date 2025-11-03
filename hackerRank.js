//GradeStudent

// const gradesUpdate=(grades)=>{
//     let roundGrades=[]

//     for(let grade of grades)
//     {
//         if(grade < 38)
//         {
//             roundGrades.push(grade)
//         }
//         else if(grade >= 38)
//         {
//             let roundOf5 = Math.ceil(grade /5) * 5;
//             if(roundOf5 - grade >= 3)
//             {
//                 roundGrades.push(grade)
//             }
//             else{
//                 roundGrades.push(roundOf5)
//             }
//         }
//     }

//     return roundGrades
// }

// const arr=[4,73,67,38,33]
// const result=gradesUpdate(arr)
// console.log(result);

//-----------------------------------------------------


//Orange Apple 
// function countApplesAndOranges(s, t, a, b, apples, oranges) {

//     let appleCount = 0;
//     let orangeCount = 0;

//     for (let apple of apples) {
//         let sumVal = a + apple;
//         if (sumVal >= s && sumVal <= t) {
//             appleCount++
//         }
//     }


//     for (let orange of oranges) {
//         let sumVal = b + orange;
//         if (sumVal >= s && sumVal <= t) {
//             orangeCount++
//         }
//     }

//     return {appleCount, orangeCount}

// }

// let s = 7, t = 11;
// let a = 5, b = 15;
// let apples = [6, 2, 1];
// let oranges = [5, -6,8,-8];
// const result = countApplesAndOranges(s, t, a, b, apples, oranges)
// console.log(result);

//-------------------------------------------------------------

//Kangroo

// const kangaroo = (x1, v1, x2, v2) => {

//     if (v1 == v2) {
//         return x1 == x2 ? "YES" : "NO"
//     }

//     let n = (x2 - x1) / (v1 - v2)

//     if (n >= 0 && Number.isInteger(n)) {
//         return "YES"
//     }
//     else {
//         return "NO"
//     }
// }
// let x1 = 0, v1 = 3
// let x2 = 4, v2 = 2

// const result = kangaroo(x1, v1, x2, v2)
// console.log(result);

//-------------------------------------------------------------------------------

//Between Two Sets Problem

// const getTotalX=(a,b)=>{

//     let count =0;
//     let num=[]    

//     for(let i=Math.max(...a); i< Math.min(...b); i++)
//     {
//         let factorOfA = a.every(num => i % num == 0)
//         let factorOfB = b.every(num => num % i == 0)

//         if(factorOfA && factorOfB)
//         {
//             count++
//             num.push(i)

//         }
//     }

//     return {count,num}
// }

// let a = [2, 4]
// let b = [16, 32, 96]


// const result = getTotalX(a,b)
// console.log(result);

//----------------------------------------------------------------

function migratoryBirds(arr) {
    // Write your code here
    let obj={}
    let maxCount=0
    for(let val of arr)
    {
        obj[val] =(obj[val] || 0) +1 ;   
        if(obj[val] > maxCount)
        {
            maxCount= obj[val]
        }
    }   
    
    console.log(obj)
    console.log(maxCount,"maxCount")
    return  Math.min(...Object.keys(obj).filter((key)=> obj[key]  == maxCount))
    
}

console.log(migratoryBirds([1 ,2 ,3 ,4 ,5 ,4 ,3 ,2 ,1 ,3 ,4]))


//-----------------------------------------------------------------------------------------------


const getMoneySpent=(keyboards, drives, b) =>{
    let max=-1 ;

    for(let keyboard of keyboards)
    {
        for(let usb of drives)
        {
            let total = keyboard + usb
            if(total <= b && total > max)
            {
                max = total;
            }
        }
    }

    return max
    
}

let keyboards=[374625 ,797 ,951]
let drives=[83477 ,732159 ,779867 ,598794 ,596985 ,156054 ,156030 ,99998 ,58097 ,459353 ,866372, 333784 ,601251]
let b=374625

const result = getMoneySpent(keyboards, drives, b)
console.log(result);
