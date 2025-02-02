const isBalanced=(str)=>{
    // let arr=[]
    // let map={
    //     ')': '(',
    //     '}': '{',
    //     ']': '['
    // }
    // for(let char of str)
    // {
    //     if(char== "(" || char == "{" || char== "[")
    //     {
    //         arr.push(char)
    //     }
    //     else if(char == ")" || char == "}" || char == "]")
    //     {
    //         if(arr.pop() !== map[char])
    //         {
    //             return false;
    //         }
    //     }
    // }
    // return true

   let arr=[]
   let obj={
    ")":"(",
    "}":"{",
    ']':'['
   }

   for(let bracket of str)
   {
        if(bracket == "(" || bracket == "{" || bracket == "[" )
        {
            arr.push(bracket)
        }
        else if(bracket == ")" || bracket == "}" || bracket == "]" )
        {
            if(obj[bracket] != arr.pop())
            {
                return false
            }
        }
   }
return true
    
}



function isBalanceds(str) {
    const stack = [];
    const pairs = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
  

    for(let char of str)
    {
        if(pairs[char])
            {
                stack.push(char)
            }
            else if(Object.values(pairs).includes(char))
            {
                if(pairs[stack.pop()] != char)
                {
                    return false
                }
            }
    }

    return true
    console.log(stack);
    
    

}
  
  // Example usage
  console.log(isBalanceds("(){}[]")); // true
  console.log(isBalanceds("({[)]}")); // false
  console.log(isBalanceds("({[]})")); // true
  
// console.log(isBalanced("({[]})")); // Output: true
// console.log(isBalanced("{[(])}"));
// console.log(isBalanced("(){}[]"));