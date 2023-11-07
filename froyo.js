// Get a reference to the HTML elements
const inputPrompt = prompt("Please enter a list of comma-separated froyo flavors:");
const flavorsArray = inputPrompt.split(',');

// Function to count flavors
function countFlavors(flavors) {
    const flavorCount = {};

    flavors.forEach(flavor => {
        if (flavorCount[flavor]) {
            flavorCount[flavor]++;
        } else {
            flavorCount[flavor] = 1;
        }
    });

    return flavorCount;
}

// Count the flavors and display the results in the console
const countedFlavors = countFlavors(flavorsArray);
console.table(countedFlavors);
