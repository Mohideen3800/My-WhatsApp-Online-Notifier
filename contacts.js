// Create the webview element
const webview = document.querySelector('#webview');
webview.src = 'https://web.whatsapp.com';
webview.addEventListener('load', () => {
  // Inject a script into the webview to listen for messages from the extension
  webview.executeScript({ file: 'scripts/webview.js' });
});

// Listen for messages from the webview
window.addEventListener('message', (event) => {
  if (event.source === webview.contentWindow) {
    // Display the selected contacts in the browser element
    const contacts = event.data;
    document.querySelector('#contacts').innerHTML = '';
    for (const contact of contacts) {
      const li = document.createElement('li');
      li.innerText = contact;
      document.querySelector('#contacts').appendChild(li);
    }
  }
});

// Close the window when the "done" link is clicked
document.querySelector('#done').addEventListener('click', (event) => {
  event.preventDefault();
  window.close();
});
