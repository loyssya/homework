onmessage = function (e) {
    min = 0;
    if (e.data[0] > e.data[1]) {
        min = e.data[0];
    } else { min = e.data[1]; }
    for (i = min; i >= 1; i--) {
        if (e.data[0] % i == 0 && e.data[1] % i == 0) {
            postMessage(i);
            break;
        }
    }
}