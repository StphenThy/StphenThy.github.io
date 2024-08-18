document.addEventListener('DOMContentLoaded', () => {
    const showImageButton = document.getElementById('showImageButton');
    const imageContainer = document.getElementById('imageContainer');

    showImageButton.addEventListener('click', () => {
        console.log('Button clicked'); // Debugging message
        imageContainer.style.display = 'block'; // Show the image
        showImageButton.style.display = 'none'; // Option to hide the button after clicking
    });
});
