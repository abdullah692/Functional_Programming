const deliveries = [
  { city: "New York", packages: 5 },
  { city: "Los Angeles", packages: 8 },
  { city: "New York", packages: 3 },
  { city: "Chicago", packages: 7 },
  { city: "Los Angeles", packages: 4 }
];

//   {
//     "New York": { totalPackages: 8 },
//     "Los Angeles": { totalPackages: 12 },
//     "Chicago": { totalPackages: 7 }
//   }


const convertDeliveries = (deliveries) => {
  // let obj = {};
  // let maxVal = 0;
  // let maxcity = null;
  // for (let { city, packages } of deliveries) {
  //   obj[city] = { totalPackages: (obj[city]?.totalPackages || 0) + packages };

  //   if (obj[city].totalPackages > maxVal) {
  //     maxVal = obj[city].totalPackages
  //     maxcity = city
  //   }
  // }
  // return obj;

  let obj = {}
  let maxPackages = 0;
  let maxCity = null
  for (let { city, packages } of deliveries) {
    if (!obj[city]) {
      obj[city] = { totalPackages: 0 }
    }
    obj[city].totalPackages += packages

    if (obj[city].totalPackages > maxPackages) {
      maxPackages = obj[city].totalPackages
      maxCity = city
    }
  }
  return { city: maxCity, ...obj[maxCity] }
  // return Object.entries(obj).filter(([key,value])=> Math.max(value))
}



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
  // let obj = {}
  // let highestScore = 0;
  // for (let value of player) {

  //   let levels = value.score <= 500 ? "Beginner" :
  //     value.score <= 1500 ? "Intermediate"
  //       : "Advanced"

  //   if (!obj[levels]) {
  //     obj[levels] = []
  //   }
  //   obj[levels].push(value.name)

  //   if (value.score > highestScore) {
  //     highestScore = value.score
  //   }
  // }
  // return { categories: obj, highestScorer: highestScore }

  let obj = {}
  let highestScore = 0
  let maxLevel = null
  for (let { name, score } of player) {
    let levels = score <= 500 ? "Beginner" :
      score <= 1500 ? "Intermediate" : "Advanced"

    if (!obj[levels]) {
      obj[levels] = []
    }
    obj[levels].push(name)

    if (score > highestScore) {
      highestScore = score
      maxLevel = levels
    }
  }
  console.log(obj, "levels");
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => key == maxLevel))

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
  // let obj = {}
  // let highestFlights = null
  // let maxFlight = 0;

  // for (let val of flights) {
  //   let { flight, airline, time } = val
  //   if (!obj[airline]) {
  //     obj[airline] = []
  //   }
  //   obj[airline].push(`${flight} (${time})`)
  //   // console.log(obj[airline]);

  //   if (obj[airline].length > maxFlight) {
  //     maxFlight = obj[airline].length
  //     highestFlights = { airline: obj[airline] }
  //   }
  // }
  // return { flights: obj, highestFlights }

  let obj = {}
  let highestFlights = null
  let maxFlight = 0
  for (let { flight, airline, time } of flights) {
    if (!obj[airline]) {
      obj[airline] = []
    }
    obj[airline].push(`${flight} (${time})`)

    if (obj[airline].length > maxFlight) {
      maxFlight = obj[airline].length
      highestFlights = airline
    }
  }
  return { airline: highestFlights, flights: obj[highestFlights] }
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

  // let obj = {}
  // let maxGoals=0
  // for (let { name, team, goals } of players) {
  //   if (!obj[team]) {

  //     obj[team] = { players: [], totalGoals: 0 }
  //   }
  //   obj[team].players.push(name)
  //   obj[team].totalGoals += goals

  //   if(obj[team].totalGoals > maxGoals)
  //   {
  //     maxGoals=obj[team].totalGoals
  //   }
  // }

  // return {obj, maxGoals}

  let obj = {}
  let highestGoals = 0
  let WinningTeam = null
  for (let { name, team, goals } of players) {
    if (!obj[team]) {
      obj[team] = { players: [], totalGoals: 0 }
    }

    obj[team].players.push(name)
    obj[team].totalGoals += goals

    if (obj[team].totalGoals > highestGoals) {
      highestGoals = obj[team].totalGoals
      WinningTeam = team
    }

  }
  console.log(obj);

  return { team: WinningTeam, goals: highestGoals, players: obj[WinningTeam].players }

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

const Books = (books) => {
  // let obj={}

  // for(let val of books)
  // {
  //   if(!obj[val.author])
  //   {
  //     obj[val.author]=[]
  //   }
  //   obj[val.author].push(val.title)
  // }
  // return Object.fromEntries(Object.entries(obj).sort((a,b)=>a.title-b.title))

  let obj = {}
  for (let { title, author } of books) {
    if (!obj[author]) {
      obj[author] = []
    }
    obj[author].push(title)
  }

  return Object.fromEntries(Object.entries(obj).sort((a, b) => a.title - b.title))
}
const results = Books(books)
console.log(results, "books");


const posts = [
  { user: "Alice", hashtags: ["#food", "#travel"] },
  { user: "Bob", hashtags: ["#fitness", "#travel"] },
  { user: "Charlie", hashtags: ["#food", "#health"] }
];

// {
//   "#food": ["Alice", "Charlie"],
//   "#travel": ["Alice", "Bob"],
//   "#fitness": ["Bob"],
//   "#health": ["Charlie"]
// }

const convertPost = (post) => {
  // let obj={}
  // for(let {user,hashtags} of post)
  //   {
  //     for(let tags of hashtags)
  //     {
  //       if(!obj[tags])
  //       {
  //         obj[tags]=[]
  //       }
  //       obj[tags].push(user)
  //     }
  //   } 
  // return obj

  let obj = {}
  for (let { hashtags, user } of post) {
    for (let tags of hashtags) {
      if (!obj[tags]) {
        obj[tags] = []
      }
      obj[tags].push(user)
    }
  }
  return obj

}
const reusltPost = convertPost(posts)
console.log(reusltPost, "reusltPost");


const transformToPosts = (hashtagMap) => {
  //   let userMap = {};
  // console.log(Object.entries(hashtagMap),"Object.entries(hashtagMap)");

  //   for (let [tag, users] of Object.entries(hashtagMap)) {
  //     console.log("tag",tag ,"users",users);

  //     users.forEach(user => {
  //       if (!userMap[user]) {
  //         userMap[user] = [];
  //       }
  //       userMap[user].push(tag);
  //     });
  //   }
  //   console.log(userMap);
  //   return Object.entries(userMap).map(([user, hashtags]) => ({
  //     user,
  //     hashtags
  //   }));


}
const input = {
  "#food": ["Alice", "Charlie"],
  "#travel": ["Alice", "Bob"],
  "#fitness": ["Bob"],
  "#health": ["Charlie"]
};

const values = transformToPosts(input)
console.log(values);


const movies = [
  { title: "Inception", genre: "Sci-Fi" },
  { title: "Interstellar", genre: "Sci-Fi" },
  { title: "Titanic", genre: "Romance" },
  { title: "The Notebook", genre: "Romance" },
  { title: "Avengers", genre: "Action" }
];

// {
//   "Sci-Fi": ["Inception", "Interstellar"],
//   "Romance": ["Titanic", "The Notebook"],
//   "Action": ["Avengers"]
// }

const moviesConvert = (movie) => {
  let obj = {}
  let genreCount = {}

  for (let { title, genre } of movie) {
    if (!obj[genre]) {
      obj[genre] = []
    }
    obj[genre].push(title)
    genreCount[genre] = (genreCount[genre] || 0) + 1

  }
  return { obj, genreCount }
}

const moviesResult = moviesConvert(movies)
console.log(moviesResult);


const peoples = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 }
];


// {
//   25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
//   30: [{ name: "Bob", age: 30 }, { name: "David", age: 30 }]
// }

const peopleGroup = (arr) => {
  let obj = {}
  for (let { name, age } of arr) {
    if (!obj[age]) {
      obj[age] = []
    }
    obj[age].push({ name, age })
  }
  return obj
}

const peopleResult = peopleGroup(peoples)
console.log(peopleResult);

//-----------------------------------------------------------------------

const fruits = [
  { name: "Apple", type: "Fruit" },
  { name: "Carrot", type: "Vegetable" },
  { name: "Banana", type: "Fruit" },
  { name: "Spinach", type: "Vegetable" }
];

// { Fruit: 2, Vegetable: 2 }

const fruitsOccurance = (fruits) => {
  let obj = {}

  for (let { name, type } of fruits) {

    obj[type] = (obj[type] || 0) + 1

  }
  return obj
}

const resultFruits = fruitsOccurance(fruits)
console.log(resultFruits);

//..............................................................................

const employees = [
  { department: "HR", name: "Alice", age: 28, position: "Manager", salary: 60000 },
  { department: "IT", name: "Bob", age: 25, position: "Developer", salary: 50000 },
  { department: "HR", name: "Charlie", age: 30, position: "Recruiter", salary: 45000 },
  { department: "IT", name: "David", age: 32, position: "System Admin", salary: 55000 },
  { department: "Finance", name: "Eve", age: 29, position: "Accountant", salary: 48000 }
];

// {
//   HR: { 
//     Alice: { age: 28, position: "Manager", salary: 60000 }, 
//     Charlie: { age: 30, position: "Recruiter", salary: 45000 } 
//   },
//   IT: { 
//     Bob: { age: 25, position: "Developer", salary: 50000 }, 
//     David: { age: 32, position: "System Admin", salary: 55000 } 
//   },
//   Finance: { 
//     Eve: { age: 29, position: "Accountant", salary: 48000 } 
//   }
// }


const employeesFetch = (employee) => {
  let obj={}
  for(let {department,name,age,position,salary} of employee)
  {
    if(!obj[department])
    {
        obj[department]={}
    }
    obj[department][name]={age,position,salary}

  }
  console.log(obj);
  
}

const employeeResult = employeesFetch(employees)

//-------------------------------------------------------------------------

const data = [
  { id: 1, value: 10 },
  { id: 2, value: 15 },
  { id: 1, value: 20 }
];

// { 1: { value: 30 }, 2: { value: 15 } }

const mergeObj=(data)=>{
  let obj={}
  for(let {id,value} of data)
  {
    if(!obj[id])
    {
      obj[id]={value:0}
    }
    obj[id].value+=value
  }
  console.log(obj);
  
}

const resultMerge=mergeObj(data)
console.log(resultMerge);


//---------------------------------------------------------------------------

const orders = [
  { customer: "John", item: "Laptop" },
  { customer: "Jane", item: "Phone" },
  { customer: "John", item: "Tablet" },
  { customer: "Jane", item: "Phone" },
  { customer: "John", item: "Phone" }
];


//Most purchased item: "Phone"

const mostOrder=(orders)=>{
  let obj={}
  let mostItem=null
  let itemCount=0

  for(let {item} of orders)
  {
    obj[item]=(obj[item] || 0)+1
    if(obj[item] > itemCount)
    {
      itemCount=obj[item]
      mostItem=item
    }
  }
  
  return `Most purchased item:${mostItem} and its count is ${itemCount}`
}

const resultMost=mostOrder(orders)
console.log(resultMost);


