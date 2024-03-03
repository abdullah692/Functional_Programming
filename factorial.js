//FIrst method

const factorial = (num) => {
    //     let fact=1;
    //    for(let i=1; i <= num ; i++)
    //    {
    //         fact=fact *i
    //    }
    //    return fact;

    let fact = 1;
    for(let i=1; i<=num ; i++)
    {
        fact=fact*i
    }
        return fact;
}

const result = factorial(5)
console.log(`The factorial is `, result);

//With recursion

const factorialCheck = (num) => {
    //     if(num == 0 || num == 1)
    //     {
    //         return 1
    //     }
    //     else
    //     {
    //         return num * (factorialCheck(num - 1));
    //     }
    if(num ==0 || num== 1)
    {
        return 1
    }
    else{
        return num * factorialCheck(num -1)
    }
}

const check = factorialCheck(7)
console.log(check);






