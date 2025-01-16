const isBalanced=(str)=>{
    let arr=[]
    let map={
        ')': '(',
        '}': '{',
        ']': '['
    }
    for(let char of str)
    {
        if(char== "(" || char == "{" || char== "[")
        {
            arr.push(char)
        }
        else if(char == ")" || char == "}" || char == "]")
        {
            if(arr.pop() !== map[char])
            {
                return false;
            }
        }
    }
    return true
    
}

console.log(isBalanced("({[]})")); // Output: true
console.log(isBalanced("{[(])}"));
console.log(isBalanced("(){}[]"));