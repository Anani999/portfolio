// Lightbox functionality
const mediaItems = document.querySelectorAll('.media-item img, .media-item video');

mediaItems.forEach(item => {
    item.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);
        
        const media = item.cloneNode(true);
        lightbox.appendChild(media);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
