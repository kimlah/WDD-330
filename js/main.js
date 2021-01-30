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