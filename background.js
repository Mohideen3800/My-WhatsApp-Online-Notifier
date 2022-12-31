// background.js
// Select the element that displays the online status of a contact
const onlineStatusSelector = '.pane-header .chat-status';

// Select the audio element that plays the notification sound
const audioElement = document.createElement('audio');
audioElement.src = 'notification.mp3';

// Wait for the online status element to be added to the DOM
const waitForElement = selector => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);
  });
};

waitForElement(onlineStatusSelector).then(element => {
  // Observe the online status element for changes
  const observer = new MutationObserver(mutations => {
    // Check if the online status of a contact has changed
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
