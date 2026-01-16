const postForm = document.getElementById('postForm');
const messagesList = document.getElementById('messagesList');
const emptyMsg = document.getElementById('emptyMsg');

postForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('userName').value;
    const text = document.getElementById('userMessage').value;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    if (emptyMsg) {
        emptyMsg.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    messageDiv.innerHTML = `
        <div class="message-header">
            <span class="message-name">${name}</span>
            <span class="message-time">${timeString}</span>
        </div>
        <p class="message-text">${text}</p>
    `;

    messagesList.prepend(messageDiv);

    postForm.reset();
});