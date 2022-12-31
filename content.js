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

      // Send a notification
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: `${selectedContact} is online`,
        message: 'Your selected contact has come online on WhatsApp.'
      });
    });
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
