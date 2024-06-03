document.addEventListener('DOMContentLoaded', () => {
    // Comando 1: Limita o comprimento do texto nas descrições dos membros
    const memberDescriptions = document.querySelectorAll('.membro p:nth-child(3)');
    
    memberDescriptions.forEach(description => {
        const maxLength = 100;
        const text = description.textContent;
        
        if (text.length > maxLength) {
            description.textContent = text.slice(0, maxLength) + '...';
        }
    });

    // Comando 2: Adiciona efeitos de escala nas imagens dos membros ao passar o mouse sobre elas
    const memberImages = document.querySelectorAll('.membro img');
    
    memberImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // Comando 3: Altera a cor de fundo do cabeçalho ao passar o mouse sobre ele
    const header = document.querySelector('header');
    header.addEventListener('mouseover', () => {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    });

    header.addEventListener('mouseout', () => {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    });
});

