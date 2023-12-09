document.addEventListener('DOMContentLoaded', function () {
  const templateSelector = document.getElementById('templateSelector');
  const editableTitle = document.getElementById('editableTitle');
  const editableContent = document.getElementById('editableContent');

  // Populate dropdown options
  const templateOptions = ["Template 1", "Template 2", "Template 3", "Template 4", "Template 5"];
  templateOptions.forEach((template, index) => {
    const option = document.createElement('option');
    option.value = `template${index + 1}`;
    option.textContent = template;
    templateSelector.appendChild(option);
  });

  // Load default template
  changeTemplate();

  // Add event listeners
  templateSelector.addEventListener('change', changeTemplate);
  document.getElementById('saveButton').addEventListener('click', saveChanges);
});

function changeTemplate() {
  const selectedTemplate = document.getElementById('templateSelector').value;
  const storedTitle = localStorage.getItem(selectedTemplate) || '';
  const storedContent = localStorage.getItem(selectedTemplate + '_content') || '';

  document.getElementById('editableTitle').value = storedTitle;
  document.getElementById('editableContent').value = storedContent;
}

function saveChanges() {
  const selectedTemplate = document.getElementById('templateSelector').value;
  const titleToSave = document.getElementById('editableTitle').value;
  const contentToSave = document.getElementById('editableContent').value;

  localStorage.setItem(selectedTemplate, titleToSave);
  localStorage.setItem(selectedTemplate + '_content', contentToSave);

  alert('Changes saved!');
}

document.addEventListener('DOMContentLoaded', function () {
  // Assuming you have an element with the ID 'copyContentButton'
  const copyContentButton = document.getElementById('copyContentButton');

  copyContentButton.addEventListener('click', function () {
    // Get the content of editableContent from local storage
    const editableContent = localStorage.getItem('template1_content') || '';

    // Find the textarea in your popup
    const textareaElement = document.querySelector('.edit-booking-description-display-2 textarea');

    // Paste the content into the textarea
    textareaElement.value = editableContent;
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const copyContentButton = document.getElementById('copyContentButton');

  copyContentButton.addEventListener('click', function () {
    // Get the content of editableContent from local storage
    const editableContent = localStorage.getItem('template1_content') || '';

    // Create a textarea element to temporarily hold the content
    const textareaElement = document.createElement('textarea');
    textareaElement.value = editableContent;

    // Append the textarea to the document (it doesn't have to be visible)
    document.body.appendChild(textareaElement);

    // Select the content of the textarea
    textareaElement.select();
    textareaElement.setSelectionRange(0, textareaElement.value.length);

    // Copy the selected content to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textareaElement);

    // Optionally, provide user feedback
    alert('Content copied to clipboard!');
  });
});
// popup.js

document.addEventListener('DOMContentLoaded', function () {
  const colorSelector = document.getElementById('colorSelector');
  const saveButton = document.getElementById('savecolorButton');

  console.log('Popup loaded successfully!');  // Add this line

  saveButton.addEventListener('click', function () {
      console.log('Save button clicked');  // Add this line

      const selectedColor = colorSelector.value;

      // Save the selected color to browser storage
      chrome.storage.sync.set({
          selectedColor: selectedColor
      }, function () {
          console.log('Color palette saved successfully!');
          //alert('Color palette saved successfully!');
      });
  });
});
