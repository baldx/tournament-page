const submitBtn = document.querySelector('.submit');
const joinLink = document.querySelectorAll('.join');
const toggleBtn = document.querySelector('#toggleMode');
const input = document.querySelectorAll('.input');

submitBtn.addEventListener('click', (e) => {
    sendEmail()
    e.preventDefault();
});

joinLink.forEach(e => {
    e.addEventListener('click', () => {
        alert('You have joined the tournament!')
    })
})

function sendEmail() {
    input.forEach(e => {
        e.value = '';
    })

    alert('Your message has been sent!')
}