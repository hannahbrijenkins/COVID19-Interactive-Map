// Containers
const mapContainerEl = document.querySelector('#mapid');
const cityContainerEl = document.querySelector('#city-container');
const infoContainerEl = document.querySelector('#info-container');

// State Specific Data Variables
const stateNameContainerEl = document.querySelector('#state-name');
const stateDataContainerEl = document.querySelector('#state-date');
const positiveCasesEl = document.querySelector('#pos');
const negativeCasesEl = document.querySelector('#neg');
const hospitalContainerEl = document.querySelector('#hospital');
const deathContainerEl = document.querySelector('#deaths');
const updateContainerEl = document.querySelector('#update');

const testCentersEl = document.querySelector(`#test-centers`);
const saveButton = document.getElementById("savestatebtn");
const savedStatesUlEl = document.querySelector("#savedStates");
const headerEl = document.querySelector("#header");

let stateStorage = [];

async function covidData(state) {
  // state Specific data
  try {
    //Code to check if state is saved to local storage
    // Fetch Data
    const formattedData = await $.get(
      `https://covidtracking.com/api/v1/states/${state}/current.json`
    );
    // Pass data into function
    stateSpecificData(formattedData);
  } catch (error) {
    // Append text to the front end to say state isn't found
    const errorMessage = document.createElement("h5");
    errorMessage.textContent = "Sorry there was an error in your search. Please try again.";
    errorMessage.classList.add("title");
    errorMessage.setAttribute("style", 'color: red');
    headerEl.appendChild(errorMessage);

    setTimeout(() => {headerEl.removeChild(errorMessage)}, 2000);
  }
}

function loadStates() {
  if ("state" in localStorage) {
    stateStorage = JSON.parse(localStorage.getItem("state"));
    generateSavedStatesList(stateStorage);
  }
}

function saveState() {
  // Preventing the button from submitting information
  event.preventDefault();
  // Get the innerHTML of State Name Element
  const stateElement = stateNameContainerEl.innerHTML;
  // Slice it so we only save the actual state Name
  let state = stateElement.slice(7);
  // While the state is not in already saved
  while (stateStorage.indexOf(state) <= -1){
    // If there are no states in the array
    if (stateStorage.length == 0){
      // push the states into the array
      stateStorage.push(state);
    } 
    // If the length of the array is less than 5
    else if (stateStorage.length < 5){
        // push the state to the beginning of the array
        stateStorage.unshift(state);
    } 
    // If there are 5 or more states in the array
    else if (stateStorage.length >= 5){
        // push the new state to the beginning of the array
        stateStorage.unshift(state);
        // set array to only equal cities 1-5
        stateStorage = stateStorage.slice(0,5);
        // Remove last state searched
        savedStatesUlEl.removeChild(savedStatesUlEl.childNodes[4]);
    }
    // Save array into localStorage
    localStorage.setItem("state", JSON.stringify(stateStorage));
    // Generate the list of states searched
    generateSavedStatesList(stateStorage);
  }
}

// states
const stateInfo = [
  {
    name: 'Alabama',
    coords: [32.806671, -86.79113],
    abbreviation: 'al',
  },
  {
    name: 'Alaska',
    coords: [61.370716, 152.404419],
    abbreviation: 'ak',
  },
  {
    name: 'Arizona',
    coords: [33.729759, -111.431221],
    abbreviation: 'az',
  },
  {
    name: 'Arkansas',
    coords: [34.7465, -92.2896],
    abbreviation: 'ak',
  },
  {
    name: 'California',
    coords: [36.116203, -119.681564],
    abbreviation: 'ca',
  },
  {
    name: 'Colorado',
    coords: [39.059811, -105.311104],
    abbreviation: 'co',
  },
  {
    name: 'Connecticut',
    coords: [41.597782, -72.755371],
    abbreviation: 'ct',
  },
  {
    name: 'Delaware',
    coords: [39.318523, -75.507141],
    abbreviation: 'de',
  },
  {
    name: 'District Of Columbia',
    coords: [38.897438, -77.026817],
    abbreviation: 'dc',
  },
  {
    name: 'Florida',
    coords: [27.766279, -81.686783],
    abbreviation: 'fl',
  },
  {
    name: 'Georgia',
    coords: [33.040619, -83.643074],
    abbreviation: 'ga',
  },
  {
    name: 'Hawaii',
    coords: [21.094318, -157.498337],
    abbreviation: 'hi',
  },
  {
    name: 'Idaho',
    coords: [44.240459, -114.478828],
    abbreviation: 'id',
  },
  {
    name: 'Illinois',
    coords: [40.349457, -88.986137],
    abbreviation: 'il',
  },
  {
    name: 'Indiana',
    coords: [39.849426, -86.258278],
    abbreviation: 'in',
  },
  {
    name: 'Iowa',
    coords: [42.011539, -93.210526],
    abbreviation: 'ia',
  },
  {
    name: 'Kansas',
    coords: [38.5266, -96.726486],
    abbreviation: 'ks',
  },
  {
    name: 'Kentucky',
    coords: [37.66814, -84.670067],
    abbreviation: 'ky',
  },
  {
    name: 'Louisiana',
    coords: [31.169546, -91.867805],
    abbreviation: 'la',
  },
  {
    name: 'Maine',
    coords: [44.693947, -69.381927],
    abbreviation: 'me',
  },
  {
    name: 'Maryland',
    coords: [39.063946, -76.802101],
    abbreviation: 'md',
  },
  {
    name: 'Massachusetts',
    coords: [42.230171, -71.530106],
    abbreviation: 'ma',
  },
  {
    name: 'Michigan',
    coords: [43.326618, -84.536095],
    abbreviation: 'mi',
  },
  {
    name: 'Minnesota',
    coords: [45.694454, -93.900192],
    abbreviation: 'mn',
  },
  {
    name: 'Mississippi',
    coords: [32.741646, -89.678696],
    abbreviation: 'ms',
  },
  {
    name: 'Missouri',
    coords: [38.456085, -92.288368],
    abbreviation: 'mo',
  },
  {
    name: 'Montana',
    coords: [46.921925, -110.454353],
    abbreviation: 'mt',
  },
  {
    name: 'Nebraska',
    coords: [41.12537, -98.268082],
    abbreviation: 'ne',
  },
  {
    name: 'Nevada',
    coords: [38.313515, -117.055374],
    abbreviation: 'nv',
  },
  {
    name: 'New Hampshire',
    coords: [43.452492, -71.563896],
    abbreviation: 'nh',
  },
  {
    name: 'New Jersey',
    coords: [40.298904, -74.521011],
    abbreviation: 'nj',
  },
  {
    name: 'New Mexico',
    coords: [34.840515, -106.248482],
    abbreviation: 'nm',
  },
  {
    name: 'New York',
    coords: [42.165726, -74.948051],
    abbreviation: 'ny',
  },
  {
    name: 'North Carolina',
    coords: [35.630066, -79.806419],
    abbreviation: 'nc',
  },
  {
    name: 'North Dakota',
    coords: [47.528912, -99.784012],
    abbreviation: 'nd',
  },
  {
    name: 'Ohio',
    coords: [40.388783, -82.764915],
    abbreviation: 'oh',
  },
  {
    name: 'Oklahoma',
    coords: [35.565342, -96.928917],
    abbreviation: 'ok',
  },
  {
    name: 'Oregon',
    coords: [44.572021, -122.070938],
    abbreviation: 'or',
  },
  {
    name: 'Pennsylvania',
    coords: [40.590752, -77.209755],
    abbreviation: 'pa',
  },
  {
    name: 'Rhode Island',
    coords: [41.680893, -71.51178],
    abbreviation: 'ri',
  },
  {
    name: 'South Carolina',
    coords: [33.856892, -80.945007],
    abbreviation: 'sc',
  },
  {
    name: 'South Dakota',
    coords: [44.299782, -99.438828],
    abbreviation: 'sd',
  },
  {
    name: 'Tennessee',
    coords: [35.747845, -86.692345],
    abbreviation: 'tn',
  },
  {
    name: 'Texas',
    coords: [31.054487, -97.563461],
    abbreviation: 'tx',
  },
  {
    name: 'Utah',
    coords: [40.150032, -111.862434],
    abbreviation: 'ut',
  },
  {
    name: 'Vermont',
    coords: [44.045876, -72.710686],
    abbreviation: 'vt',
  },
  {
    name: 'Virginia',
    coords: [37.769337, -78.169968],
    abbreviation: 'va',
  },
  {
    name: 'Washington',
    coords: [47.400902, -121.490494],
    abbreviation: 'wa',
  },
  {
    name: 'West Virginia',
    coords: [38.491226, -80.954453],
    abbreviation: 'wv',
  },
  {
    name: 'Wisconsin',
    coords: [44.268543, -89.616508],
    abbreviation: 'wi',
  },
  {
    name: 'Wyoming',
    coords: [42.755966, -107.30249],
    abbreviation: 'wy',
  },
];

// Map declaration
let map = L.map(mapContainerEl).setView([37.0902, -95.7129], 4);

function stateSpecificData(data) {
  // Look at each object in the array of objects
  stateInfo.map((state) => {
    // If the abbreviated state matches the abbreviation of the object
    if (data.state.toLowerCase() === state.abbreviation) {
      // Print the full state name
      stateNameContainerEl.innerHTML = `State: ${state.name}`;
      //Slice
    }
  });

  // Convert date to a string and format it
  const toStringDate = data.date.toString();
  let date = `${toStringDate.substring(4, 6)}/${toStringDate.substring(6,8)}/${toStringDate.substring(0, 4)}`;
  stateDataContainerEl.innerHTML = `Date: ${date}`;

  if (data.positiveIncrease > 0){
    // Positive cases: Positive Total (Increase Number, Neg-Red, Pos-Green)Negative Total
    positiveCasesEl.innerHTML = `${data.positive} (+${data.positiveIncrease})`;
  } else {
    positiveCasesEl.innerHTML = `${data.positive} (-)`;
  }

  if (data.negativeIncrease > 0) {
    // Negative Cases: Negative Total (Increase)
    negativeCasesEl.innerHTML = `${data.negative} (+${data.negativeIncrease})`;
  } else {
    negativeCasesEl.innerHTML = `${data.negative} (-)`;
  }

  if (data.hospitalizedCurrently === null) {
    // Hospitalized Currently
    hospitalContainerEl.innerHTML = `-`;
  } else {
    hospitalContainerEl.innerHTML = `${data.hospitalizedCurrently}`;
  }

  if (data.deathConfirmed === null) {
    // Death Total
    deathContainerEl.innerHTML = `-`;
  } else {
    deathContainerEl.innerHTML = `${data.deathConfirmed}`;
  }

  // Time Updated
  updateContainerEl.innerHTML = `${data.lastUpdateEt}`;

}

function interactiveMap() {
  const attribution =
    '&copy; <a href="https://www.opentstreetmap.org/copyright">OpenStreetMap</a> contributors';

  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(map);

  for (let i = 0; i < stateInfo.length; i++) {
    let latitude = stateInfo[i].coords[0];
    let longitude = stateInfo[i].coords[1];
    let stateabrv = stateInfo[i].abbreviation;
    let marker = L.marker([latitude, longitude], {
      title: stateabrv,
    }).addTo(map);
  }

  // Remove duplicate Arkansas marker
  const mapMarkers = document.querySelector(".leaflet-marker-pane");
  mapMarkers.removeChild(mapMarkers.childNodes[1]);

  //Overlay(feel free to scrap this if you deem unnecessary)
  const info = L.control();
  info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };

  // Overlay
  info.update = function (props) {
    this._div.innerHTML = '<h4>COVID-19 US STATS</h4>';
  };

  info.addTo(map);
}

function grabStateAbbrev(event) {
  // Grab state abbreviation from the title
  const stateAbbrev = event.originalEvent.srcElement.title;
  // pass the abbreviation to the api call to fetch the data
  covidData(stateAbbrev);
}

function generateSavedStatesList(stateList){
  // Clear the list
  savedStatesUlEl.innerHTML = "";

  // Re-render the list
  for (let i = 0; i < stateList.length; i++) {
    const savedState = document.createElement("li");
    savedState.classList.add("savedstatename");
    savedState.textContent = stateList[i];
    savedStatesUlEl.appendChild(savedState);
  }
}

function getStateClicked(event) {
  const stateClicked = event.srcElement.innerHTML;

  stateInfo.map((state) => {
    if (stateClicked === state.name){
      covidData(state.abbreviation);
    }
  })
}


interactiveMap();
loadStates();

map.addEventListener('click', grabStateAbbrev);
saveButton.addEventListener('click', saveState);
savedStatesUlEl.addEventListener("click", getStateClicked);