let str="aba"
let n=10

const repeatString=(str,n)=>{
    let count=0;
    let strLen=str.length;
    let stnPrint=""
    let i=0;
    while(i != n)
    {
        for(let x=0; x< strLen; x++)
        {
            stnPrint+=str[x]
            i++
            if(i == n)
            {
                break;
            }
            
        }
    }
    let filterVal = stnPrint.split('').filter((val)=> val == "a").length
    return filterVal
}

console.log(repeatString(str,n))
