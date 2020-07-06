// Ice Cream Parlor
function icecreamParlor(m, arr) {
    let firstIndex = 0
    let secondIndex = 0
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++) {
            if ( m - arr[i] == arr[j] && i < j) {
                firstIndex = i+1;
                secondIndex = j+1;
            }
        }
    }
    return [firstIndex, secondIndex]
}

icecreamParlor(4, [1, 4, 5, 3, 2])