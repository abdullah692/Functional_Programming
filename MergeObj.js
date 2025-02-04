let obj1 = {
  A: [2],
  B: [3, 5],
  C: [9],
};
let obj2 = {
  A: [4],
  B: [5, 8],
  D: [88],
};

const merge = (obj1, obj2) => {
  let obj = {};
  // for(let key in {...obj1, ...obj2})
  // {

  //   console.log(key);
    
  //   if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key))
  //   {
  //     obj[key]=[... new Set(obj1[key].concat(obj2[key]))]
  //   }
  //   else if(obj1.hasOwnProperty(key))
  //   {
  //     obj[key]=obj1[key]
  //   }
  //   else{
  //     obj[key]=obj2[key]
  //   }
    
  // }


for(let key in {...obj1, ...obj2})
{
    if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key))
    {
        obj[key]=obj1[key].concat(obj2[key])
    }
    else if(obj1.hasOwnProperty(key))
    {
      obj[key]=obj1[key]
    }
    else{
      obj[key]=obj2[key]
    }
}

  console.log(obj,"obj");
  

  let objc={...obj1,...obj2}
  console.log(objc,"objc");
  
//  for(let key in {...obj1, ...obj2})
//  {
//     if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key))
//     {
//         obj[key]=[... new Set(obj1[key].concat(obj2[key]))]
//     }
//     else if(obj1.hasOwnProperty(key))
//     {
//       obj[key]=obj1[key]
//     }
//     else{
//       obj[key]=obj2[key]
//     }
//  }
//  console.log(obj);
 };
console.log(merge(obj1, obj2))

// function merge(obj1, obj2) {
//     let obj={};
//     for(let keys in obj1)
//     {
//         obj[keys]=obj1[keys]
//     }
// console.log(obj);

// for(let keys in obj2)
// {
//     if(obj.hasOwnProperty(keys))
//     {
//         obj[keys]=obj[keys].concat(obj2[keys])
//     }
//     else{
//         obj[keys]=obj2[keys]
//     }
// }

// for (let key in obj) {
//     let uniqueValues = Array.from(new Set(obj[key]));
//     obj[key] = uniqueValues;
// }
// console.log(obj);

//     }

// function merge(obj1, obj2) {
// let obj={
//     ...obj1,
//     ...obj2
// }
// console.log(obj);
// Object.keys(obj1).forEach(key => {
//     console.log(obj2[key]);
//     debugger
//     if(obj2[key]){
//        obj[key] = [ ...obj1[key], ...obj2[key]]
//     }
//     console.log(obj);
// });
// for (let key in obj) {
//     let uniqueValues = Array.from(new Set(obj[key]));
//     obj[key] = uniqueValues;
// }

// console.log(obj);

// }

// should give { A:[2,4], B: [3,5,8] }
