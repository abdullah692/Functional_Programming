const countVowels=(str)=>{

    // let vowels ='aeiouAEIOU'
    // let count=0;
    // for(let char of str)
    // {
    //     if(vowels.includes(char))
    //     {
    //         count++;

    //     }
         
    // }

    // return count

    // let vowels='aeiouAEIOU'
    // let count=0
    // for(let char of str)
    // {
    //     if(vowels.includes(char))
    //     {
    //         count++
    //     }
    // }

    // return count

    let vowels='AEIOUaeiou';
    let count=0;

    for(let val of str)
    {
        if(vowels.includes(val))
        {
            count++
        }
    }
    return count
}


console.log(countVowels("Hello World")); // 3
console.log(countVowels("My name is Abdullah Siddiqui")); // 10
console.log(countVowels("This is a cat")); // 4
console.log(countVowels("It is raining outside")); // 9


let a=1
debugger
console.log(a++);
console.log(++a);


// a= a++ + ++a
console.log(a)


