const btn = document.getElementById('sounds--btn');
const soundImgs = document.getElementsByClassName('sounds--img');
const audioElements = sounds.getElementsByClassName('sounds--audio');

let playIndex = 0;
let audioElement = audioElements[playIndex];

Array.from(audioElements).forEach(ae => {
    ae.addEventListener('ended', () => next())
})

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
    audioElement.play();
    soundImgs[playIndex].classList.toggle('active');
}

function pause() {
    audioElement.pause();
    soundImgs[playIndex].classList.toggle('active');
    btn.dataset.playing = 'false';
}