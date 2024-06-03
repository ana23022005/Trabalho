document.addEventListener('DOMContentLoaded', () => {
    // Comando 1: Adiciona um evento de clique para exibir uma mensagem ao passar o mouse sobre as imagens da galeria
    const galleryImages = document.querySelectorAll('.card img');
    
    galleryImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            alert('Clique na imagem para ampliar.');
        });
    });

    // Comando 2: Altera o estilo da galeria ao passar o mouse sobre ela
    const gallerySection = document.querySelector('.gallery');

    gallerySection.addEventListener('mouseover', () => {
        gallerySection.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    });

    gallerySection.addEventListener('mouseout', () => {
        gallerySection.style.backgroundColor = 'transparent';
    });

    // Comando 3: Adiciona uma classe de estilo ao clicar nas imagens da galeria para ampliá-las
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('expanded');
        });
    });
});

