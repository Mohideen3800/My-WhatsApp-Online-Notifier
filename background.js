// Select the element that displays the online status of a contact
const onlineStatusSelector = '.pane-header .chat-status';

// Select the audio element that plays the notification sound
const audioElement = document.createElement('audio');
audioElement.src = 'notification.mp3';

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
observer.observe(document.querySelector(onlineStatusSelector), {
  attributes: true
});
