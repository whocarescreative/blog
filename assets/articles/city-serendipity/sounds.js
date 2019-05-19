const btn = document.getElementById('sounds--btn');
const soundImgs = document.getElementsByClassName('sounds--img');
const audioElements = sounds.getElementsByClassName('sounds--audio');

// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioContext = new AudioContext();

let playIndex = 0;

let audioElement = audioElements[playIndex];

Array.from(audioElements).forEach(ae => {
    ae.addEventListener('ended', () => next())
})

// let track = audioContext.createMediaElementSource(audioElement);

function next() {
    pause();
    if (playIndex == 3) {
        playIndex = 0;
        audioElement = audioElements[playIndex];
        return;
    }

    playIndex++;
    audioElement = audioElements[playIndex];
    play();
}

btn.addEventListener('click',  () => {
//     if (audioContext.state === 'suspended') {
//        audioContext.resume();
//    }
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