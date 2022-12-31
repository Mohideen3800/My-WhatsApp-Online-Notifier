// popup.js

const startTrackingButton = document.querySelector('#start-tracking');

startTrackingButton.addEventListener('click', () => {
  // Get the phone number of the selected contact from the page
  const selectedContact = document.querySelector('._3CNEp._1f1zm').title;

  // Save the selected contact to storage
  chrome.storage.sync.set({ contact: selectedContact });
});
