// Wait for the iframe to load
document.getElementById('myIframe').addEventListener('load', function () {
    // Access the iframe content document
    const iframeContentDoc = this.contentDocument || this.contentWindow.document;

    // Find the element with the ID "ui-container" in the iframe
    const uiContainer = iframeContentDoc.getElementById('ui-container');

    // Update the background color of the found element
    if (uiContainer) {
        uiContainer.style.backgroundColor = '#ffeecc';
    }
});