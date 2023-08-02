// script.js

// Function to calculate brightness based on the background color
function getBrightness(color) {
    // Convert the color to an RGB array
    const rgb = color.match(/[0-9]+/g).map(Number);
    // Calculate brightness using the formula (R * 299 + G * 587 + B * 114) / 1000
    return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
}

// Function to adjust text color based on the element's background color brightness
function adjustTextColor() {
    const elements = document.querySelectorAll('.element');
    elements.forEach((element) => {
        const bgColor = getComputedStyle(element).backgroundColor;
        const brightness = getBrightness(bgColor);
        // If the background is dark, set the text color to white; otherwise, set it to black
        element.style.color = brightness < 128 ? '#fff' : '#000';
    });
}

// Call the adjustTextColor function when the document is fully loaded
document.addEventListener('DOMContentLoaded', adjustTextColor);

// Function to calculate brightness based on the background color
function getBrightness(color) {
    // Convert the color to an RGB array
    const rgb = color.match(/[0-9]+/g).map(Number);
    // Calculate brightness using the formula (R * 299 + G * 587 + B * 114) / 1000
    return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
}
