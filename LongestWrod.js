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

    let str=val.split(' ')
    console.log(str);
    
    let maxWords=0;
    let word;
    for(let char of str)
    {
        console.log(char);
        
        if(char.length > maxWords)
        {
            maxWords=char.length
            word=char
        }
    }
   return [word, maxWords]
};

const result = LongestString(string);
console.log(result);
