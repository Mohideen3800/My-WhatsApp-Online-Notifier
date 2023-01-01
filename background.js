// Listen for changes to the online status of contacts
chrome.storage.onChanged.addListener((changes) => {
  for (const key in changes) {
    const change = changes[key];
    if (key.startsWith('contact_') && change.newValue.online) {
      // Send a push notification when a contact goes online
      const contact = key.replace('contact_', '');
      chrome.notifications.create({
        type: 'basic',
        title: `${contact} is now online`,
        message: 'You can now message them in WhatsApp',
        iconUrl: 'icon128.png'
      });
    }
  }
});
