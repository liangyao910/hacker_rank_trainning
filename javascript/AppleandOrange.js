// Apple and Orange
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let num_apple = 0
    let num_orange = 0

    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            num_apple += 1;
        } 
    }
    for (let i = 0; i < oranges.length; i++) {
        if (b + oranges[i] <= t && b + oranges[i] >= s) {
            num_orange += 1;
        } 
    }
    return console.log(num_apple + "\n" + num_orange);
}

countApplesAndOranges(
    7, 11,
    5, 15,
    [-2, 2, 1],
    [5, -6]
);
