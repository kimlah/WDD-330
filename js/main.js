function fetchLinks() {
    const classLinks = {
        "Week 01": "/Week1/notes.html",
        "Week 02": "/Week2/notes.html",
        "Week 03": "/Week3/notes.html",
        "Week 04": "/Week4/notes.html"
    }

    for(const prop in classLinks) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = prop;
        a.href = classLinks[prop];
        li.appendChild(a);
        projectsList.appendChild(li);
    }
}


const classLinks = [
    {
        week: "Week 1",
        type: "notes",
        link: "Week1/notes.html"
    },
    {
        week: "Week 1",
        type: "exercise",
        link: "Week1/exercise1.html"
    },
    {
        week: "Week 1",
        type: "exercise",
        link: "Week1/exercise2.html"
    },
    {
        week: "Week 1",
        type: "exercise",
        link: "Week1/exercise3.html"
    },
    {
        week: "Week 1",
        type: "exercise",
        link: "Week1/exercise4.html"
    },
    {
        week: "Week 1",
        type: "exercise",
        link: "Week1/exercise5.html"
    },
    {
        week: "Week 2",
        type: "notes",
        link: "Week2/notes.html"
    },
    {
        week: "Week 2",
        type: "exercise",
        link: "Week2/exercise1.html"
    },
    {
        week: "Week 2",
        type: "exercise",
        link: "Week2/exercise2.html"
    },
    {
        week: "Week 2",
        type: "exercise",
        link: "Week2/exercise3.html"
    },
    {
        week: "Week 3",
        type: "notes",
        link: "Week3/notes.html"
    },
    {
        week: "Week 3",
        type: "exercise",
        link: "Week3/exercise1.html"
    },
    {
        week: "Week 3",
        type: "exercise",
        link: "Week3/exercise2.html"
    },
    {
        week: "Week 3",
        type: "exercise",
        link: "Week3/exercise3.html"
    },
    {
        week: "Week 4",
        type: "notes",
        link: "Week4/notes.html"
    },
    {
        week: "Week 4",
        type: "exercise",
        link: "Week4/exercise1.html"
    },
    {
        week: "Week 4",
        type: "exercise",
        link: "Week4/exercise2.html"
    },
    {
        week: "Week 4",
        type: "exercise",
        link: "Week4/exercise3.html"
    },
    {
        week: "Week 4",
        type: "exercise",
        link: "Week4/exercise4.html"
    },
    {
        week: "Week 4",
        type: "exercise",
        link: "Week4/exercise5.html"
    },
    {
        week: "Week 4",
        type: "team",
        link: "Week4/group-activity.html"
    },
    {
        week: "Week 5",
        type: "notes",
        link: "Week5/notes.html"
    },
    {
        week: "Week 5",
        type: "team",
        link: "Week5/Group/index.html"
    }
];
class Assignments {
    getAssignments() {
    return classLinks;
    }

    showAssignments() {
        this.parentElement.innerHTML = "";
        renderAssignments(this.parentElement, this.getAssignments());
    }
}

function renderAssignments(parent, classLinks) {
    classLinks.forEach(link => {
        parent.appendChild(renderOneAssignment(classLinks));
    });
}

function renderOneAssignment(classLinks) {
    const item = document.createElement('li');
    item.classList.add('light');
    item.innerHTML = `<h3>${classLinks.week} ${classLinks.type}`
}


