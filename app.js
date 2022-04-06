/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
import { makeCoolFactorCountMap, makePurchaseFrequencyCountMap, makeGenderCountMap } from './data-utils.js';
import { customers } from './data.js';


const countMap = makePurchaseFrequencyCountMap(customers);
const coolFactorCountMap = makeCoolFactorCountMap(customers);
const genderCountMap = makeGenderCountMap(customers);

// const labels = [
//     'Daily',
//     'Monthly',
//     'Never',
//     'Often',
//     'Seldom',
//     'Weekly',
//     'Yearly',
// ];

console.log(countMap);
console.log(coolFactorCountMap);

const labels = Object.keys(countMap);

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Purchase Frequency Amounts',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: Object.values(countMap),
        },
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);





const coolLabels = Object.keys(coolFactorCountMap);

const coolData = {
    labels: coolLabels,
    datasets: [
        {
            label: 'Cool Factor Amounts',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: Object.values(coolFactorCountMap),
        },
    ]
};

const coolConfig = {
    type: 'line',
    data: coolData,
    options: {}
};

const coolMyChart = new Chart(
    document.getElementById('coolMyChart'),
    coolConfig
);





const genderLabels = Object.keys(genderCountMap);

const genderData = {
    labels: genderLabels,
    datasets: [
        {
            label: 'Gender Amounts',
            backgroundColor: ['black', 'green', 'blue', 'violet', 'yellow', 'orange', 'red', 'white', 'brown'],
            borderColor: 'rgb(255, 99, 132)',
            data: Object.values(genderCountMap),
        },
    ]
};

const genderConfig = {
    type: 'pie',
    data: genderData,
    options: {}
};

const genderMyChart = new Chart(
    document.getElementById('genderMyChart'),
    genderConfig
);