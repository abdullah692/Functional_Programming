const obj1={
    name:'Abdullah'
  }
  // const obj2=obj1;
  // obj2.name="Usman"


  const obj2={... obj1}
  obj2.name='Usman'
  
  console.log(obj1.name);
  console.log(obj2.name);


  
  const originalObject = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Exampleville',
    },
  };
  

  const deepCopy1= JSON.parse(JSON.stringify(originalObject))

  deepCopy1.name='ALi'
  deepCopy1.address.city='Karachi'

  console.log(deepCopy1);
  console.log(originalObject);

  

  // Create a deep copy using JSON methods
  const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
  
  // Modify the deep copy
  deepCopyObject.name = 'Alice';
  deepCopyObject.address.street = '456 Elm St';
  
  console.log('Original Object:', originalObject);
  console.log('Deep Copy:', deepCopyObject);
  


  //Shallow Copy
  const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

//   const shallowCopy={...obj};
// shallowCopy.name="Ahmed" 
// shallowCopy.additionalInfo.version="5"
// console.log(shallowCopy); 
// console.log(obj); 

const shallowCopy1= Object.assign({},obj)
shallowCopy1.name="Versioin6"
shallowCopy1.additionalInfo.version="9"

console.log(shallowCopy1,"shallowCopy1");
console.log(obj,"obj");




//Deep Copy
const a = { name: 'Version 1', additionalInfo: { version: 1 } };

const deepCopy = JSON.parse(JSON.stringify(a));

deepCopy.name = 'Version 2';
deepCopy.additionalInfo.version = 2;

console.log(a); // { name: 'Version 1', additionalInfo: { version: 1 } }
console.log(deepCopy);