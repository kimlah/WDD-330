// Base URL - https://swapi.dev/api/
// Standard Data format - JSON

// helper function to fetch data from external site and return in json format
function getJSON(url) {
    return fetch(url)
        .then(function (respose) {
            // if there is no response then throw error
            if (!Response.ok) {
                throw Error(response.statusText);
            }
            // else return json response
            else {
                return respose.json();
            }
        })
        // if there is an error then log to console
        .catch(function (error) {
            console.log(error)
        });
}

// model code so that if it gets more complex it is easier to accomidate
function getPeople(url) {
    return getJSON(url);
}

// View Code
function renderPeopleList(people, peopleListElement) {
    // table to display list of people - table with 2 children: thead and tbody - people go into body
    const list = peopleListElement.children[1];
    list.innerHTML = "";
    // loop through people
    people.forEach(function (person) {
        // console.log(person);
        // create elements for list-tr
        let listItem = document.createElement("tr");
        listItem.innerHTML = `
        <td><a href="${person.url}">${person.name}</a></td>
        <td>${person.homeworld}</td>
        <td>${person.birth_year}</td>
        `;

        listItem.addEventListener("click", function (event) {
            // when clicked stop default behavior
            event.preventDefault();
            // person details function should be called, passing value of href attribute
            getPersonDetails(person.url);
        });

        // add list item to list
        list.appendChild(listItem);
    });
}

// write code to render details to HTML
function renderPersonDetails(personData) {
    console.log(personData)
}

// Controller code
function showPeople(url="https:swapi.dev/api/people/") {
    getPeople(url).then(function (data) {
        console.log(data)
            const results = data.results;

            // get list elements
            const personListElement = document.getElementById("personlist");
            renderPeopleList(results, personListElement);

            // enable the next and prev buttons
            if (data.next) {
                const next = document.getElementById("next");
                // not event listener because it could end up with too many by the end
                next.ontouchend = () => {
                    // to show next page we re-call showPeople function with new url
                    showPeople(data.next);
                };
            }

            if (data.previous) {
                const prev = document.getElementById("prev");

                prev.ontouchend = () => {
                    showPeople(data.previous);
                };
        }
    });
}

function getPersonDetails(url) {
    // call getJSON functions for provided url
    getShips(url).then(function (data) {
        renderPersonDetails(data);
    });
}

showPeople();