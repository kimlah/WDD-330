  // array to hold to do list
let toDoList = [];

function renderToDoList(toDo) {
      // select element with this class
    const list = document.querySelector('.to-do-list');

      // ternary operator saying if checked is true then assign an X if not then leave blank
    const isChecked = toDo.checked ? 'done' : '';
    const node = document.createElement("li");
    node.setAttribute('class', `todo-item ${isChecked}`);
      // set the data key attribute as the id of the toDo item
    node.setAttribute('data-key', toDo.id);
    node.innerHTML = `
        <input id="${toDo.id}" type="checkbox"/>
        <label for "${toDo.id}" class="tick"></label>
        <span>${toDo.text}</span>
        <button class="delete-toDo">
        <svg><use href="#delete-icon"></use></svg>
        </button>
        `;

        // CURRENT ERROR
      // if child exists in DOM replace it or append to the end of the list
    if (item) {
        list.replaceChild(node, item);
    }
    else {
        list.append(node);
    }
}

  // create object based on the text submitted from input
function addListItem(text) {
    const toDo = {
          // set as function arguement
        text,
          // initially set to false because task isn't completed
        checked: false,
          // gives each item an id based on time so each will be different
        id: Date.now(),
    };

    toDoList.push(toDo);
    renderToDoList(toDo);
}

function toggleDone(key) {
    const index = toDoList.findIndex(item => item.id === Number(key));
    toDoList[index].checked = !toDoList[index].checked;
    renderToDoList(toDoList[index]);
}

  // select form element
const form = document.querySelector('.to-do-form');

  // add a event listener
form.addEventListener('submit', event => {
      // prevents page from refreshing when form submits
    event.preventDefault();
      // gets the to do item from the input
    const input = document.querySelector('.to-do-input');
      // trim white space from ends of string if it is there
    const text = input.value.trim();
     // if the text isn't empty then do this
    if (text !== '') {
        addListItem(text);
        input.value = '';
        input.focus();
    }
});

const list = document.querySelector('.to-do-list');
  // add event listener to list, including the li children 
list.addEventListener('click', event => {
    if (event.target.classList.contains('js-tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }
});