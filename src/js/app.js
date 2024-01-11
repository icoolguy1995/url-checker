document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById('urlInput');
  const resultDiv = document.getElementById('result');
  let timeout = null;

  urlInput.addEventListener('input', function() {
    clearTimeout(timeout);

    // Show 'checking' message when user stops typing
    resultDiv.textContent = 'Checking...';
    resultDiv.style.color = 'blue';

    // Debounce the server request
    timeout = setTimeout(() => {
      const url = urlInput.value;

      // Check URL format
      if (!isValidUrl(url)) {
        resultDiv.textContent = 'Invalid URL format';
        resultDiv.style.color = 'red';
        return;
      }

      checkUrlExistence(url).then(response => {
        resultDiv.textContent = response;
        resultDiv.style.color = 'green';
      });
    }, 500); // Debounce for 500ms
  });
});

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function checkUrlExistence(url) {
  // Mock server response
  return new Promise(resolve => {
    setTimeout(() => {
      // Mocking a server response
      const isFile = url.endsWith('.html') || url.endsWith('.php');
      resolve(isFile ? 'URL exists and is a file' : 'URL exists and is a folder');
    }, 300); // Mock server delay
  });
}

module.exports = { isValidUrl, checkUrlExistence };
