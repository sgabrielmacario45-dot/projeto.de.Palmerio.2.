const frases = [
  "Nunca desista dos seus objetivos!",
  "Cada dia é uma nova oportunidade.",
  "A prática leva à melhoria.",
  "Acredite no seu potencial!",
  "Pequenos passos também levam longe."
];

const botao = document.getElementById("sortear");
const elementoTexto = document.getElementById("frase");

botao.addEventListener("click", function () {
  const sorteio = Math.floor(Math.random() * frases.length);
  elementoTexto.innerText = frases[sorteio];
});
