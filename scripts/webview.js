// Wait for the webview to load
window.addEventListener('load', () => {
  // Select the contacts in the webview
  const contacts = [];
  const elements = document.querySelectorAll('._3j8Pd');
  for (const element of elements) {
    if (element.querySelector('._1WZqU').checked) {
      const name = element.querySelector('._19RFN').innerText;
      contacts.push(name);
    }
  }
  // Send the selected contacts to the extension
  window.postMessage(contacts, '*');
});
