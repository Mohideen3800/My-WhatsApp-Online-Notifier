// Retrieve the online history for each contact
chrome.storage.local.get(null, (items) => {
  for (const key in items) {
    if (key.startsWith('contact_')) {
      const contact = key.replace('contact_', '');
      const history = items[key];
      // Display the online history for the contact
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${contact}</td><td>${history.online ? 'Online' : 'Offline'}</td>`;
      document.querySelector('#history tbody').appendChild(tr);
    }
  }
});

// Navigate back to the popup window when the "back" link is clicked
document.querySelector('#back').addEventListener('click', (event) => {
  event.preventDefault();
  window.close();
});
