import { shuffle } from "./utilities.js";

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    // how can I do an if statement to choose the level, then have all 4 buttons disappear
    start: document.getElementById('level1Start'),
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
    },
    buttons(array){
        return array.map(value => `<button>${value}</button>`).join('');
    }
  };
  
  const game = {
    start(quiz){
      console.log('start() invoked');
      this.score = 0;
      this.level1 = [...quiz];
      view.setup();
      this.ask();
    },
    ask(fact){
      console.log('ask() invoked');
      if(this.level1.length > 2) {
        shuffle(this.level1);
        this.question = this.level1.pop();
        const question = `${this.question.fact}`;
        view.render(view.question,question);
      }
      else {
        this.gameOver();
      }
    },
    check(event){
      console.log('check(event) invoked');
      event.preventDefault();
      const response = view.response.answer.value;
      const answer = this.question.sum;
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
      console.log('gameOver() invoked');
      view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
      view.teardown();
    }
  };

  export {
      view, 
      game
  }
