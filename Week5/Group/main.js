    // Import the Hikes array from hikes.js
import Hikes from './hikes.js';
    // From Hikes create the constant myHike that uses the hikeListID from hikes.js
const myHike = new Hikes('hikes');
    // on load use showHikeList function to show the hike list
window.addEventListener("load", () => {
    myHike.showHikeList()
});
    // call hikeList from myHike
myHike.hikeList;