//create an array of hikes
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Denanda Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];


  
  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  
  //on load grab the array and insert it into the page
    //add to main.js?


  export default class Hikes {
      constructor(elementId) {
          this.parentElement = document.getElementById(elementId);
            // this is a back button to return to the main hike list
          this.backButton = this.buildBackButton();
      }
        // this is necessary in case hikeList is needed insode this class
      getAllHikes() {
          return hikeList;
      }
        // get one hike for the stretch challenge
      getHikeByName(hikeName) {
        return this.getAllHikes().find(hike => hike.name === hikeName);
      }
        // show a list of hikes in the parent element
      showHikeList(){
          this.parentElement.innerHTML = "";
          renderHikeList(this.parentElement, this.getAllHikes());
          this.addHikeListener();
            //button is hidden when it isn't needed
          this.backButton.classList.add('hidden');
      }
        // show one hike in full details 
      showOneHike(hikeName) {
          const hike = this.getHikeByName(hikeName);
          this.parentElement.innerHTML = "";
          this.parentElement.appendChild(renderOneHikeFull(hike));
            // show the back button
          this.backButton.classList.remove('hidden');
      }
        // to show the hike details of a hike ontouchend a listener needs to be attatched after the list of hikes
      addHikeListener() {
            // loop through children of our list and attach touchend to each
          const childrenArray = Array.from(this.parentElement.children);
          childrenArray.forEach(child => {
              child.addEventListener('touchend', e => {
                    // currentTarget is the element that the event listener is attached vs a target being the element that triggered teh event like a click
                  this.showOneHike(e.currentTarget.dataset.name);
              });
          });
      }
      buildBackButton() {
          const backButton = document.createElement('button');
          backButton.innerHTML = '&lt;- All Hikes';
          backButton.addEventListener('touchend', () => {
              this.showHikeList();
          });
          backButton.classList.add('hidden');
          this.parentElement.before(backButton);
          return backButton;
      }
  } // END OF HIKES CLASS

  // elements for building html
  function renderHikeList(parent, hikes) {
    hikes.forEach(hike => {
      parent.appendChild(renderOneHike(hike));
    });
  }
  function renderOneHike(hike) {
    const item = document.createElement('li');
    item.classList.add('light');
    // setting this to make getting the details for a specific hike easier later.
    item.setAttribute('data-name', hike.name);
    item.innerHTML = ` <h2>${hike.name}</h2>
  <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
  <div>
          <div>
              <h3>Distance</h3>
              <p>${hike.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
          </div>
  </div>`;
  
    return item;
  }
  function renderOneHikeFull(hike) {
    const item = document.createElement('li');
    item.innerHTML = ` 
      
          <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
          <h2>${hike.name}</h2>
          <div>
              <h3>Distance</h3>
              <p>${hike.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
          </div>
          <div>
              <h3>Description</h3>
              <p>${hike.description}</p>
          </div>
          <div>
              <h3>How to get there</h3>
              <p>${hike.directions}</p>
          </div>
      
      `;
    return item;
  }