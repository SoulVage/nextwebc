const packCards = document.querySelectorAll('.pack_card');

packCards.forEach(packCard => {
    packCard.addEventListener('mousemove', (event) => {
        const { offsetWidth, offsetHeight } = packCard;
        const { offsetX, offsetY } = event;

        const x = (offsetX / offsetWidth) * 2 - 1; // Normalized X (-1 to 1)
        const y = (offsetY / offsetHeight) * 2 - 1; // Normalized Y (-1 to 1)

        // Rotate the card based on mouse position
        packCard.style.transform = `rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`; // Adjusted rotation
    });

    packCard.addEventListener('mouseleave', () => {
        // Reset rotation on mouse leave
        packCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
