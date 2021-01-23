onmessage = function (e) {
    let workerResult = Math.pow(e.data[0], 1/e.data[1]);
    postMessage(workerResult);
}