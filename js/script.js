const game = document.querySelector('.game-board');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloudsLonge = document.querySelector('.cloudsLonge');
const cloudsMeio = document.querySelector('.cloudsMeio');
const cloudsPerto = document.querySelector('.cloudsPerto');
const pontos = document.querySelector('.pontos');
const gameover = document.querySelector('.game-over');

var passou = false;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

        if (passou) {
            passou = false;
            pontos.innerHTML = ("0000000000" + (parseInt(pontos.innerHTML) + 1)).slice(-10);
        }
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsLongePosition = +window.getComputedStyle(cloudsLonge).left.replace('px', '');
    const cloudsMeioPosition = +window.getComputedStyle(cloudsMeio).left.replace('px', '');
    const cloudsPertoPosition = +window.getComputedStyle(cloudsPerto).left.replace('px', '');

    if (pipePosition <= 130 && marioPosition <= 80 && pipePosition > 0) {
                cloudsLonge.style.animation = 'none';
        cloudsLonge.style.left = `${cloudsLongePosition}px`;

        cloudsMeio.style.animation = 'none';
        cloudsMeio.style.left = `${cloudsMeioPosition}px`;

        cloudsPerto.style.animation = 'none';
        cloudsPerto.style.left = `${cloudsPertoPosition}px`;

        
    }

    if (pipePosition < 0) {
        passou = true;
    }
}, 10);
