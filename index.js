const submitBtn = document.querySelector('.submit');
const joinLink = document.querySelectorAll('.join');
const toggleBtn = document.querySelector('#toggleMode');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
});

joinLink.forEach(e => {
    e.addEventListener('click', () => {
        alert('You have joined the tournament!')
    })
})

toggleBtn.addEventListener('click', () => {
    toggleBtn.style.src = '';
})