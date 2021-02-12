import Assignments from './classLinks.js';
const myLinks = new Assignments('assignmentLinks');
window.addEventListener("load", () => {
    myLinks.showAssignments()
});

myLinks.classLinks;