// const obj = {
//     name: "Alice",
//     regularFunction: function () {
//       console.log(this.name);
//     },
//     arrowFunction: () => {
//       console.log(this.name);
//     },
//   };
  
//   obj.regularFunction(); // ?
//   obj.arrowFunction(); // ?

  
//   const obj = {
//     name: "Bob",
//     greet: function () {
//       setTimeout(function () {
//         console.log(this.name);
//       }, 1000);
//     },
//   };
  
//   obj.greet(); // ?
  

//   const obj = {
//     name: "Charlie",
//     greet: function () {
//       setTimeout(() => {
//         console.log(this.name);
//       }, 1000);
//     },
//   };
  
//   obj.greet(); // ?
  


  const obj1 = {
    name: "David",
    sayName: function () {
      console.log(this.name);
    },
  };
  
  const obj2 = { name: "Eve" };
  obj2.sayName = obj1.sayName;
  obj2.sayName(); // ?

  
  const obj = {
    name: "Frank",
    say: (function () {
      console.log(this.name);
    })(),
  };
  
