// A Very Big Sum
function aVeryBigSum(ar) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = ar.reduce(reducer)
    return sum
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
