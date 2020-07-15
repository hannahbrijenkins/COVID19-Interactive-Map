let state = "al";

async function COVIDData(){
    const unformattedData = await fetch(`https://covidtracking.com/api/v1/states/${state}/current.json`);
    const formattedData = await unformattedData.json();
    console.log(formattedData);
}

COVIDData();

// Create array or objects
    // Save each state latitude/longitude
    // Populate data for each state on map with markers

// Dropdown to select state
    // Capture value of the selected state
    // Pass into fetch function
    // Return data
    // Pass data into functions


// On page load show testing centers

// User option to show COVID state data