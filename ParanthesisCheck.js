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

    let stack = []
    let mapped={
        '(':')',
        '{':'}',
        '[':']',
    }
    for (let val of str) {
        if (val == '(' || val == '{' || val == '[') {
            stack.push(val)
            console.log(stack);
            // debugger
            
        }
        else if (val != mapped[val]) {
            if(mapped[stack.pop()] != val)
            {
                return false
            }
        }

    }

    return stack.length == 0
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