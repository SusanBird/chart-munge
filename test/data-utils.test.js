// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { makePurchaseFrequencyCountMap, makeCoolFactorCountMap, makeGenderCountMap } from '../data-utils.js';
import { customers } from '../data.js';

const test = QUnit.test;

test('takes in customer data and returns a purchase frequency countMap', (expect) => {
    
    // ['Once', 'Daily', 'Yearly', 'Seldom'];
    // [0, 10, 5, 30, 20, 30, 45];

    const countMap = {
        Daily: 142,
        Monthly: 123,
        Never: 123,
        Often: 126,
        Once: 107, 
        Seldom: 129,
        Weekly: 122,
        Yearly: 128
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = countMap;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makePurchaseFrequencyCountMap(customers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('takes in customer data and returns a cool factor countMap', (expect) => {
    
    // ['Once', 'Daily', 'Yearly', 'Seldom'];
    // [0, 10, 5, 30, 20, 30, 45];

    const countMap = {
        1: 109,
        2: 119,
        3: 99,
        4: 101,
        5: 93, 
        6: 102,
        7: 101,
        8: 99,
        9: 82,
        10: 95
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = countMap;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeCoolFactorCountMap(customers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('takes in customer data and returns a gender frequency countMap', (expect) => {
    
    // ['Once', 'Daily', 'Yearly', 'Seldom'];
    // [0, 10, 5, 30, 20, 30, 45];

    const countMap = {
        Agender: 17,
        Bigender: 14,
        Female: 457,
        Genderfluid: 18,
        Genderqueer: 11,
        Male: 448,
        'Non-binary': 24,
        Polygender: 11
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = countMap;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeGenderCountMap(customers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

