// popup.js

// Wait for the contacts list to be added to the DOM
const waitForContacts = () => {
  return new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      clearInterval(interval);
      reject(new Error('Timed out waiting for contacts list'));
    }, 5000); // Set the timeout to 5 seconds

    const interval = setInterval(() => {
      const contacts = document.querySelectorAll('.pane-header');
      if (contacts.length > 0) {
        clearInterval(interval);
        clearTimeout(timeout);
        resolve(contacts);
      }
    }, 100);
  });
};

waitForContacts().then(contacts => {
  // Get the <select> element
  const select = document.querySelector('select');

  // Add the first 10 contacts to the dropdown menu
  contacts.slice(0, 10).forEach(contact => {
    const name = contact.getAttribute('title');
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });
});

// Select the form element
const form = document.querySelector('form');

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  // Get the selected contact
  const contact = form.elements.contact.value;

  // Save the selected contact using the chrome.storage API
  chrome.storage.sync.set({ contact }, () => {
    console.log(`Saved contact: ${contact}`);
  });
});
