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

    let word;
    let maxCount=0;
    let splitWord=val.split(" ")
    for(let char of splitWord)
    {
        if(char.length > maxCount)
        {
            maxCount=char.length
            word=char
        }
    }
    return [maxCount,word]
};

const result = LongestString(string);
console.log(result);
