const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);

// call function output() with the string'CONNECTED' as an argument
connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

// used to output messages to screen
function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}

// eventListener for when form is submitted
form.addEventListener('submit', message, false);

function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}

// event handler to deal with response
connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);