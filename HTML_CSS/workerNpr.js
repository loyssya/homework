
function factorial(a) {
    let result = 1;
    for (i = 1; i <= a; i++) {
        result = result * i;
        console.log(result);
    }
    return result;
}



onmessage = function (e) {   

    let workerResult = factorial(e.data[0])/factorial(e.data[0] - Math.abs(e.data[1]));
    postMessage(workerResult);
}