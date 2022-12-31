// popup.js

// Select the form element
const form = document.querySelector('form');

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  // Get the phone number of the selected contact
  const contact = form.elements.contact.value;

  // Save the selected contact using the chrome.storage API
  chrome.storage.sync.set({ contact }, () => {
    console.log(`Saved contact: ${contact}`);

    // Display the selected contact and enable the view activity log button
    const selectedContactDiv = document.querySelector('#selected-contact');
    selectedContactDiv.innerHTML = `Selected contact: ${contact}`;
    const viewActivityLogButton = document.querySelector('#view-activity-log');
    viewActivityLogButton.disabled = false;
  });

  // Handle errors
  chrome.storage.onChanged.addListener((changes, namespace) => {
    for (const key in changes) {
      const storageChange = changes[key];
      console.log(
        'Storage key "%s" in namespace "%s" changed. ' +
          'Old value was "%s", new value is "%s".',
        key,
        namespace,
        storageChange.oldValue,
        storageChange.newValue
      );
      // Display an error message
      form.innerHTML = '<p>Error saving contact. Please try again.</p>';
    }
  });
});

// Handle click on the view activity log button
const viewActivityLogButton = document.querySelector('#view-activity-log');
viewActivityLogButton.addEventListener('click', () => {
  // Show the activity log page action for the current tab
  chrome.pageAction.show(tabs[0].id);
});
