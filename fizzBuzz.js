//FizzBuzz

// const fizzBuzz = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz(15);

const FizzBuzz = (num) => {
 for(let i=0 ; i<=num; i++)
 {
    if(i % 3==0 && i%5==0)
    {
      console.log("FizzBuzz",i); 
    }
    else if(i%3 ==0)
    {
      console.log("Fizz",i);
    }
    else if(i%5 ==0)
    {
      console.log("Buzz",i);
    }
    else{
      console.log(i);
      
    }
 }
};

FizzBuzz(30);
