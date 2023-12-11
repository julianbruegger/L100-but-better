// background.js

function copyContent(tabId) {
    if (tabId) {
      console.log('Copying content from tab with ID:', tabId);
      // Send a message to the content script in the specified tab
      chrome.tabs.sendMessage(tabId, { action: 'copyContent' }, function (response) {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          return;
        }
  
        if (response && response.success) {
          console.log('Content copied successfully!');
          // Optionally, provide user feedback
          alert('Content of the div copied to clipboard!');
        } else {
          console.error('Failed to copy content. Response:', response);
        }
      });
    } else {
      console.error('Unable to determine active tab ID. Tabs:', tabs);
    }
  }
  
  // Listen for messages from the popup
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'copyContent') {
      // Get the active tab ID
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        const activeTabId = activeTab && activeTab.id;
        copyContent(activeTabId);
      });
    }
  });
  