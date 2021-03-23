import { view, game } from './quiz.js'

const file = "math_facts.json";

fetch(file)
    .then(res => res.json())
    .then(quiz => {
        view.start.addEventListener('click', () => game.start(quiz.level1), false);
        view.response.addEventListener('click', (event) => game.check(event), false);
    });