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
    coords: [32.806671, -86.791130]
  },
  {
    state: 'Alaska',
    coords: [61.370716, 152.404419]
  },
  {
    state: 'Arizona',
    coords: [33.729759, -111.431221]
  },
  {
    state: 'Arkansas',
    coords: [34.969704, -92.373123]
  },
  {
    state: 'California', 
    coords: [36.116203, -119.681564]
  },
  {
    state: 'Colorado',
    coords: [39.059811, -105.311104]
  },
  {
    state: 'Connecticut',
    coords: [41.597782, -72.755371]
  },
  {
    state: 'Delaware',
    coords: [39.318523, -75.507141]
  },
  {
    state: 'District Of Columbia',
    coords: [38.897438, -77.026817]
  },
  {
    state: 'Florida',
    coords: [27.766279, -81.686783]
  },
  {
    state: 'Georgia',
    coords: [33.040619, -83.643074]
  },
  {
    state: 'Hawaii',
    coords: [21.094318, -157.498337]
  },
  {
    state: 'Idaho', 
    coords: [44.240459, -114.478828]
  },
  {
    state: 'Illinois', 
    coords: [40.349457, -88.986137]
  },
  {
    state: 'Indiana', 
    coords: [39.849426, -86.258278]
  },
  {
    state: 'Iowa', 
    coords: [42.011539, -93.210526]
  },
  {
    state: 'Kansas', 
    coords: [38.526600, -96.726486]
  },
  {
    state: 'Kentucky', 
    coords: [37.668140, -84.670067]
  },
  {
    state: 'Louisiana', 
    coords: [31.169546, -91.867805]
  },
  {
    state: 'Maine', 
    coords: [44.693947, -69.381927]
  },
  {
    state: 'Maryland', 
    coords: [39.063946, -76.802101]
  },
  {
    state: 'Massachusetts', 
    coords: [42.230171, -71.530106]
  },
  {
    state: 'Michigan', 
    coords: [43.326618, -84.536095]
  },
  {
    state: 'Minnesota', 
    coords: [45.694454, -93.900192]
  },
  {
    state: 'Mississippi', 
    coords: [32.741646, -89.678696]
  },
  {
    state: 'Missouri', 
    coords: [38.456085, -92.288368]
  },
  {
    state: 'Montana', 
    coords: [46.921925, -110.454353]
  },
  {
    state: 'Nebraska', 
    coords: [41.125370, -98.268082]
  },
  {
    state: 'Nevada', 
    coords: [38.313515, -117.055374]
  },
  {
    state: 'New Hampshire', 
    coords: [43.452492, -71.563896]
  },
  {
    state: 'New Jersey', 
    coords: [40.298904, -74.521011]
  },
  {
    state: 'New Mexico', 
    coords: [34.840515, -106.248482]
  },
  {
    state: 'New York', 
    coords: [42.165726, -74.948051]
  },
  {
    state: 'North Carolina', 
    coords: [35.630066, -79.806419]
  },
  {
    state: 'North Dakota', 
    coords: [47.528912, -99.784012]
  },
  {
    state: 'Ohio', 
    coords: [40.388783, -82.764915]
  },
  {
    state: 'Oklahoma', 
    coords: [35.565342, -96.928917]
  },
  {
    state: 'Oregon', 
    coords: [44.572021, -122.070938]
  },
  {
    state: 'Pennsylvania', 
    coords: [40.590752, -77.209755]
  },
  {
    state: 'RhodeIsland', 
    coords: [41.680893, -71.511780]
  },
  {
    state: 'SouthCarolina', 
    coords: [33.856892, -80.945007]
  },
  {
    state: 'SouthDakota', 
    coords: [44.299782, -99.438828]
  },
  {
    state: 'Tennessee', 
    coords: [35.747845, -86.692345]
  },
  {
    state: 'Texas', 
    coords: [31.054487, -97.563461]
  },
  {
    state: 'Utah', 
    coords: [40.150032, -111.862434]
  },
  {
    state: 'Vermont', 
    coords: [44.045876, -72.710686]
  },
  {
    state: 'Virginia', 
    coords: [37.769337, -78.169968]
  },
  {
    state: 'Washington', 
    coords: [47.400902, -121.490494]
  },
  {
    state: 'West Virginia', 
    coords: [38.491226, -80.954453]
  },
  {
    state: 'Wisconsin', 
    coords: [44.268543, -89.616508]
  },
  {
    state: 'Wyoming', 
    coords: [42.755966, -107.302490]
  }
];

// Map declaration
let map = L.map(mapContainerEl).setView([37.0902, -95.7129], 4);

// Array to hold data for markers;
let markers = [];


async function covidData() {
  // state Specific data
  try {
    // Fetch Data
    const stateData = await fetch(
      `https://covidtracking.com/api/v1/states/${states}/current.json`
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
    let marker = L.marker([stateInfo[i].coords[0], stateInfo[i].coords[1]]).addTo(map);
  }
}

interactiveMap();
createMapMarkers();
covidData();

// function populateMapData {
//     // Data to consider
//         // State - Date
//         // Positive cases: Positive Total (Increase Number, Neg-Red, Pos-Green)Negative Total
//         // Negative Cases: Negative Total (Increase/Decrease)
//         // Hospitalized Currently
//         // Death Total
//         // Time Updated
// }
