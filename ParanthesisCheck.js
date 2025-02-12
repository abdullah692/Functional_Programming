const isBalanced = (str) => {
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

    let arr = []
    let obj = {
        ")": "(",
        "}": "{",
        ']': '['
    }

    for (let char of str) {
        if (char == "(" || char == "{" || char == "[") {
            arr.push(char)
        } else if (char == ")" || char == "}" || char == "]") {
            if (obj[char] != char) {
                return false
            }
        }
    }
    return true
}



function isBalanceds(str) {
    //     const stack = [];
    //     const pairs = {
    //         '(': ')',
    //         '{': '}',
    //         '[': ']'
    //     };


    //     for(let char of str)
    //     {
    //         if(pairs[char])
    //             {
    //                 stack.push(char)
    //             }   


    //             else if(char == ")" || char == "}" || char == "]")
    //                 {
    //                     // console.log(stack);
    //                 if(pairs[stack.pop()] != char){
    //                     return false
    //                 }
    //              }
    //     }
    // return true

    let arr = []
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for(let char of str)
    {
        if(char == "(" || char == "{" || char == "[")
        {
            arr.push(char)   
        }else if(char == ")" || char == "}" || char == "]")
        {
            if(map[arr.pop()] != char)
            {
                return false
            }
        }
    }

    return arr.length==0


}



// Example usage
console.log(isBalanceds("(){}[]")); // true
console.log(isBalanceds("({[)]}")); // false
console.log(isBalanceds("({[]})")); // true
console.log(isBalanceds("({[")); // false
console.log(isBalanceds("")); // true



// console.log(isBalanced("({[]})")); // Output: true
// console.log(isBalanced("{[(])}"));
// console.log(isBalanced("(){}[]"));