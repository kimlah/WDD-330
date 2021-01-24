// EVENT LISTENERS
// callback function was called, the function automatically passes the event object as a parameter that contains information about the event.
/*function doSomething() {
    console.log('something happened!');
}*/

// returns type of event that fired the node.
/*function doSomething(event) {
    console.log(event.type);
}*/

// returns a reference to the node that fired the event.
/*function doSomething(event) {
    console.log(event.target);
}*/

// to see coordinates of where an event took place
/*function doSomething(event){
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}*/

//addEventListener('click', doSomething)

// MOUSE EVENTS
// seeing mouse events in action: click, mousedown and mouseup
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

// seeing how dblclick event works
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
}

// seeing how mouseover and mouseout work
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );

// distinguishing between between a physical key and a character appearing on the screen.
addEventListener('keydown',highlight);

// uses an anonomous arrow function to show the exact time the key was released
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

// shows the property of a key when pressed
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

// removes event listener
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}

// stops default behavior from happening
const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

// shows bubbling
/*ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );*/

//shows capturing
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);