// background.js

// Select the audio element that plays the notification sound
const audioElement = document.createElement('audio');
audioElement.src = 'notification.mp3';

// Wait for the online status element to be added to the DOM
const waitForElement = selector => {
  return new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Timed out waiting for element: ${selector}`));
    }, 5000); // Set the timeout to 5 seconds

    const interval = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        clearInterval(interval);
        clearTimeout(timeout);
        resolve(element);
      }
    }, 100);
  });
};

// Get the selected contact from storage
chrome.storage.sync.get('contact', data => {
  const contact = data.contact;

  // Select the element that displays the online status of the selected contact
  const onlineStatusSelector = `.pane-header[title="${contact}"] .chat-status`;

  waitForElement(onlineStatusSelector).then(element => {
    // Observe the online status element for changes
    const observer = new MutationObserver(mutations => {
      // Check if the online status of the selected contact has changed
      const onlineStatusChanged = mutations.some(
        mutation => mutation.attributeName === 'title'
      );

      if (onlineStatusChanged) {
        // Play the notification sound
        audioElement.play();
      }
    });

    // Start observing the online status element
    observer.observe(element, {
      attributes: true
    });
  });
});
