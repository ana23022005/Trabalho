document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Comando 1: Verificar se os campos estão preenchidos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const opniao = document.getElementById('opniao').value;

        if (nome.trim() === '' || email.trim() === '' || opniao.trim() === '') {
            formMessage.textContent = 'Por favor, preencha todos os campos.';
            formMessage.style.color = 'red';
        } else {
            // Comando 2: Manipulação de DOM para mostrar mensagem de sucesso
            formMessage.textContent = 'Formulário enviado com sucesso!';
            formMessage.style.color = 'lightgreen';

            // Comando 3: Limpar campos do formulário
            form.reset();
        }
    });
});
