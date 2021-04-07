//document.getElementById("#math_problem").addEventListener("load", displayMathFact)

/*function displayMathFact() {
    fetch(file)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.log(jsonObject);
        const mathProblem = jsonObject["level1"];
        let mathFact = [];
        
    }
}*/

// file is a local JSON file called math_facts.json
const file = './data/math_facts.json'

fetch(file)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        //console.log(jsonObject);
        const mathProblem = jsonObject["level1"];

        for (let i=0; i < mathProblem.length; i++) {
            
            let card = document.createElement("section");

            let h1 = document.createElement("h1");
            h1.textContent = mathProblem[i].equation;
            h1.classList = mathProblem[i].class;
            card.appendChild(h1);
            document.querySelector("div.flashcard").appendChild(card);
        }
    });
