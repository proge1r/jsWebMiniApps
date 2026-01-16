const stylizerForm = document.getElementById('stylizerForm');
const displayText = document.getElementById('displayText');

stylizerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const textValue = document.getElementById('sourceText').value;
    const isBold = document.getElementById('bold').checked;
    const isUnderline = document.getElementById('underline').checked;
    const isItalic = document.getElementById('italic').checked;
    const alignment = document.querySelector('input[name="align"]:checked').value;

    displayText.innerText = textValue;

    displayText.style.fontWeight = isBold ? 'bold' : 'normal';
    displayText.style.textDecoration = isUnderline ? 'underline' : 'none';
    displayText.style.fontStyle = isItalic ? 'italic' : 'normal';
    displayText.style.textAlign = alignment;
});