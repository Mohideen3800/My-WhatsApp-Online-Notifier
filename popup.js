// popup.js

// Add event listeners for the Start tracking and Stop tracking buttons
document.getElementById('start-tracking').addEventListener('click', startTracking);
document.getElementById('stop').addEventListener('click', stopTracking);

// Start tracking the selected contact
function startTracking() {
  // Get the phone number from the input field
  const phoneNumber = document.getElementById('phone-number').value;

  // Save the phone number in storage
  chrome.storage.sync.set({ contact: phoneNumber }, () => {
    // Update the UI to show that tracking has started
    document.getElementById('select-contact').style.display = 'none';
    document.getElementById('stop-tracking').style.display = 'block';
    document.getElementById('tracked-contact').textContent = phoneNumber;

    // Send a message to the content script to start tracking the contact
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'startTracking' });
    });
  });
}

// Stop tracking the selected contact
function stopTracking() {
  // Clear the phone number from storage
  chrome.storage.sync.remove('contact', () => {
    // Update the UI to show that tracking has stopped
    document.getElementById('select-contact').style.display = 'block';
    document.getElementById('stop-tracking').style.display = 'none';

    // Send a message to the content script to stop tracking the contact
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'stopTracking' });
    });
  });
}
