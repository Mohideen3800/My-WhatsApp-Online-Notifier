// popup.js

// Get the form element
const form = document.querySelector("form");

// Handle form submission
form.addEventListener("submit", event => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the phone number and country code from the form
  const phoneNumber = document.querySelector("#phone-number").value;
  const countryCode = document.querySelector("#country-code").value;

  // Send a message to the background script to set the tracked contact
  chrome.runtime.sendMessage({
    type: "set_tracked_contact",
    phoneNumber: phoneNumber,
    countryCode: countryCode
  });
});
