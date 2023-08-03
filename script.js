// Function to check internet connectivity
function checkInternetConnection() {
  if (navigator.onLine) {
    document.getElementById('status').innerText = 'You are online.';
  } else {
    document.getElementById('status').innerText = 'You are offline.';
  }
}

// Call the function when the extension popup is opened
document.addEventListener('DOMContentLoaded', checkInternetConnection);
