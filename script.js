/* floating hearts */
function spawnHeart() {
  const icons = ['❤️','💕','🍓','✨','🌸'];
  const el = document.createElement('div');
  el.textContent = icons[Math.floor(Math.random() * icons.length)];
  el.style.cssText = `
    position:fixed; pointer-events:none; z-index:9999;
    left:${Math.random()*100}vw; bottom:-40px;
    font-size:${14 + Math.random()*18}px;
    animation:floatUp ${5 + Math.random()*3}s linear forwards
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 8000);
}
setInterval(spawnHeart, 800);

const floatStyle = document.createElement('style');
floatStyle.textContent = `
  @keyframes floatUp {
    from { transform: translateY(0); opacity: 1; }
    to   { transform: translateY(-110vh); opacity: 0; }
  }
`;
document.head.appendChild(floatStyle);

/* envelope */
document.addEventListener('DOMContentLoaded', () => {
  const env    = document.getElementById('env');
  const letter = document.getElementById('letter');
  const hint   = document.getElementById('hint');
  if (!env) return;
  let stage = 0;

  env.addEventListener('click', () => {
    if (stage === 0) {
      stage = 1;
      env.classList.add('shaking');
      setTimeout(() => env.classList.remove('shaking'), 450);

    } else if (stage === 1) {
      stage = 2;
      env.classList.add('open');
      hint.style.opacity = '0';

      setTimeout(() => {
        env.style.overflow = 'visible';
        letter.classList.add('animating');
        letter.style.transform = 'translateY(-290px)';
      }, 550);
    }
  });
});