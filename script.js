const button = document.getElementById('rabbit-hole-button');
const rabbit = document.getElementById('rabbit-hole');
const exit = document.getElementById('exit-rabbit');

button.addEventListener('click', () => {
  rabbit.style.display = 'block';
});

exit.addEventListener('click', () => {
  rabbit.style.display = 'none';
});
const rabbitHole = document.getElementById('rabbit-hole');
function resizeText() {
  const scale = window.innerHeight / rabbitHole.scrollHeight;
  if(scale < 1) {
    rabbitHole.style.transform = `translate(-50%, -50%) scale(${scale})`;
  } else {
    rabbitHole.style.transform = `translate(-50%, -50%) scale(1)`;
  }
}
window.addEventListener('resize', resizeText);
rabbitHole.addEventListener('display', resizeText);
