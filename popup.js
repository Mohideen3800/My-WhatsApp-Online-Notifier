// popup.js

// Wait for the contacts list to be added to the DOM
const waitForContacts = () => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const contacts = document.querySelectorAll('.pane-header');
      if (contacts.length > 0) {
        clearInterval(interval);
        resolve(contacts);
      }
    }, 100);
  });
};

waitForContacts().then(contacts => {
  // Get the <select> element
  const select = document.querySelector('select');

  // Add an option for each contact
  contacts.forEach(contact => {
    const name = contact.getAttribute('title');
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });
});
