// contentScript.js
console.log("Custom CSS Extension is active!");
// Function to grab content from the specified class and insert it into another element
// contentScript.js
console.log("Content script is running!");

document.addEventListener('click', function () {
    // Find all elements with the specified class
    const sourceElements = document.getElementsByClassName('dashboard-fehler');
  
    // Check if there is at least one element with the class
    if (sourceElements.length > 1) {
      // Get the content from the second element (change the index if needed)
      const contentToInsert = sourceElements[1].innerHTML;
  
      // Find the target element where you want to insert the content
      const targetElement = document.querySelector('.edit-booking-bottomrow-left');
      // Check if the target element exists
      if (targetElement) {
        // Insert the content into the target element
        targetElement.innerHTML = contentToInsert;
      }
    }
  });
  

// Add your custom CSS rules to override the existing ones
const overrideStyles = `
.jnsRza .react-calendar__month-view__days__day.dashboard-frei, 
.jnsRza .react-calendar__month-view__days__day--weekend,
.react-calendar__tile react-calendar__month-view__days__day .react-calendar__month-view__days__day--weekend 
 {
    border-radius: 5px !important; /* Your desired border-radius */
    background-color: #393939 !important; /* Your desired background-color */
  }
`;

// Create a style element and append it to the document head
const styleElement = document.createElement("style");
styleElement.textContent = overrideStyles;
document.head.appendChild(styleElement);
window.onload=function(){
    document.getElementById("sc-jRQBWg FfqaS").addEventListener("click", displayDate);
}

// contentScript.js

function applyUserColor() {
  chrome.storage.sync.get(['selectedColor'], function (result) {
      const selectedColor = result.selectedColor || 'color1';

      // Default styles (Color 1)
      const defaultStyles = `
          :root {
              --bck-main: #020202;
              --bck-second: #202020;
              --bck-third: #393939;

              --txt-main: #f0ffff;
              --txt-active: #b9f8f8;

              --btn: #02556d;
          }
      `;

      // Additional styles for Color 2
      const additionalStyles = `
          :root {
              --bck-main: #1a1625;
              --bck-second: #2f2b3a;
              --bck-third: #46424f;

              --txt-main: #f0ffff;
              --txt-active: #b9f8f8;

              --btn: #02556d;
          }
      `;

      // Apply the default styles
      applyStyles(defaultStyles);

      // If Color 2 is selected, apply additional styles and remove Color 1 styles
      if (selectedColor === 'color2') {
          applyStyles(additionalStyles);
          removeStyles('.default-styles');
      } else {
          // If Color 1 is selected, remove Color 2 styles
          removeStyles('.additional-styles');
      }

      // Add more style adjustments as needed
  });
}

// Call the function to apply user color when the content script is executed
applyUserColor();

// Listen for changes in storage
chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (namespace === 'sync' && 'selectedColor' in changes) {
      applyUserColor();
  }
});

function applyStyles(styles, className) {
  // Remove existing style elements with the same className
  removeStyles(className);

  // Create a style element and append it to the document's head
  const styleElement = document.createElement('style');
  styleElement.classList.add(className);
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

function removeStyles(className) {
  // Remove existing style elements with the specified className
  const existingStyles = document.querySelectorAll(className);
  existingStyles.forEach(style => style.remove());
}

