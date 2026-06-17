function createHeart() {
    const heart = document.createElement("div");

    const icons = ["❤️", "💕", "💖", "✨"];

    heart.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-50px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.pointerEvents = "none";

    /* keep hearts behind envelope */
    heart.style.zIndex = "1";

    heart.style.animation = "float 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

/* slower spawn = less visual clutter */
setInterval(createHeart, 700);

/* animation injected once */
const style = document.createElement("style");

style.innerHTML = `
@keyframes float{
    from{
        transform:translateY(0);
        opacity:1;
    }
    to{
        transform:translateY(-110vh);
        opacity:0;
    }
}
`;

document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector(".envelope-box");

    if(envelope){
        envelope.addEventListener("click", () => {
            envelope.classList.toggle("open");
        });
    }
});
