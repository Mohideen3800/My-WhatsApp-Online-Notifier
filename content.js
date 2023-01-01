// Listen for changes to the online status of contacts
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      // Check if the added node is a contact
      if (node.classList && node.classList.contains('_3j8Pd')) {
        // Check if the contact is online
        const status = node.querySelector('._3LWZl');
        if (status && status.innerText === 'online') {
          // Update the online status of the contact
          const name = node.querySelector('._19RFN').innerText;
          chrome.storage.local.set({ [`contact_${name}`]: { online: true } });
        }
      }
    }
  }
});
observer.observe(document.body, { childList: true });
