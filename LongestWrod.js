const string = "Hello my name is Abdullah Siddiqui";

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

    
    let stringValue=val.split(" ");
    let maxLength=0;
    let maxWord;
    console.log(stringValue);
    for(let char of stringValue)
    {
        // console.log(char.length);
        
        if(char.length >= maxLength)
        {
            maxLength=char.length;
            maxWord=char;
        }
    }

    return [maxLength,maxWord]
    
};

const result = LongestString(string);
console.log(result);
