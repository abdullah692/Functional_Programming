const cutStick = (arr) => {
    let stickOut = []
    let count = 0;

    while (arr.some((v)=> v > 0)) {
        let minVal = Math.min(...arr.filter((v)=> v> 0))
        console.log(minVal);

        for(let i=0; i< arr.length; i++)
        {
            
        }
        break;
        
    }

}

let arr = [1, 2, 3.4, 3, 3, 2, 1]
const result = cutStick(arr)