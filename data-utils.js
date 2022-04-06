
//   const countMap = {
//     Once: 213, 
//     Daily: 532,
//     Yearly: 127, 
//     Seldom: 240,
// };



export function makePurchaseFrequencyCountMap(customers) {

    const countMap = {};

    for (let customer of customers) {
    
        const frequency = customer.purchase_frequency;

        if (countMap[frequency]) {

            countMap[frequency]++;
        } else {

            countMap[frequency] = 1;
        }
    }

    return countMap;
}

export function makeCoolFactorCountMap(customers) {

    const countMap = {};

    for (let customer of customers) {
    
        const frequency = customer.cool_factor;

        if (countMap[frequency]) {

            countMap[frequency]++;
        } else {

            countMap[frequency] = 1;
        }
    }

    return countMap;
}

export function makeGenderCountMap(customers) {

    const countMap = {};

    for (let customer of customers) {
    
        const frequency = customer.gender;

        // if (frequency === 'Non-binary'){
        //     frequency = 'nonBinary';
        // }

        if (countMap[frequency]) {

            countMap[frequency]++;
        } else {

            countMap[frequency] = 1;
        }
    }

    return countMap;
}