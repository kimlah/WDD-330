import { view, game } from '../js/quiz.js'
// choose level based on button
// export level information to quiz or main ??

// initial set up for choosing level and the buttons
let chooseLevel = document.getElementById("chooseLevel");
let level1 = document.createElement("button");
let level2 = document.createElement("button");
let level3 = document.createElement("button");
let level4 = document.createElement("button");

// add button text
level1.innerText = "Level 1-Addition to 5";
level2.innerText = "Level 2-Addition to 10";
level3.innerText = "Level 3-Subtraction to 5";
level4.innerText = "Level 4-Adding and Subtraction 10";

// event listeners for button clicks
level1.addEventListener("click", level);
level2.addEventListener("click", level);
level3.addEventListener("click", level);
level4.addEventListener("click", level);

// add buttons to div for each level
chooseLevel.appendChild(level1);
chooseLevel.appendChild(level2);
chooseLevel.appendChild(level3);
chooseLevel.appendChild(level4);

// what happens if that button is clicked
function level() {
    const file = "data/math_facts.json";

    // if button clicked is level1
    if {

    }
    // if button clicked is level2 
    else if {

    }
    // if button clicked is level3
    else if {

    }
    // if button clicked is level4
    else {
        
    }

    fetch(file)
        .then(res => res.json())
        .then(quiz => {
            view.start.addEventListener('click', () => game.start(quiz.level1), false);
            view.response.addEventListener('click', (event) => game.check(event), false);
        });
};

function chooseLevel2() {
    const file = "data/math_facts.json";

    fetch(file)
        .then(res => res.json())
        .then(quiz => {
            view.start.addEventListener('click', () => game.start(quiz.level2), false);
            view.response.addEventListener('click', (event) => game.check(event), false);
        });
};

function chooseLevel3() {
    const file = "data/math_facts.json";

    fetch(file)
        .then(res => res.json())
        .then(quiz => {
            view.start.addEventListener('click', () => game.start(quiz.level3), false);
            view.response.addEventListener('click', (event) => game.check(event), false);
        });
};

function chooseLevel4() {
    const file = "data/math_facts.json";

    fetch(file)
        .then(res => res.json())
        .then(quiz => {
            view.start.addEventListener('click', () => game.start(quiz.level4), false);
            view.response.addEventListener('click', (event) => game.check(event), false);
        });
};

export {
    chooseLevel,
    chooseLevel2,
    chooseLevel3,
    chooseLevel4
}