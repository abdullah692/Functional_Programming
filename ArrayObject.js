const deliveries = [
  { city: "New York", packages: 5 },
  { city: "Los Angeles", packages: 8 },
  { city: "New York", packages: 3 },
  { city: "Chicago", packages: 7 },
  { city: "Los Angeles", packages: 4 }
];

const convertDeliveries = (deliveries) => {
  let obj = {};
  let maxVal = 0;
  let maxcity = null;
  for (let { city, packages } of deliveries) {
    obj[city] = { totalPackages: (obj[city]?.totalPackages || 0) + packages };

    if (obj[city].totalPackages > maxVal) {
      maxVal = obj[city].totalPackages
      maxcity = city
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

const result = convertDeliveries(deliveries)
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

const playerFind = (player) => {
  let obj = {}
  let highestScore = 0;
  for (let value of player) {

    let levels = value.score <= 500 ? "Beginner" :
      value.score <= 1500 ? "Intermediate"
        : "Advanced"

    if (!obj[levels]) {
      obj[levels] = []
    }
    obj[levels].push(value.name)

    if (value.score > highestScore) {
      highestScore = value.score
    }
  }
  return { categories: obj, highestScorer: highestScore }

}

const val = playerFind(players)
console.log(val);


const flights = [
  { flight: "AA101", airline: "American Airlines", time: "10:00 AM" },
  { flight: "UA202", airline: "United Airlines", time: "11:30 AM" },
  { flight: "AA303", airline: "American Airlines", time: "1:45 PM" },
  { flight: "UA404", airline: "United Airlines", time: "3:20 PM" },
  { flight: "UA405", airline: "United Airlines", time: "4:20 PM" }
];

// {
//   "American Airlines": ["AA101 (10:00 AM)", "AA303 (1:45 PM)"],
//   "United Airlines": ["UA202 (11:30 AM)", "UA404 (3:20 PM)"]
// }

const flightsRes = (flights) => {
  let obj = {}
  let highestFlights = null
  let maxFlight = 0;

  for (let val of flights) {
    let { flight, airline, time } = val
    if (!obj[airline]) {
      obj[airline] = []
    }
    obj[airline].push(`${flight} (${time})`)
    // console.log(obj[airline]);

    if (obj[airline].length > maxFlight) {
      maxFlight = obj[airline].length
      highestFlights = { airline: obj[airline] }
    }
  }
  return { flights: obj, highestFlights }
}

const resultFlight = flightsRes(flights)
console.log(resultFlight);


const Footballplayers = [
  { name: "Messi", team: "PSG", goals: 30 },
  { name: "Ronaldo", team: "Man Utd", goals: 25 },
  { name: "Neymar", team: "PSG", goals: 15 },
  { name: "Bruno", team: "Man Utd", goals: 10 }
];

// {
//   "PSG": { players: ["Messi", "Neymar"], totalGoals: 45 },
//   "Man Utd": { players: ["Ronaldo", "Bruno"], totalGoals: 35 }
// }

const footPlayer = (players) => {

  let obj = {}
  let maxGoals=0
  for (let { name, team, goals } of players) {
    if (!obj[team]) {

      obj[team] = { players: [], totalGoals: 0 }
    }
    obj[team].players.push(name)
    obj[team].totalGoals += goals

    if(obj[team].totalGoals > maxGoals)
    {
      maxGoals=obj[team].totalGoals
    }
  }

  return {obj, maxGoals}

}
const valFootlball = footPlayer(Footballplayers)
console.log(valFootlball);

const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "1984", author: "George Orwell" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
  { title: "Animal Farm", author: "George Orwell" }
];

// {
//   "J.R.R. Tolkien": ["The Hobbit", "The Lord of the Rings"],
//   "George Orwell": ["1984", "Animal Farm"]
// }

const Books=(books)=>{
  let obj={}

  for(let val of books)
  {
    if(!obj[val.author])
    {
      obj[val.author]=[]
    }
    obj[val.author].push(val.title)
  }
  return Object.fromEntries(Object.entries(obj).sort((a,b)=>a.title-b.title))
}
const results=Books(books)
console.log(results);

