// Containers
const mapContainerEl = document.querySelector(`#map-container`);
const cityContainerEl = document.querySelector(`#city-container`);
const infoContainerEl = document.querySelector(`#info-container`);

// State Specific Data Variables
const stateNameContainerEl = document.querySelector('#state-name');
const stateDataContainerEl = document.querySelector('#state-date');
const positiveCasesEl = document.querySelector('#pos');
const negativeCasesEl = document.querySelector('#neg');
const hospitalContainerEl = document.querySelector('#hospital');
const deathContainerEl = document.querySelector('#deaths');
const updateContainerEl = document.querySelector('#update');

const testCentersEl = document.querySelector(`#test-centers`);

// Function to hold states
const states = 'al';

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
