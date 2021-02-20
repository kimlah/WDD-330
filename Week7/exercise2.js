// event listeners
document.querySelector('#tempC').onclick = convertToF;
document.querySelector('#tempF').onclick = convertToC;

function convertToF(tempC) {
    const a = 1.8;
    const b = 32;
    const c = tempC;
    return f => c * a + b;
}

function convertToC(tempF) {
    const a = .5556;
    const b = 32;
    const f = tempF;
    return c => (f - b) * a;
}

// elements for building html
function returnF() {
    const item = document.createElement('p');
    item.innerHTML = `${tempC} converts to ${tempCtoF}.`;

    return item
}

function returnC() {
    const item = document.createElement('p');
    item.innerHTML = `${tempF} converts to ${tempFtoC}.`;

    return item
}