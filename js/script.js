const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const gameOver = document.querySelector(".game-over");
const score = document.querySelector(".score");
var total_score = 0;

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    total_score = total_score + 0.25;
    console.log(total_score);
    if (total_score % 10 === 0) {
        score.textContent = `Score ${total_score}`;
    }

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = "./images/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";
        
        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;
         
        gameOver.style.visibility = "visible";

        clearInterval(loop);
    }

}, 10);

document.addEventListener("keydown", jump);