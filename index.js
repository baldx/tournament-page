const submitBtn = document.querySelector('.submit');
const joinLink = document.querySelectorAll('.join');
const toggleBtn = document.querySelector('#toggleMode');
const input = document.querySelectorAll('.input');
const popUp = document.querySelector('.pop-up');
const popUpBtn = document.querySelector('.popup-btn');

submitBtn.addEventListener('click', (e) => {
    sendEmail()
    e.preventDefault();
});

joinLink.forEach(e => {
    e.addEventListener('click', () => {
        popUp.style.display = 'flex'
    })
})

function sendEmail() {
    input.forEach(e => {
        e.value = '';
    })
    alert('Your message has been sent!')
}

popUpBtn.addEventListener('click', (e) => {
    popUp.style.display = 'none'
    e.preventDefault();
})



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
  