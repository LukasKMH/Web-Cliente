// validacao_formulario.js

function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var assunto = document.getElementById('assunto').value.trim();
    var message = document.getElementById('message').value.trim();

    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var assuntoError = document.getElementById('assunto-error');
    var messageError = document.getElementById('message-error');

    var isValid = true;

    // Validar nome
    if (name === "") {
        nameError.innerHTML = "Por favor, digite seu nome.";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    // Validar email
    if (email === "") {
        emailError.innerHTML = "Por favor, digite seu email.";
        isValid = false;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.innerHTML = "Por favor, digite um email válido.";
            isValid = false;
        } else {
            emailError.innerHTML = "";
        }
    }

    // Validar assunto
    if (assunto === "") {
        assuntoError.innerHTML = "Por favor, digite o assunto.";
        isValid = false;
    } else {
        assuntoError.innerHTML = "";
    }

    // Validar mensagem
    if (message === "") {
        messageError.innerHTML = "Por favor, digite a mensagem.";
        isValid = false;
    } else {
        messageError.innerHTML = "";
    }

    return isValid;
}
