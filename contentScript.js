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

// Function to handle the selected template
function loadSelectedTemplate() {
    const selectedTemplate = document.getElementById('savedTemplateSelector').value;
    const storedContent = localStorage.getItem(selectedTemplate + '_content') || '';
  
    // Inject the content into the currently focused textarea on the page
    const focusedElement = document.activeElement;
  
    if (focusedElement.tagName === 'TEXTAREA') {
      focusedElement.value = storedContent;
    } else {
      console.error('No textarea is currently focused.');
    }
  }
  
  // ... (rest of your code)
  