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
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    response: document.querySelector('#response'),
    render(target,content,attributes) {
        for(const key in attributes) {
          target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
      element.style.display = 'block';
    },
    hide(element){
      element.style.display = 'none';
    },
    resetForm(){
      this.response.answer.value = '';
      this.response.answer.focus();
    },
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        this.resetForm();
    },
    teardown(){
      this.hide(this.question);
      this.hide(this.response);
      this.show(this.start);
    }
  };
  

// namespace the functions created before by placing in object "game"
const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        view.setup();
        this.ask();
    },
    ask(name){
            // checks length of this.questions array to see if there are any more questions to ask
        if(this.questions.length > 0) {
                // if there are more questions then pop to remove the last element and assign it to this.question
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question,question);
        }
        else {
            this.gameOver();
        }
    },
    check(event){
        event.preventDefault();
            // query view.response.answer.value, which is stored in the input field
        const response = view.response.answer.value;
        const answer = this.question.realName;
            // assign variable to response
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        view.resetForm();
        this.ask();
    },
    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
    }
}

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);