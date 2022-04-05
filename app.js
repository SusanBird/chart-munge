// import functions and grab DOM elements
import { makePurchaseFrequencyCountMap } from './data-utils.js';
import { customers } from './data.js';


const countMap = makePurchaseFrequencyCountMap(customers);

console.log(countMap);

const labels = [
    'Daily',
    'Monthly',
    'Never',
    'Often',
    'Seldom',
    'Weekly',
    'Yearly',
];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Purchase Frequency Amounts',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [430, 59, 127, 240],
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

