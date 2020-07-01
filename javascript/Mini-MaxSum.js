// Mini-Max Sum

// solution1
// function miniMaxSum(arr) {
//     let sum_min = 0
//     let sum_max = 0

//     for (let i = 0; i < arr.length - 1; i++) {
//         sum_min += arr.sort((a,b)=> a-b)[i];
//         sum_max += arr.sort((a,b)=> b-a)[i];
//     }
//     return console.log(sum_min + " " + sum_max)
// }

// solution2
function miniMaxSum(arr) {
    let sum_min = 0
    let sum_max = 0

    let sort_arr = arr.sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length - 1; i++) {
        sum_min += sort_arr[i];
        sum_max += sort_arr[arr.length - i - 1];
    }
    return console.log(sum_min + " " + sum_max)
}

miniMaxSum([1, 2, 3, 4, 5]);
