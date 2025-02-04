// const ClockAngle=(hours,min)=>{
//     if(hours >= 12)
//     {
//         hours-=12
//     }

//     let minCal= 360/60;
//     console.log("minCal",minCal);

//     let hrsCal= 360/12
//     console.log("hrsCal",hrsCal);

//     let hrsMinCal = hrsCal/60
//     console.log("hrsMinCal",hrsMinCal);



//     let minAngle= min * minCal
//     console.log("minAngle",minAngle);

//     let hrsAngle = (hours * hrsCal) + (min * hrsMinCal)
//     console.log(hrsAngle,"hrsAngle");


//     let angle=Math.abs(hrsAngle - minAngle)
//     console.log(angle);


//     if(angle > 180)
//     {
//         angle=360-angle
//     }

//     // console.log(angle,"angle");

//     return angle



// }

const ClockAngle = (hours, min) => {
    if(hours >= 12)
    {
        hours-=12
    }

    let minCal=360/60
    let hrsCal=360/12
    let hrsMinCal=hrsCal/60

    let minAngle=min * minCal
    let hrsAngle=(hours * hrsCal) + (min * hrsMinCal)

    let angle=Math.abs(hrsAngle-minAngle)
    if(angle > 180)
    {
        angle=360-angle
    }
    return angle
    // if (hours >= 12) {
    //     hours -= 12
    // }

    // let minCal=360/60;
    // let hrsCal=360/12
    // let hrsMin=hrsCal/60

    // let minAngle=min * minCal
    // let hrsAngle= (hours * hrsCal)+(min * hrsMin)

    // let angle= Math.abs(hrsAngle - minAngle)
    // if(angle > 180)
    // {
    //     angle=360-angle
    // }
    // return angle
}

console.log(ClockAngle(3, 30));  // Output: 75 degrees
console.log(ClockAngle(12, 0));  // Output: 0 degrees
console.log(ClockAngle(6, 45));  // Output: 90 degrees
console.log(ClockAngle(9, 5));

// const result=ClockAngle(3,30)
// console.log(result);
