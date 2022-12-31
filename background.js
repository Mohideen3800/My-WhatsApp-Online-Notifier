// background.js

// Set up the WhatsApp Web API
const api = new WhatsAppWebAPI();

// Set up the web notifications API
const notifications = new Notification();

// Set up the web audio API
const audio = new Audio("notification.mp3");

// Listen for updates from the WhatsApp Web API
api.on("update", update => {
  // Check if the update is about a contact's online status
  if (update.type === "online_status") {
    // Send a notification to the user's browser
    notifications.show("Contact is online", {
      body: `${update.contact.name} is now online`,
      icon: update.contact.profile_picture,
      sound: audio
    });
  }
});

// Connect to WhatsApp Web
api.connect();

// Listen for messages from the popup window
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Check if the message is a request to set the tracked contact
  if (request.type === "set_tracked_contact") {
    // Set the tracked contact in the WhatsApp Web API
    api.setTrackedContact(request.phoneNumber, request.countryCode);
  }
});
