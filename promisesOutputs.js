function fetchData(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value < 10) reject("Value too low");
       else resolve(value * 2);
      }, 1000);
    });
  }
  
  fetchData(5)
    .then((result) => fetchData(result))
    .then((result) => fetchData(result))
    .then((result) => fetchData(result))
    .catch(console.error);
  
// Callback hell

    // function step1(data, callback) {
    //     setTimeout(() => {
    //       callback(null, data + 1);
    //     }, 1000);
    //   }
      
    //   function step2(data, callback) {
    //     setTimeout(() => {
    //       callback(null, data * 2);
    //     }, 1000);
    //   }
      
    //   function step3(data, callback) {
    //     setTimeout(() => {
    //       callback(null, data - 3);
    //     }, 1000);
    //   }
      
    //   step1(5, (err, res1) => {
    //     step2(res1, (err, res2) => {
    //       step3(res2, (err, res3) => {
    //         console.log("Final Result:", res3);
    //       });
    //     });
    //   });
      

const step1=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data+1)
        },1000)
    })
}

const step2=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data * 2)
        },1000)
    })
}

const step3=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data -3)
        },1000)
    })
}


// Must write return if we have {}
step1(5)
.then((res)=>{
    return step2(res)
}).then((res)=>{
   return step3(res)
}).then((res)=>{
    console.log("The result is",res);
}).catch((err)=>{
    console.log("The error is",err);
    
})



// async function fetchData(value) {
//     if (value < 10) throw new Error("Value too low");
//     return value * 2;
//   }
  
//   async function process() {
//     try {
//       let res1 = await fetchData(5).catch(()=> 10);
//       let res2 = await fetchData(res1);
//       let res3 = await fetchData(res2);
//       console.log("Final result:", res3);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   }
  
//   process();



  function fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve("Data"), 1000));
  }
  
  async function process() {
    let data = fetchData();
    console.log(await data);
    data.then(console.log);
  }
  
  process();
  
  