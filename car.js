// Rola para uma seção específica
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Formulário de contato funcional
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Obrigado, ${name}! Sua mensagem foi enviada.\n\nE-mail: ${email}\nMensagem: ${message}`);
    document.getElementById('contactForm').reset();
});
