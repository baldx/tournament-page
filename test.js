function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Toggle the 'dark-mode' class on the body
  
    // Save user preference in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  // Load user preference from localStorage on page load
  window.onload = function() {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  };
  