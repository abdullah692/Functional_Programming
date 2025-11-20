const AppendDelete = (s, t, k) => {

    let count = 0;
    let comman = ''
    let notComman = ''

    for (let i = 0; i < s.length && i < t.length; i++) {
        if (s[i] == t[i]) {
            comman += s[i]
        }
        else{
            break;
        }
    }
    // console.log(comman,"comman");
    notComman= s.slice(comman.length)
    count=notComman.length
    // console.log(count);
    let appendValue=t.slice(comman.length)
    // console.log(appendValue,"appendValue");
    for(let val of appendValue)
    {
        comman+=val
        count++
    }

    // console.log("COUNT",count);
    
    if(count == k)
    {
        return "YES"
    }
    
    if(k >= s.length + t.length)
    {
        return "YES"
    }

    if(k > count)
    {
        if((k - count) % 2 == 0)
        {
            return "YES"
        }
    }


    return "NO"  
    
}

    console.log(AppendDelete("hackerhappy", "hackerrank", 9)) //YES
    console.log(AppendDelete("ashley", "ash", 2))  //NO
    console.log(AppendDelete("aba", "aba", 7))  //YES
    console.log(AppendDelete("aaaaaaaaaa", "aaaaa", 7)) //YES
    console.log(AppendDelete("zzzzz", "zzzzzzz", 4)) //YES
    console.log(AppendDelete("aaa", "a", 5))  //YES
