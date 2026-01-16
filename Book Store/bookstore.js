const orderForm = document.getElementById('orderForm');
const bookInput = document.getElementById('bookSelect');
const orderSummary = document.getElementById('orderSummary');

function selectBook(title) {
    bookInput.value = title;
    bookInput.style.backgroundColor = "#e8f4fd";
}

orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!bookInput.value) {
        alert("Please select a book first!");
        return;
    }

    const name = document.getElementById('customerName').value;
    const date = document.getElementById('deliveryDate').value;
    const address = document.getElementById('address').value;

    orderSummary.innerHTML = `
        <div style="color: #27ae60; font-weight: bold;">
            ${name}, thank you!
        </div>
        Your order for "${bookInput.value}" is confirmed. 
        It will be sent to ${address} on ${date}.
    `;
    orderSummary.style.display = 'block';
    
    orderForm.reset();
    bookInput.style.backgroundColor = "";
});