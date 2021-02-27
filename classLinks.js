const classLinks = [
    {
        week: "Week 1",
        type: "Notes",
        link: "Week1/notes.html"
    },
    {
        week: "Week 1",
        type: "Exercise 1",
        link: "Week1/exercise1.html"
    },
    {
        week: "Week 1",
        type: "Exercise 2",
        link: "Week1/exercise2.html"
    },
    {
        week: "Week 1",
        type: "Exercise 3",
        link: "Week1/exercise3.html"
    },
    {
        week: "Week 1",
        type: "Exercise 4",
        link: "Week1/exercise4.html"
    },
    {
        week: "Week 1",
        type: "Exercise 5",
        link: "Week1/exercise5.html"
    },
    {
        week: "Week 2",
        type: "Notes",
        link: "Week2/notes.html"
    },
    {
        week: "Week 2",
        type: "Exercise 1",
        link: "Week2/exercise1.html"
    },
    {
        week: "Week 2",
        type: "Exercise 2",
        link: "Week2/exercise2.html"
    },
    {
        week: "Week 2",
        type: "Exercise 3",
        link: "Week2/exercise3.html"
    },
    {
        week: "Week 3",
        type: "Notes",
        link: "Week3/notes.html"
    },
    {
        week: "Week 3",
        type: "Exercise 1",
        link: "Week3/exercise1.html"
    },
    {
        week: "Week 3",
        type: "Exercise 2",
        link: "Week3/exercise2.html"
    },
    {
        week: "Week 3",
        type: "Exercise 3",
        link: "Week3/exercise3.html"
    },
    {
        week: "Week 4",
        type: "Notes",
        link: "Week4/notes.html"
    },
    {
        week: "Week 4",
        type: "Exercise 1",
        link: "Week4/exercise1.html"
    },
    {
        week: "Week 4",
        type: "Exercise 2",
        link: "Week4/exercise2.html"
    },
    {
        week: "Week 4",
        type: "Exercise 3",
        link: "Week4/exercise3.html"
    },
    {
        week: "Week 4",
        type: "Exercise 4",
        link: "Week4/exercise4.html"
    },
    {
        week: "Week 4",
        type: "Exercise 5",
        link: "Week4/exercise5.html"
    },
    {
        week: "Week 4",
        type: "Team",
        link: "Week4/group-activity.html"
    },
    {
        week: "Week 5",
        type: "Notes",
        link: "Week5/notes.html"
    },
    {
        week: "Week 5",
        type: "Team",
        link: "Week5/Group/index.html"
    },
    {
        week: "Week 6",
        type: "To Do App",
        link: "toDoApp/index.html"
    },
    {
        week: "Week 7",
        type: "Notes",
        link: "Week7/notes.html"
    },
    {
        week: "Week 7",
        type: "Exercise 1",
        link: "Week7/exercise1.html"
    },
    {
        week: "Week 7",
        type: "Exercise 3",
        link: "Week7/exercise3.html"
    },
    {
        week: "Week 7",
        type: "Exercise 4",
        link: "Week7/exercise4.html"
    },
    {
        week: "Week 7",
        type: "Exercise 5",
        link: "Week7/exercise5.html"
    },
    {
        week: "Week 7",
        type: "Team",
        link: "Week7/Group/index.html"
    },
    {
        week: "Week 8",
        type: "Notes",
        link: "Week7/notes.html"
    },
    {
        week: "Week 7",
        type: "Exercise 1",
        link: "Week8/exercise1.html"
    },
    {
        week: "Week 8",
        type: "Exercise 3",
        link: "Week8/exercise3.html"
    },
    {
        week: "Week 8",
        type: "Team",
        link: "Week8/Group/index.html"
    }
];


export default class Assignments {
    constructor(elementID) {
        this.parentElement = document.getElementById(elementID);
    }

    // necessary in case classLinks is needed inside this class
    getAssignments() {
    return classLinks;
    }

    // show a list of hikes in the parents element
    showAssignments() {
        this.parentElement.innerHTML = "";
        renderAssignments(this.parentElement, this.getAssignments());
    }
} // END OF ASSIGNMENTS CLASS

// elements for building HTML
function renderAssignments(parent, links) {
    links.forEach(link => {
        parent.appendChild(renderOneAssignment(link));
    });
}

function renderOneAssignment(link) {
    const item = document.createElement('li');
    item.classList.add('light');
    item.setAttribute('data-name', link.week);
    item.innerHTML = `<h3>${link.week} <a href=${link.link}>${link.type}</a></h3>`;

    return item;
}