function redirecionar() {
  const codigo = document.getElementById("codigo").value.trim().toUpperCase(); // Captura o valor digitado e converte para maiúsculas
  const links = {
    ADMIN: "https://web.whatsapp.com/", // Link para o código ADMIN
    USER: "https://link-para-usuario.com", // Link para o código USER
    GUEST: "https://link-para-visitante.com", // Link para o código GUEST
    "77A": "https://www.instagram.com/wilgner_2003/", // Link para o código 77A
    "MZX9059": "https://mail.google.com/mail/u/0/#inbox",
  };

  if (links[codigo]) {
    window.location.href = links[codigo]; // Redireciona para o link correspondente
  } else {
    alert("Código inválido!"); // Exibe uma mensagem de erro se o código não for encontrado
  }
}
