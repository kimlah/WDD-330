// Week 1 - Ch 1
    // alert when page opens
//alert('Welcome to Quiz Ninja!');

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
/*const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];*/

// Week 3 - Ch 5
    // changing how the quiz is stored, replace the nested array used before
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

// View Object
// Access elements by id from html, can now assign to variable.
const view = {
    start: document.getElementById('start'),
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    },
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
        // can be used to update content of an element on the page. 3 paramenters: element that displays content, content to be updated with, & object of any html attributes that can be added to element.
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
};

// namespace the functions created before by placing in object "game"
const game = {
    start(quiz){
        view.hide(view.start);
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            alert('Correct!');
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.show(view.start);
    }
}
game.start(quiz);
view.start.addEventListener('click', () => game.start(quiz), false);