/*const form = document.forms['todo'];
// create an event listener that prevents default behavior of the form so that it isn't submitted when the add task btn is clicked
form.addEventListener('submit', addTask, false);
// creates task object with a title property that is taken from what was entered in the form. Also has a completed property with default value of false
function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    // object is transfered into a JSON string and assigned to variable data
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';
    // build headers and request objects
    const headers = new Headers({
        // because we are sending data we need to add these headers to ensure method property of requested object is POST
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
    {
        method: 'POST',
        header: headers,
        body: data
    }
    )
    // fetch method is used to send the request and deal with the response. Promise that resolves to a JSON object
    fetch(request)
    .then( response => response.json() )
    .then( task => console.log(`Task saved with an id of ${task.id}`) )
    .catch( error => console.log('There was an error:', error))
}*/

const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);
function addTask(event) {
    event.preventDefault();
    // formData constructor function as an arguement
    const task = new FormData(form);
    const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
    {
        method: 'POST',
        mode: 'cors',
        header: headers,
        body: JSON.stringify(task)
    }
    )
    fetch(request)
    .then( response => response.json() )
    .then( data => console.log(`${data.title} saved with an id of ${data.id}`) )
    .catch( error => console.log('There was an error:', error))
}