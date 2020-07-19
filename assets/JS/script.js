// Containers
const mapContainerEl = document.querySelector('#map');
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

// states
const states = 'al';
const stateInfo = [
  {
    state: 'Alabama',
    coords: [32.806671, -86.791130], 
    abbreviation: 'al'
  },
  {
    state: 'Alaska',
    coords: [61.370716, 152.404419], 
    abbreviation: 'ak'
  },
  {
    state: 'Arizona',
    coords: [33.729759, -111.431221], 
    abbreviation: 'az'
  },
  {
    state: 'Arkansas',
    coords: [34.969704, -92.373123], 
    abbreviation: 'ak'
  },
  {
    state: 'California', 
    coords: [36.116203, -119.681564], 
    abbreviation: 'ca'
  },
  {
    state: 'Colorado',
    coords: [39.059811, -105.311104], 
    abbreviation: 'co'
  },
  {
    state: 'Connecticut',
    coords: [41.597782, -72.755371], 
    abbreviation: 'ct'
  },
  {
    state: 'Delaware',
    coords: [39.318523, -75.507141], 
    abbreviation: 'de'
  },
  {
    state: 'District Of Columbia',
    coords: [38.897438, -77.026817], 
    abbreviation: 'dc'
  },
  {
    state: 'Florida',
    coords: [27.766279, -81.686783], 
    abbreviation: 'fl'
  },
  {
    state: 'Georgia',
    coords: [33.040619, -83.643074], 
    abbreviation: 'ga'
  },
  {
    state: 'Hawaii',
    coords: [21.094318, -157.498337], 
    abbreviation: 'hi'
  },
  {
    state: 'Idaho', 
    coords: [44.240459, -114.478828], 
    abbreviation: 'id'
  },
  {
    state: 'Illinois', 
    coords: [40.349457, -88.986137], 
    abbreviation: 'il'
  },
  {
    state: 'Indiana', 
    coords: [39.849426, -86.258278], 
    abbreviation: 'in'
  },
  {
    state: 'Iowa', 
    coords: [42.011539, -93.210526], 
    abbreviation: 'ia'
  },
  {
    state: 'Kansas', 
    coords: [38.526600, -96.726486], 
    abbreviation: 'ks'
  },
  {
    state: 'Kentucky', 
    coords: [37.668140, -84.670067], 
    abbreviation: 'ky'
  },
  {
    state: 'Louisiana', 
    coords: [31.169546, -91.867805], 
    abbreviation: 'la'
  },
  {
    state: 'Maine', 
    coords: [44.693947, -69.381927], 
    abbreviation: 'me'
  },
  {
    state: 'Maryland', 
    coords: [39.063946, -76.802101], 
    abbreviation: 'md'
  },
  {
    state: 'Massachusetts', 
    coords: [42.230171, -71.530106], 
    abbreviation: 'ma'
  },
  {
    state: 'Michigan', 
    coords: [43.326618, -84.536095], 
    abbreviation: 'mi'
  },
  {
    state: 'Minnesota', 
    coords: [45.694454, -93.900192], 
    abbreviation: 'mn'
  },
  {
    state: 'Mississippi', 
    coords: [32.741646, -89.678696], 
    abbreviation: 'ms'
  },
  {
    state: 'Missouri', 
    coords: [38.456085, -92.288368], 
    abbreviation: 'mo'
  },
  {
    state: 'Montana', 
    coords: [46.921925, -110.454353], 
    abbreviation: 'mt'
  },
  {
    state: 'Nebraska', 
    coords: [41.125370, -98.268082], 
    abbreviation: 'ne'
  },
  {
    state: 'Nevada', 
    coords: [38.313515, -117.055374], 
    abbreviation: 'nv'
  },
  {
    state: 'New Hampshire', 
    coords: [43.452492, -71.563896], 
    abbreviation: 'nh'
  },
  {
    state: 'New Jersey', 
    coords: [40.298904, -74.521011], 
    abbreviation: 'nj'
  },
  {
    state: 'New Mexico', 
    coords: [34.840515, -106.248482], 
    abbreviation: 'nm'
  },
  {
    state: 'New York', 
    coords: [42.165726, -74.948051], 
    abbreviation: 'ny'
  },
  {
    state: 'North Carolina', 
    coords: [35.630066, -79.806419], 
    abbreviation: 'nc'
  },
  {
    state: 'North Dakota', 
    coords: [47.528912, -99.784012], 
    abbreviation: 'nd'
  },
  {
    state: 'Ohio', 
    coords: [40.388783, -82.764915], 
    abbreviation: 'oh'
  },
  {
    state: 'Oklahoma', 
    coords: [35.565342, -96.928917], 
    abbreviation: 'ok'
  },
  {
    state: 'Oregon', 
    coords: [44.572021, -122.070938], 
    abbreviation: 'or'
  },
  {
    state: 'Pennsylvania', 
    coords: [40.590752, -77.209755], 
    abbreviation: 'pa'
  },
  {
    state: 'Rhode Island', 
    coords: [41.680893, -71.511780], 
    abbreviation: 'ri'
  },
  {
    state: 'South Carolina', 
    coords: [33.856892, -80.945007], 
    abbreviation: 'sc'
  },
  {
    state: 'South Dakota', 
    coords: [44.299782, -99.438828], 
    abbreviation: 'sd'
  },
  {
    state: 'Tennessee', 
    coords: [35.747845, -86.692345], 
    abbreviation: 'tn'
  },
  {
    state: 'Texas', 
    coords: [31.054487, -97.563461], 
    abbreviation: 'tx'
  },
  {
    state: 'Utah', 
    coords: [40.150032, -111.862434], 
    abbreviation: 'ut'
  },
  {
    state: 'Vermont', 
    coords: [44.045876, -72.710686], 
    abbreviation: 'vt'
  },
  {
    state: 'Virginia', 
    coords: [37.769337, -78.169968], 
    abbreviation: 'va'
  },
  {
    state: 'Washington', 
    coords: [47.400902, -121.490494], 
    abbreviation: 'wa'
  },
  {
    state: 'West Virginia', 
    coords: [38.491226, -80.954453], 
    abbreviation: 'wv'
  },
  {
    state: 'Wisconsin', 
    coords: [44.268543, -89.616508], 
    abbreviation: 'wi'
  },
  {
    state: 'Wyoming', 
    coords: [42.755966, -107.302490], 
    abbreviation: 'wy'
  }
];

// Map declaration
let map = L.map(mapContainerEl).setView([37.0902, -95.7129], 4);

// Array to hold data for markers;
let markers = [];


async function covidData(state) {
  // state Specific data
  try {
    // Fetch Data
    const stateData = await fetch(
      `https://covidtracking.com/api/v1/states/${state}/current.json`
    );
    // Format Data
    const formattedData = await stateData.json();
    console.log(formattedData);
    // Pass data into function
    stateSpecificData(formattedData);
  } catch {
    console.log('error');
  }
}

function stateSpecificData(stateData) {
  // Data to consider
  // State - Date
  stateNameContainerEl.innerHTML = `State: ${stateData.state}`;
  stateDataContainerEl.innerHTML = `Date: ${stateData.date}`;
  // Positive cases: Positive Total (Increase Number, Neg-Red, Pos-Green)Negative Total
  positiveCasesEl.innerHTML = `${stateData.positive} (${stateData.positiveIncrease})`;
  // Negative Cases: Negative Total (Increase/Decrease)
  negativeCasesEl.innerHTML = `${stateData.negative} (${stateData.negativeIncrease})`;
  // Hospitalized Currently
  hospitalContainerEl.innerHTML = `${stateData.hospitalized}`;
  // Death Total
  deathContainerEl.innerHTML = `${stateData.deathConfirmed}`;
  // Time Updated
  updateContainerEl.innerHTML = `${stateData.dateModified}`;
}

function interactiveMap() {
  L.tileLayer(
    'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=b4iRomc8BGMm2IJTbDXc',
    {
      tileSize: 512,
      zoomOffset: -1,
      maxZoom: 6,
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
      crossOrigin: true,
    }
  ).addTo(map);
}

function createMapMarkers(){
  for (let i = 0; i < stateInfo.length; i++) {
    let marker = L.marker([stateInfo[i].coords[0], stateInfo[i].coords[1]], {title: stateInfo[i].abbreviation}).addTo(map);
  }
}

function populateStateInfo(event){
  const stateAbbrev = event.originalEvent.srcElement.title
  covidData(stateAbbrev);
}

interactiveMap();
createMapMarkers();

map.addEventListener("click", populateStateInfo);

// function populateMapData {
//     // Data to consider
//         // State - Date
//         // Positive cases: Positive Total (Increase Number, Neg-Red, Pos-Green)Negative Total
//         // Negative Cases: Negative Total (Increase/Decrease)
//         // Hospitalized Currently
//         // Death Total
//         // Time Updated
// }
