// Super Reduced String
function superReducedString(s) {
    let ar = s.split("")
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === ar[i+1]) {
            ar.splice(i, 2);
            i = -1;
        }
    }
    if (ar.length === 0) {ar[0] = "Empty String"}
    s = ar.join("")
    return s
}

superReducedString("aaabccddd");
