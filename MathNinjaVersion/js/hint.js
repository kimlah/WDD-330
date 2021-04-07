// Add event listener for hint button
document.querySelector('#hint_button').onclick = hintPlease;

level = "";

if (document.getElementById("level1").clicked == true) {
    level = "level1";
}
else if (document.getElementById("level2").clicked == true) {
    level = "level2";
}
else if (document.getElementById("level3").clicked == true) {
    level = "level3";
}
else if (document.getElementById("level4").clicked == true) {
    level = "level4";
}
else {
    level = ""
}

function hintPlease() {
    // file is a local JSON file called math_facts.json
    const file = './data/math_facts.json'

    fetch(file)
        .then(function (response) {
            return response.json();
        })

        .then(function (jsonObject) {
            //console.log(jsonObject);
            const mathHint = jsonObject[level];

            for (let i=0; i < mathHint.length; i++) {
                let card = document.createElement("section");

                let image = document.createElement("img");
                image.setAttribute("src", "images/" + level + "/" + mathHint[i].hint);
                image.setAttribute("alt", `Photo of ${mathHint[i].description}`);
                document.querySelector("div.hint").appendChild(card);
                card.appendChild(image);
            }
        });
}