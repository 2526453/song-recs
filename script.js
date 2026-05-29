const textElement = document.querySelector('.grow-text');

textElement.addEventListener('mouseenter', () => {
    // Increase size to 1.2x original
    textElement.style.transform = 'scale(1.2)';
    textElement.style.transition = 'transform 0.3s ease'; // Smooth animation
});

textElement.addEventListener('mouseleave', () => {
    // Revert to original size
    textElement.style.transform = 'scale(1)';
});
