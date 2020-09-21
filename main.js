const toggleButton = document.getElementById('dark-mode');
const body = document.body;

toggleButton.addEventListener('click', () => body.classList.toggle('light'));
