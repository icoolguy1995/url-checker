document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById('urlInput');
  const resultDiv = document.getElementById('result');
  let timeout = null;
  let lastUrl = '';
  let isRequestPending = false;

  const validateUrl = async (url) => {
    // Check if the URL is empty
    if (url === '') {
      resultDiv.textContent = 'No URL entered';
      resultDiv.style.color = 'black';
      return;
    }

    // Check URL format
    if (!isValidUrl(url)) {
      resultDiv.textContent = 'Invalid URL format';
      resultDiv.style.color = 'red';
      return;
    }

    // Avoid duplicate requests
    if (url === lastUrl && isRequestPending) {
      return;
    }

    lastUrl = url;
    isRequestPending = true;

    checkUrlExistence(url)
        .then(({ status, message }) => {
          isRequestPending = false;
          if (url === urlInput.value) {
            if (status === 404) {
              resultDiv.textContent = message;
              resultDiv.style.color = 'orange'; // Indicate resource not found
            } else {
              resultDiv.textContent = message;
              resultDiv.style.color = 'green'; // Indicate success
            }
          }
        })
        .catch(error => {
          // Handle any errors that occur during the fetch
          isRequestPending = false;
          console.error('Error checking URL:', error);
          resultDiv.textContent = 'Error checking URL';
          resultDiv.style.color = 'red';
        });
  };

  const debouncedValidateUrl = debounce(validateUrl, 500);

  urlInput.addEventListener('input', function() {
    resultDiv.textContent = 'Checking...';
    resultDiv.style.color = 'blue';
    debouncedValidateUrl(urlInput.value);
  });

  urlInput.addEventListener('change', function() {
    validateUrl(urlInput.value);
  });
});

function debounce(callback, wait) {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

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
      const isFile = url.endsWith('.html');
      const isFolder = url.endsWith('.php')

      if (isFile) {
        resolve({ status: 200, message: 'URL exists and is a file' });
      } else if (isFolder) {
        resolve({ status: 200, message: 'URL exists and is a folder' });
      } else {
        resolve({ status: 404, message: 'Resource does not exist' });
      }
    }, 300); // Mock server delay
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { isValidUrl, checkUrlExistence };
}
