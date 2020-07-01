// Compare the Triplets
function compareTriplets(a, b) {
    let point = []
    let cnt1 = 0
    let cnt2 = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {cnt1 += 1};
        if (a[i] < b[i]) {cnt2 += 1}; 
    };

    point[0] = cnt1
    point[1] = cnt2
    return point;
}

compareTriplets([5, 6, 7], [3, 6, 10]);
