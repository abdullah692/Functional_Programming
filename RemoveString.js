
    //------------------------------- make identical valeus as one make "aa" as "a"---------------------------

function superReducedString(s) {
    // Write your code here

    //     let flag = false;
    //     for (let i = 0; i < s.length; i++) {

    //         // debugger
    //         if (s[i] == s[i + 1]) {
    //             // let indexOfS = s.indexOf(s[i])
    //             // console.log("s.substring(0,indexOfS)", s.substring(0, indexOfS));
    //             console.log(".substring(indexOfS+1,s.length)", s.substring(i + 1, s.length));
    // debugger

    //             s = s.substring(0, i) + s.substring(i + 1, s.length)
    //             console.log(s, "s")
    //             flag = true

    //         }
    //     }

    //     if (!flag) {
    //         return s
    //     }
    //     return superReducedString(s)



    let flag = false
    for (let i = 0; i < s.length; i++) {
        debugger
        if (s[i] == s[i + 1]) {
            s = s.substring(0, i) + s.substring(i + 1, s.length)
            flag = true
        }

    }

    if (!flag) {
        return s
    }


    return superReducedString(s)
}


//------------------------------------------------------------ Stack method ------------------------------------------------------------

//---------- Remove the same identical values and make it empty -----------------------
// like    ---- aa make it "" -------
const superReducedString2=(s)=>{

    let stack=[]

    for(let char of s)
        {
        if(stack.length && stack[stack.length - 1] == char)
        {
            stack.pop()
        }
        else{
            stack.push(char)
        }
    }


    return stack.length ? stack.join('') : "Empty String"
}


const result = superReducedString2("aaabccddd")
console.log(result);
