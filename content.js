// content.js

// Observe changes to the DOM
const observer = new MutationObserver(mutations => {
  // Check if the selected contact comes online
  const onlineIndicator = document.querySelector(
    '.P6z4j.oJeWuf.ll8tLf.WhwD5d'
  );
  if (onlineIndicator) {
    // Get the phone number of the selected contact from storage
    chrome.storage.sync.get(['contact'], result => {
      const selectedContact = result.contact;

      // Play a notification sound
      const audio = new Audio('notification.mp3');
      audio.play();

      // Add an entry to the activity log
      const log = document.querySelector('#activity-log');
      log.innerHTML += `<p>${selectedContact} came online at ${new Date()}</p>`;
    });
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
