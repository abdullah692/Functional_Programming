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



