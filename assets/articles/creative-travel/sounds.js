const btn = document.getElementById('sounds--btn');
const btnSpan = btn.firstChild;

const soundImgs = document.getElementsByClassName('sounds--img');
const audioElements = sounds.getElementsByClassName('sounds--audio');

let playIndex = 0;
let audioElement = audioElements[playIndex];

Array.from(audioElements).forEach(ae => {
    ae.addEventListener('ended', () => next())
})

Array.from(soundImgs).forEach((si, i) => {
    si.addEventListener('click', () => onImageClick(i))
})

function onImageClick(i) {
    if (btn.dataset.playing == 'true' && playIndex == i) {
        pause();
    } 
    else { 
        if (btn.dataset.playing == 'true') {
            pause();
        }
        playIndex = i;
        audioElement = audioElements[playIndex];
        play();
    }
}


function next() {
    pause();
    if (playIndex == 2) {
        playIndex = 0;
        audioElement = audioElements[playIndex];
        return;
    }

    playIndex++;
    audioElement = audioElements[playIndex];
    play();
}

btn.addEventListener('click',  () => {
   if (btn.dataset.playing === 'false') {
      play();
   } else if (btn.dataset.playing === 'true') {
        pause();
   }
});


function play() {
    btn.dataset.playing = 'true';
    btn.innerText = 'Pause';
    audioElement.play();
    btn.classList.toggle('playing');
    soundImgs[playIndex].classList.toggle('active');
}

function pause() {
    btn.dataset.playing = 'false';
    btn.innerText = 'Play';
    audioElement.pause();
    btn.classList.toggle('playing');
    soundImgs[playIndex].classList.toggle('active');
}