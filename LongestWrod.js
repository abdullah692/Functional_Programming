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

    let splitWords=val.split(" ")
    let maxLength=0
    let word;
    for(let i=0 ; i<splitWords.length ; i++)
    {
        if(splitWords[i].length > maxLength)
        {
            maxLength=splitWords[i].length
            word=splitWords[i]
        }
    }

    return [maxLength,word]
   
};

const result = LongestString(string);
console.log(result);
