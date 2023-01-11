console.log('Connected');

// EXERCISES
// GENERATING ARRAYS

// Exercise 1.1
function checkIfThree() {
    let array = [];
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 === 0) {
            array.push(i);
        }; 
    };
    console.log(array);
};

checkIfThree();


//Exercise 1.2

function checkIfFour() {
    let array = [];
    for (let i = 1; i <= 1000; i++) {
        if (i % 4 === 0) {
            array.push(i);
        }
        
    }
    return array;
}

console.log(checkIfFour());

//Exercise 1.3

// function checkIfOne() {
//     let array = [];
//     for (let i = 1; i <= 1000; i++) {
//         if(i  )
//     }
// }


// ------------------------------------------------------------------------------------------------
// CLEAN ARRAYS 

function checkIfStringAndNum(test) { // IF IT IS TRUTHY
    let sum = [];
    for(let i = 0;i<test.length; i++) {
        if(test[i]) {
            sum.push(test[i]);
        }; 
        
    };
    return sum;
}


// function validateNumber(n) {           IF IT IS ONLY NUMBER
//     if(typeof(n) === 'number'){
//         return true;
//     }
//     return false;
// };

// function validateString(n) {            IF IT IS ONLY STRING
//     if (typeof(n) === 'string') {
//         return true;
//     };
// };


let list = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
console.log(checkIfStringAndNum(list));

//----------------------------------------------------------------------------

// EXERCISE 3
// Random Color page

function colorChange() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return red, green, blue;
};

//rgb(000 000 000)





