// popup.js

// Display the selected contact when it's updated
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'update_selected_contact') {
    const selectedContactDiv = document.querySelector('#selected-contact');
    selectedContactDiv.innerHTML = `Selected contact: ${request.contact}`;
  }
});

// Get the phone number of the selected contact from storage
chrome.storage.sync.get(['contact'], result => {
  const selectedContact = result.contact;
  if (selectedContact) {
    // Display the selected contact
    const selectedContactDiv = document.querySelector('#selected-contact');
    selectedContactDiv.innerHTML = `Selected contact: ${selectedContact}`;
  }
});
