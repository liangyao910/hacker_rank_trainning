// Diagonal Difference
function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0
    let sum2 = 0
    let result = 0
    let arrLength = arr.length - 1
    for (var i = 0; i <= arrLength; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][arrLength-i]; 
    }
    return Math.abs(sum1 - sum2);
}

diagonalDifference(
    [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ]
);