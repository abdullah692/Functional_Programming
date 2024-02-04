//Fibonnic Sequence

// const fibonnic=(num)=>{
//    let a=0 , b=1 ,next
//    for(let i=0 ; i<= num ;i++)
//    {
//         console.log(a);
//         next=a+b;
//         a=b;
//         b=next;
//    }
//     let a=0, b=1, next;
//     for(let i=0 ;i<=num ; i++)
//     {
//         console.log(a);
//         next=a+b;
//         a=b;
//         b=next;
//     }
// }

// const result=fibonnic(6)
// console.log(result);


// const fibonic=(num)=>{
//     let a=0 ,b=1 , next;
//    for(let i=0 ; i<=num ; i++)
//    {
//         console.log(a);
//         next=a+b;
//         a=b;
//         b=next;
//    }
// }

// fibonic(10);

//Recursion

// function printFibonacci(n, a = 0, b = 1) {
//     if (n > 0) {
//         console.log(a);
//         printFibonacci(n - 1, b, a + b);
//     }
// }

// const printFibonacci=(num , a=0 , b=1)=>{      // 0 , 1 , 1 ,
//     if(num > 0)
//     {
//         console.log('b is',b);
//         console.log(a);
//         printFibonacci(num -1 , b , a+b  )
//     }
// }

// const numTerms = 10;  // Number of terms to print
// console.log(`Fibonacci series with ${numTerms} terms:`);
// printFibonacci(numTerms);


// const printFibonacci=(num , a=0 ,b=1 )=>{

//     if(num > 0)
//     {
//         console.log(a);
//         return printFibonacci(num-1 , b, a+b )
//     }
// }


// const numTerms = 10;  // Number of terms to print
// console.log(`Fibonacci series with ${numTerms} terms:`);
// printFibonacci(numTerms);


// function fibonacci(n) {
//     if (n === 0) {
//         return 0;  // Base case
//     } else if (n === 1) {
//         return 1;  // Base case
//     } else {
        
//         return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive case
//     }
// }

// const result = fibonacci(6);  // Get the 6th number in Fibonacci sequence
// console.log(result);  // Output: 8
