const countVowels=(str)=>{

    let vowels ='aeiouAEIOU'
    let count=0;
    for(let char of str)
    {
        if(vowels.includes(char))
        {
            count++;

        }
         
    }

    return count
}


console.log(countVowels("Hello World")); // 3
console.log(countVowels("My name is Abdullah Siddiqui")); // 10
console.log(countVowels("This is a cat")); // 4
console.log(countVowels("It is raining outside")); // 9


