const deliveries = [
    { city: "New York", packages: 5 },
    { city: "Los Angeles", packages: 8 },
    { city: "New York", packages: 3 },
    { city: "Chicago", packages: 7 },
    { city: "Los Angeles", packages: 4 }
  ];

  const convertDeliveries=(deliveries)=>{
    let obj = {};
    let maxVal=0;
    let maxcity=null;
    for (let { city, packages } of deliveries) {
        obj[city] = { totalPackages: (obj[city]?.totalPackages || 0) + packages };

        if(obj[city].totalPackages > maxVal)
        {
            maxVal=obj[city].totalPackages 
            maxcity=city
        }
    }
    return obj;

    // return Object.entries(obj).filter(([key,value])=> Math.max(value))
  }


//   {
//     "New York": { totalPackages: 8 },
//     "Los Angeles": { totalPackages: 12 },
//     "Chicago": { totalPackages: 7 }
//   }
  
  const result=convertDeliveries(deliveries)
  console.log(result);
  


  const players = [
    { name: "Alice", score: 900 },
    { name: "Bob", score: 1200 },
    { name: "Charlie", score: 450 },
    { name: "John", score: 400 },
    { name: "David", score: 2000 }
  ];

//   Output
//   {
//     "Beginner": ["Charlie"],
//     "Intermediate": ["Alice", "Bob"],
//     "Advanced": ["David"]
//   }
  
const playerFind=(player)=>{
    let obj={}
    let highestScore=0;
    for(let value of player)
    {
     
        let levels=value.score <= 500 ? "Beginner" :
        value.score <= 1500 ? "Intermediate" 
        : "Advanced"

        if(!obj[levels])
        {
            obj[levels]=[]
        }
        obj[levels].push(value.name)

        if(value.score > highestScore)
        {
            highestScore=value.score
        }
    }
    return {categories: obj , highestScorer:highestScore}
    
}

const val=playerFind(players)
console.log(val);
