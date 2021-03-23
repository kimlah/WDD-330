// Add event listener for hint button
document.querySelector('#hint_button').onclick = hintPlease;

function hintPlease() {
    // file is a local JSON file called math_facts.json
    const file = './data/math_facts.json'

    fetch(file)
        .then(function (response) {
            return response.json();
        })

        .then(function (jsonObject) {
            //console.log(jsonObject);
            const mathHint = jsonObject["level1"];

            for (let i=0; i < mathHint.length; i++) {
                let card = document.createElement("section");

                let image = document.createElement("img");
                image.setAttribute("src", "images/level1/" + mathHint[i].hint);
                image.setAttribute("alt", `Photo of ${mathHint[i].description}`);
                document.querySelector("div.hint").appendChild(card);
                card.appendChild(image);
            }
        });
}