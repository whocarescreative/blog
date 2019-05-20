
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const image = new Image();
image.addEventListener('load', () => {
  draw();
});
image.src = 'assets/articles/creative-travel/img/globe.png';
const FRAME_COUNT = 8;
const FRAME_HEIGHT = 568;
const FRAME_WIDTH = 666;

canvas.height = FRAME_HEIGHT;
canvas.width = FRAME_WIDTH;

const FRAME_Y_OFFSET = 0;

let speed = 2;
let step = 0;
let pos = 0;
function draw() {
  requestAnimationFrame(draw);
  
  const destinationX = 0;
  const destinationY = 0;
  //ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(
    image, 
    FRAME_WIDTH * pos, FRAME_Y_OFFSET, 
    FRAME_WIDTH, FRAME_HEIGHT, 
    destinationX, destinationY, 
    FRAME_WIDTH, FRAME_HEIGHT
  );
  
  if (inputDown) speed = (mousePrev.x - mouse.x) / 10;
  speed = speed * 0.98;
  step += speed;
  pos = Math.round(mod(step/8, 7));
}

function mod(a, b) {
    return ((a%b)+b)%b;
};

let inputDown = false;
const mouse = {
  x: -1, y: -1
};
const mousePrev = {
  x: -1, y: -1
};
const el = canvas;
el.addEventListener('mousedown', e=>{
  e.preventDefault();
  inputDown = true;
});
el.addEventListener('mouseup', e=>{
  e.preventDefault();
  inputDown = false;
});
el.addEventListener('mouseleave', e=>{
  inputDown = false;
});
el.addEventListener('mousemove', e=>{
  mousePrev.x = mouse.x;
  mousePrev.y = mouse.y;
  const {left, top} = el.getBoundingClientRect();
  mouse.x = e.clientX - left;
  mouse.y = e.clientY - top;
});

el.addEventListener('touchstart', e=>{
  const { x, y } = processTouch(e.touches);
  inputDown = true;
});
el.addEventListener('touchmove', e=>{
  mousePrev.x = mouse.x;
  mousePrev.y = mouse.y;
  const { x, y } = processTouch(e.touches);
  mouse.x = x;
  mouse.y = y;
});
el.addEventListener('touchcancel', e=>{
  inputDown = false;
});
el.addEventListener('touchend', e=>{
  inputDown = false;
});


function processTouch(touches) {
  for (const touch of touches) {
      const {left, top} = el.getBoundingClientRect()

      return { 
          x: touch.clientX - left |0,
          y: touch.clientY - top |0
      };
  }
}