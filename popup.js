// Add an event listener for the stop tracking button
document.getElementById('stop-tracking-button').addEventListener('click', function() {
  // Send a message to the background script to stop tracking
  chrome.runtime.sendMessage({ type: 'stop-tracking' });
});

// Add an event listener for the contact select menu
document.getElementById('contact-select').addEventListener('change', function() {
  // Get the selected contact's WhatsApp user ID
  const contactId = this.value;
  // Send a message to the background script to start tracking the selected contact
  chrome.runtime.sendMessage({ type: 'start-tracking', contactId });
});
