// Make sure that the chrome.storage.local object is defined before trying to use it
if (typeof chrome !== 'undefined' && typeof chrome.storage !== 'undefined' && typeof chrome.storage.local !== 'undefined') {
  // Retrieve the online history for each contact
  chrome.storage.local.get(null, (items) => {
    for (const key in items) {
      if (key.startsWith('contact_')) {
        const contact = key.replace('contact_', '');
        const history = items[key];
        // Display the online history for the contact
        const li = document.createElement('li');
        li.innerHTML = `${contact}: ${history.online ? 'Online' : 'Offline'}`;
        document.querySelector('#contacts').appendChild(li);
      }
    }
  });
}

// Navigate to the history page when the link is clicked
document.querySelector('#history').addEventListener('click', (event) => {
  event.preventDefault();
  chrome.tabs.create({ url: 'history.html' });
});
