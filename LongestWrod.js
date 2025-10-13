const string = "Hello my name is Abdullah Siddiquicxcxc";

const LongestString = (val) => {
    // const stringArray=val.split(" ");
    // console.log(stringArray);
    // let highest=0;
    // let valueChar;
    // for(let char of stringArray)
    // {
    //     let length=char.length;
    //     if(length >= highest)
    //     {
    //         highest=length;
    //         valueChar=char
    //     }
    // }
    // return valueChar

    let maxChar=0
    let maxWord=null;

    let splitStr=val.split(' ');

    for(let word of splitStr)
    {
        if(word.length > maxChar)
        {
            maxChar=word.length;
            maxWord=word
        }
    }

    return [maxChar,maxWord]

    // let maxChar=0;
    // let maxWord=null
    // let sortWords=val.split(' ')

    // for(let char of sortWords)
    // {
    //     if(char.length >= maxChar)
    //     {
    //         maxChar=char.length;
    //         maxWord=char
    //     }
    // }

    // return [maxChar, maxWord]
};

const result = LongestString(string);
console.log(result);
