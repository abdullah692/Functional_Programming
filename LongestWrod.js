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
    let highest=0;
    let max;

    
    for(let i=0 ; i< words.length ;i++)
    {
        if(words[i].length > highest)
        {
            highest=words[i].length;
            max=words[i]
        }
    }
    return [highest,max]
};

const result = LongestString(string);
console.log(result);
