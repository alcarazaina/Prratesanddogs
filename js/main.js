let actual = 0;
const items = document.querySelectorAll('.carrusel-item');
const track = document.getElementById('track');
const dotsEl = document.getElementById('dots');


items.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.onclick = () => irA(i);
  dotsEl.appendChild(d);
});

function actualizarDots() {
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === actual);
  });
}

function irA(idx) {
  actual = idx;
  track.style.transform = `translateX(-${actual * 100}%)`;
  actualizarDots();
}

function mover(dir) {
  actual = (actual + dir + items.length) % items.length;
  track.style.transform = `translateX(-${actual * 100}%)`;
  actualizarDots();
}

setInterval(() => mover(1), 5000);