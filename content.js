// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the phone number input field and submit button
  const phoneNumberInput = document.getElementById("phoneNumber");
  const submitButton = document.getElementById("submitButton");

  // Add an event listener for the submit button
  submitButton.addEventListener("click", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the phone number from the input field
    const phoneNumber = phoneNumberInput.value;

    // Start tracking the online status of the specified contact
    startTracking(phoneNumber);
  });
});

// Start tracking the online status of the specified contact
function startTracking(phoneNumber) {
  // Check the online status of the contact every 5 seconds
  setInterval(function() {
    checkOnlineStatus(phoneNumber);
  }, 5000);
}

// Check the online status of the specified contact
function checkOnlineStatus(phoneNumber) {
  // Find the element containing the contact's name in the chat list
  const contactNameElement = document.querySelector(`[title="${phoneNumber}"]`);

  // Check if the contact is online by checking the class name of the element
  if (contactNameElement && contactNameElement.className.includes("online")) {
    // The contact is online, send a notification
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Online Status Tracker",
      message: `${phoneNumber} is now online!`
    });
  }
}
