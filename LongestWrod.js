const string = "Hello my name is Abdullahas Siddiqui";

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


    let stringArray = val.split(" ");
    console.log(stringArray);
    let maxLength = 0;
    let word;

    for (let char of stringArray) {
        if (char.length >= maxLength) {
            maxLength = char.length
            word = char
        }
    }
    return [maxLength, word]
};

const result = LongestString(string);
console.log(result);
