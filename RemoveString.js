function superReducedString(s) {
    // Write your code here

    let flag = false;
    for (let i = 0; i < s.length; i++) {

        debugger
        if (s[i] == s[i + 1]) {
            let indexOfS = s.indexOf(s[i])
            console.log("s.substring(0,indexOfS)", s.substring(0, indexOfS));
            console.log(".substring(indexOfS+1,s.length)", s.substring(indexOfS + 1, s.length));


            s = s.substring(0, i) + s.substring(i + 1, s.length)
            console.log(s, "s")
            flag = true

        }
    }

    if (!flag) {
        return s
    }
    return superReducedString(s)

}


const result = superReducedString("aaabccddd")
console.log(result);
