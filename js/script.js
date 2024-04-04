function validar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    console.log("Entrou validar");

    if (nome == "" || email == "" || assunto == "" || mensagem == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!email.match(emailRegex)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }
    return true;
}