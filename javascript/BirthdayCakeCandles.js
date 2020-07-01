// Birthday Cake Candles
function birthdayCakeCandles(ar) {
    let count = 0
    let max = Math.max(...ar);
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == max) {
            count += 1;
        }
    }
    return count;
}

birthdayCakeCandles([3, 2, 1, 3]);
