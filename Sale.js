const howManyGames = (p, d, m, s) => {

    let count =0;
    let price=p

    for(let i=0 ; s >= price; i++)
    {
        s-=price
        count++

        if(price - d >= m)
        {
            price-=d
        }
        else{
            price=m
        }
    }

    return count
}

const result = howManyGames(20, 3, 6, 80)
console.log(result);
