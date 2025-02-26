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


    let count=0
    let maxWord=null
    let sortVal=val.split(' ')

    for(let val of sortVal)
    {
        if(val.length > count)
        {
            count=val.length
            maxWord=val
        }
    }

    return {count,maxWord}
};

const result = LongestString(string);
console.log(result);
