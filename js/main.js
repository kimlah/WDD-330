const file = './data/main.json'

fetch(file)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const contentList = jsonObject["links"];

        for (let i = 0; i < links.length; i++) {
            let toc = document.createElement("li");

            let p = document.createElement("p");
            p.textContent = links[i].label + links[i].url;
            toc.appendChild(p);
            document.querySelector("ol").appendChild(toc);
        }
    })