// Staircase
function staircase(n) {
    let str = ""
    for (let i = 1; i <= n; i++) {
        str += " ".repeat(n-i) + "#".repeat(i);
        if (i < n) {
            str += "\n"
        }
    }
    return console.log(str)
}

staircase(6);
