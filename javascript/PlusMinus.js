// Plus Minus
function plusMinus(arr) {
    let denominator = arr.length
    let num_plus = 0
    let num_minus = 0
    let num_zero = 0

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            num_plus += 1;
        } else if (arr[i] < 0) {
            num_minus += 1;
        } else if (arr[i] == 0) {
            num_zero += 1;
        }
    }
    let ratio_plus = num_plus/denominator
    let ratio_minus = num_minus/denominator
    let ratio_zero = num_zero/denominator

    return console.log(ratio_plus.toFixed(6) + '\n' + ratio_minus.toFixed(6) + '\n' + ratio_zero.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
