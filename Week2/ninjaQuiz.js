// Week 1 - Ch 1
    // alert when page opens
alert('Welcome to Quiz Ninja!');

// Week 2 - Ch 2
    // declares question as a variable and assigns a string to it
//const question = "What is Superman's real name?"
    // ask the question and prompt an answer
//const answer = prompt(question);
    // show answer provided by user
//alert(`You answered ${answer}`);

// Week 2 - Ch 3
    // array that contains all of the quiz questions and answers. It is a nested array.
/*const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

    // create and initialize the score variable to track correct answers given
let score = 0;

    // for each array set in quiz prompt with the question. compare answer with response from user.  
for(const [question,answer] of quiz) {
    const response = prompt(question);
    // if the answer is correct then alert correct and add a point.
    if(response === answer) {
        alert('Correct!');
        score++;
    }
    // if not then show the correct answer.
    else {
        alert(`Incorrect. The correct answer was ${answer}`);
    }
}

    // at the end alert score. to decide if point is plural: if score is not 1 then add an s, else don't add an s.
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);*/

// Week 2 - Ch 4
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

function start(quiz) {
    //initialize score variable
    let score = 0;

    //main game loop - for each array in quiz array
    for(const [question, answer] of quiz) {
        // ask the question
        const response = ask(question);
        // compare user response to answer
        check(response, answer);
    }

    gameOver();

    // function declarations
    function ask(question) {
        return prompt(question);
    }

    function check(response, answer) {
        if(response === answer) {
            alert('Correct!');
            score++
        }
        else {
            alert(`Incorrect. The correct answer is ${answer}.`);
        }
    }

    function gameOver() {
        alert(`Game Over, you scored ${score} point${score != 1 ? 's' : ''}.`);
    }
}
start(quiz);