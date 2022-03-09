
function addThings(x, y) {
    return x + y;
}

const result = addThings(1, 2);

console.log(result);

function printEverything(arr) {
    arr.map(x => console.log(x));
}

const arrResult = printEverything(1);

console.log(arrResult);