const string = "Hello my name is Abdullahs Siddiqui";

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

    let words=val.split(" ");
    let highest=-1;
    let word;
    for(let char of words)
    {
        if(char.length > highest)
        {
            highest=char.length;
            word=char;
        }
    }
    return [word,highest]
};

const result = LongestString(string);
console.log(result);
