const mensagem = "Bem-vindo à RedR Tech — Soluções inteligentes para um mundo conectado.";
let i = 0;
const velocidade = 50;

function escreverMensagem() {
  if (i < mensagem.length) {
    document.getElementById("mensagem").innerHTML += mensagem.charAt(i);
    i++;
    setTimeout(escreverMensagem, velocidade);
  } else {
    document.getElementById("btnServicos").style.display = "block";
  }
}

function irParaServicos() {
  window.location.href = "servicos.html";
}

window.onload = escreverMensagem;
