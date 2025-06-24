
const canvas = document.getElementById("assinatura");
const ctx = canvas.getContext("2d");
let desenhando = false;

function iniciarDesenho(e) {
  desenhando = true;
  const pos = getPos(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

function desenhar(e) {
  if (!desenhando) return;
  e.preventDefault();
  const pos = getPos(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function pararDesenho() {
  desenhando = false;
}

function limparAssinatura() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
  const y = e.clientY ? e.clientY - rect.top : e.touches[0].clientY - rect.top;
  return { x, y };
}

canvas.addEventListener("mousedown", iniciarDesenho);
canvas.addEventListener("mousemove", desenhar);
canvas.addEventListener("mouseup", pararDesenho);
canvas.addEventListener("touchstart", iniciarDesenho);
canvas.addEventListener("touchmove", desenhar);
canvas.addEventListener("touchend", pararDesenho);
