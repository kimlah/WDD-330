// Base URL - https://swapi.dev/api/
// Standard Data format - JSON

// helper function to fetch data from external site and return it in JSON format
function getJSON(url) {
    return fetch(url)
        .then(function (respose) {
            // if there isn't a response then throw error
            if (!respose.ok) {
                throw Error(response.statusText);
            } 
            // if there is a response then return json response
            else {
                return respose.json();
            }
        })
        // if there is an error then log it to the console
        .catch(function (error) {
            console.log(error)
        });
}

// model code so that if model became more complex this makes it easier to accomodate
function getShips(url) {
    return getJSON(url);
}

// View Code
function renderShipList(ships, shipListElement) {
    // table to display list of ships- shipListElement is a table with 2 children: thead and tbody- ships go into tbody
    const list = shipListElement.children[1];
    list.innerHTML = "";
    // loop through ships
    ships.forEach(function (ship) {
        // console.log(ship);
        // create elements for list-tr
        let listItem = document.createElement("tr");
        listItem.innerHTML = `
            <td><a href="${ship.url}">${ship.name}</a></td>
            <td>${ship.length}</td>
            <td>${ship.crew}</td>
            `;

        listItem.addEventListener("click", function (event) {
            // when clicked the default link behavior should be stopped
            event.preventDefault();
            // ship details function should be called, passing value of href attribute
            getShipDetails(ship.url);
        });

        // add list items to list
        list.appendChild(listItem);
    });
}

// write the code to render the details to HTML
function renderShipDetails(shipData) {
    console.log(shipData);
}

// controller code
function showShips(url="https:swapi.dev/api/starships/") {
    getShips(url).then(function (data) {
        console.log(data);
        const results = data.results;

        // get list elements
        const shipListElement = document.getElementById("shiplist");
        renderShipList(results, shipListElement);

        // enable the next and prev buttons
        if (data.next) {
            const next = document.getElementById("next");
            // not addEventListener method because the button would end up with too many by the end
            next.ontouchend = () => {
                // to show next page we re-call showShips function with new URL
                showShips(data.next);
            };
        }

        if (data.previous) {
            const prev = document.getElementById("prev");

            prev.ontouchend = () => {
                showShips(data.previous);
            };
        }
    });
}

function getShipDetails(url) {
    // call getJSON functions for provided url
    getShips(url).then(function (data) {
        renderShipDetails(data);
    });
}

showShips();