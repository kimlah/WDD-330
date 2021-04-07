import { shuffle } from "./utilities.js";
//import { chooseLevel, chooseLevel2, chooseLevel3, chooseLevel4 } from "./level.js";

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    hint: document.getElementById('hintImage'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    // how can I do an if statement to choose the level, then have all 4 buttons disappear
    start: document.getElementById('level1Start'),
    //start: document.getElementById('level2Start'),
    //start: document.getElementById('level3Start'),
    //start: document.getElementById('level4Start'),
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
      //console.log('start() invoked');
      this.score = 0;
      this.level1 = [...quiz];
      view.setup();
      this.ask();
    },
    // added hint images, it works here to display hint image here but then math fact does not display
    ask(fact){
      //console.log('ask() invoked');
      if(this.level1.length > 0) {
        shuffle(this.level1);
        this.question = this.level1.pop();
        const question = `${this.question.fact}`;
        //const hintImage = `<img src="images/level1/${this.question.hint}" alt="${this.question.description}">`;

        view.render(view.question,question);
        //view.render(view.question, hintImage);
      }
      else {
        this.gameOver();
      }
    },
    check(event){
      //console.log('check(event) invoked');
      event.preventDefault();
      const response = view.response.answer.value;
      const answer = this.question.sum;
      if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
      } else {
        view.render(view.result,`The correct answer was ${answer}`,{'class':'wrong'});
      }
      view.resetForm();
      this.ask();
    },
    // still not working how I need it to
    showHint() {
      const hintImage = `<img src="images/level1/${this.question.hint}" alt="${this.question.description}">`;

      if (document.getElementById("hint_button").clicked == true) {
        //view.render(view.question, hintImage);
      }
    },
    gameOver(){
      //console.log('gameOver() invoked');
      view.render(view.info,`You scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
      view.teardown();
    }
  };

  export {
      view, 
      game
  }
