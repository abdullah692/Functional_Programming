// const primeNo = (val) => {
//   let isPrime = false;
//   if (val === 1) {
//     console.log("1 is neither prime nor composite number.");
//   }

//   // check if number is greater than 1
//   else if (val > 1) {
//     debugger
//     for (let i =2; i <= val; i++) {
//       if (val % i == 0) {
//         // console.log('Is prime NUmber');
//         isPrime = false;
//         console.log("Prime Number :", isPrime);
//         break;
//       } else {
//         // console.log('Not a prime NUmber');
//         isPrime = true;
//         console.log("Prime Number :", isPrime);
//       }
//     }
//   }
// };



const primeNo = (num) => {

  // let isPrime=true;
  // if(num == 1)
  // {
  //       console.log("1 is neither prime nor composite number.");
  // }
  // else if(num > 1)
  // {
  //   for(let i=2 ; i< num ; i++)
  //   {
  //     if(num%i ==0)
  //     {
  //       isPrime=false;
  //       console.log("Not a prime num");
  //       break;
  //     }
  //     else{
  //       isPrime=true
  //     }
  //   }
  //   console.log("It is prime num",isPrime);

  // }
  // return prime ? "It is a prime no" : "Not a prime no"
  
  let isPrime=false
  for(let i=2 ;i< num ;i++)
  {
    debugger
    if(num % i==0 )
    {
      isPrime=false
      break
    }
    else{

      isPrime=true
    }
  }
  return isPrime
}
const isPrimeCheck=primeNo(11);
console.log("Is Prime",isPrimeCheck);



const isPrime=(num , i=2)=>{
  // if(num <=1)
  // {
  //   return false
  // }
  // if(num == i)
  // {
  //     return true
  // }
  // if(num %i==0)
  // {
  //   return false
  // }
  // else{
  //   return isPrime(num, i+1)
  // }
  if(num <= 1)
  {
    return false
  }
  if(num == i)
  {
    return true
  }
  if(num % i ==0)
  {
    return false
  }
  else{
    return isPrime(num ,i+1)
  }
}
const numberToCheck = 110;
const result = isPrime(numberToCheck);

console.log(`${numberToCheck} is ${result ? 'prime' : 'not prime'}.`);