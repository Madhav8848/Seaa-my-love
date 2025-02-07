document.getElementById("yesButton").addEventListener("click", function() {
    document.body.style.background = "linear-gradient(135deg, #ff0080, #ff66b2)";
    document.querySelector(".container").innerHTML = `
        <h1 class="fade-in">💖 Yay! Siaa, You Said Yes! 💖</h1>
        <p class="question fade-in">I'm the happiest person in the world! You are my forever rose! 🌹</p>
        <img src="https://png.pngtree.com/back_origin_pic/03/94/57/d700901ec8d8b53ea0a9f8c499bb86ae.jpg" alt="Love" class="rose-img">
        <p class="fade-in">I love you forever! 💞</p>
        <div class="fireworks"></div>
    `;
    startConfetti();
    startFireworks();
});

document.getElementById("noButton").addEventListener("click", function() {
    let noButton = document.getElementById("noButton");
    noButton.classList.add("shake");
    setTimeout(() => {
        noButton.classList.remove("shake");
    }, 500);
    alert("Nooo! But I know you love me! 💕");
});

/* Confetti Effect */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let particles = [];

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 2,
        speed: Math.random() * 5 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`
    };
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speed;
        if (p.y > canvas.height) {
            particles[i] = createParticle();
        }
    });
    requestAnimationFrame(drawParticles);
}

function startConfetti() {
    particles = Array.from({ length: 100 }, createParticle);
    drawParticles();
}

/* Fireworks Effect */
function startFireworks() {
    let fireworkContainer = document.createElement("div");
    fireworkContainer.innerHTML = "🎆🎇✨🎆🎇✨🎆🎇";
    fireworkContainer.className = "fireworks";
    document.body.appendChild(fireworkContainer);
}

/* Initialize */
setupCanvas();
window.addEventListener("resize", setupCanvas);
