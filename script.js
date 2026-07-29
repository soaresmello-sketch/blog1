// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona todos os botões "Ler mais"
    const buttons = document.querySelectorAll('.btn-read-more');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.parentElement;
            const fullContent = card.querySelector('.full-content');
            const shortText = card.querySelector('.short-text');

            // Alterna a exibição do texto completo
            if (fullContent.classList.contains('hidden')) {
                fullContent.classList.remove('hidden');
                if (shortText) shortText.classList.add('hidden');
                this.innerHTML = "&larr; Ler menos";
            } else {
                fullContent.classList.add('hidden');
                if (shortText) shortText.classList.remove('hidden');
                this.innerHTML = "Ler mais &rarr;";
            }
        });
    });

});