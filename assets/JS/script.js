const mapContainerEl = document.querySelector(`#map-container`);
const cityContainerEl = document.querySelector(`#city-container`);
const infoContainerEl = document.querySelector(`#info-container`);
const testCentersEl = document.querySelector(`test-centers`);

// Create array or objects
    // Save each state latitude/longitude
    // Populate data for each state on map with markers


// On page load show testing centers

// User option to show COVID state data

// Function to hold states
const states = [""];

// Array to hold data for markers;
let markers = [];

async function covidData(userChoice){
    // If user wants specific state data
    if (states.contains(userChoice)){
        try{
            const stateData = await fetch(`https://covidtracking.com/api/v1/states/${state}/current.json`);

            // Functions to pass state data into
                // Format data
                // Pass data into markers array
                // Display a marker for the state
                // Populate data
                // Allow user to save their selection
        } catch{
            error();
        }
    } 
    // If the user selects for all US states
    else if (/*User Wants All State Data*/) {
        try{
            const allStatesData = await fetch(`https://covidtracking.com/api/v1/states/current.json`);

            // Function to pass all states data into
                // Format data
                // Populate marker for data
                // Display a marker for every state
                // Make markers clickable 
                // Allow user to save the selection
        } catch{
            error();
        }
    }
    // User wants compiled US values
    else {
        try{
            const unitedStatesData = await fetch(`https://covidtracking.com/api/v1/us/current.json`);

            // Function to pass compiled US Data into
                // Format data
                // Populate marker for data
                // Display single marker with all US data
                // Allow user to favorite data
        }  catch {
            error();
        }
    }
}


// Error catching function
function error(){
    // Determine what error catching will be
}

function populateData {
    // Data to consider
        // State - Date
        // Positive cases: Positive Total (Increase Number, Neg-Red, Pos-Green)Negative Total
        // Negative Cases: Negative Total (Increase/Decrease)
        // Hospitalized Currently
        // Death Total
        // Time Updated
}