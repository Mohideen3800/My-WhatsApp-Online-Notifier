// popup.js
// Select the form element
const form = document.querySelector('form');

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  // Get the selected contact
  const contact = form.elements.contact.value;

  // Save the selected contact using the chrome.storage API
  chrome.storage.sync.set({ contact }, () => {
    console.log(`Saved contact: ${contact}`);
  });
