---
layout: post
title:  City Serendipity
snaketitle: city-serendipity
subtitle: 'A different way to travel'
---
<canvas id='canvas' height='400' width='400'></canvas>
<h1>City Playground</h1>
<h2 class="mb-5">Have fun with it</h2>

Going to a new city is like going on a first date.

You know very little about the person you are seeing. That's the reason for your excitement. You are showing up at a specified time with no expectations. You can look at your date's online profile for as long as you want, but you will never know how you will feel until you start speaking face-to-face. 

<style>
#cards {
    margin: 0 auto;
    width:100%;
    height:500px;
    position: relative;
    overflow-y: hidden;
    overflow-x: hidden;
}
.card {
    height: 400px;
    width:300px;
    top:50px;
    right:0;left:0;
    margin:0 auto;
    background: blue;
    position: absolute;
    transition: transform 0.1s;
    z-index:99;
    opacity:0.3;
}

.card.active {
    z-index: 100;
    opacity:1;
}
.card.gone {
    transition: transform 1s;
}

.card.gone--right {
    transform: translate(150vh) rotate(70deg) !important;
}

.card.gone--left {
    transform: translate(-150vh) rotate(-70deg) !important;
}
</style>
<div id="cards">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
</div>


Of course, you might have a few questions prepared, but I don’t think your date would appreciate an interrogation.

You can’t plan how you feel when meeting a person for the first time, and it’s the same when you arrive to a new city.


**So, why make plans in the first place?**


Condensing a city into a checklist is offensive, and a detailed itinerary is a prelude to stress. 


Cities welcome serendipity. Travel, in my opinion, should be improvised, spontaneous, and instinctual.  When you’re exploring a city, let your senses lead the way.

Eat where you. Your nose will not let you down.
Catch a glimpse of green, and walk to the park. Have a picnic.

Stay for a few hours at free concert you heard a few blocks away. 

## **Or just sit down, look around your new surroundings, and listen.**


<style>
#sounds {
  /* float: right; */
  height: 250px;
  position: relative;
  width: 250px;
  margin-left: 100px;
  clear: both;
  border: 30px solid white;
}

.sounds--img {
    opacity: 0.2;
    transition: all 0.5s ease-in-out;
}
.sounds--img.active {
    opacity: 1;
}

.sounds--img:nth-child(2) {
  position: absolute;
  height: 250px;
  width: 250px;
  background: linear-gradient(to right, #ec6f66, #f3a183);
  animation-delay: 0s;
}

.sounds--img.active:nth-child(2) {
    transform: translate(0, -20px);
}
.sounds--img:nth-child(3) {
  position: absolute;
  height: 350px;
  width: 270px;
  background: linear-gradient(to right, #7474bf, #348ac7);
  transform: translate(270px, 90px);
}

.sounds--img.active:nth-child(3) {
   transform: translate(270px, 45px);
}

.sounds--img:nth-child(4) {
  position: absolute;
  height: 400px;
  width: 300px;
  background: linear-gradient(to right, #283048, #4CAF50);
  transform: translate(560px, -180px);
}


.sounds--img.active:nth-child(4) {
  transform: translate(560px, -150px);
}



@keyframes move {
  from { opacity: 0.2 }
  to   { opacity: 1; }
}

#sounds--btn {
    position: absolute;
    top:100px;
    left:-50px;
}

</style>

 <div id="sounds">
    <button data-playing="false" id="sounds--btn">Play</button>
    <div class="sounds--img"></div>
    <div class="sounds--img"></div>
    <div class="sounds--img"></div>
    <audio class="sounds--audio" src="assets/articles/city-serendipity/mp3/street.mp3" type="audio/mpeg"></audio>
    <audio class="sounds--audio" src="assets/articles/city-serendipity/mp3/cafe.mp3" type="audio/mpeg"></audio>
    <audio class="sounds--audio" src="assets/articles/city-serendipity/mp3/park.mp3" type="audio/mpeg"></audio>
</div>


By avoiding someone else’s curated guide, you start to create your own relationship with the city. Discovering your own taste, as you would with music, movies, or art. 

You don’t have to avoid all the tourist areas. If you are visiting the place because its past is important to you, and you’ve done the research, do it. If it's been your life long dream to see the Eiffel Tower, do it. This is your trip. 

But I also invite you to ask a human, not Google. Don’t avoid a place because it has 3.9 stars instead of four.

Find a hole-in-the-wall restaurant. Get food poisoning, or have a delicious, unusual meal that you wouldn't find back home.
Drink some shitty coffee, or have an incredible espresso.

Fill up your memory card, or don't take any photos.
This is your trip.

Have fun with it, and relax with the thought you will never end up seeing everything, because chances are, you haven’t even seen half of what your *own* city has to offer.

I travel to feel like a kid again. And I know kids don’t have itineraries. 
Kids don’t predict how they will feel like four months in advance, which is exactly what happens when creating a hour-by-hour schedule for your travels.

Kids play, instead.

<div id="dice"></div>

Travel is creative.

Be creative.














