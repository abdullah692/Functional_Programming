const distributeParkingSlots = (cars) => {
    let result = { L: 0, M: 0, S: 0 };
    let slots = { L: 3, M: 2, S: 1 }; // Large holds 3 cars, Medium 2, Small 1

    for (let [slot, capacity] of Object.entries(slots)) {
        console.log(slot,capacity);
        let count=Math.floor(cars/capacity)
        result[slot]=count
        cars-=count
        
        
    }

    return result;
};

console.log(distributeParkingSlots(7)); // { L: 2, M: 3, S: 2 }
