---
layout: post
title:  City Serendipity
snaketitle: city-serendipity
subtitle: 'A different way to travel'
---
<style>
  .hero {
    margin: 30px auto;
    font-weight: 100;
    max-width: 900px;
    height: 700px;
  }

  .title {
    position: absolute;
    margin-left: 540px;
    margin-top: 250px;
    margin-right: 20px;
  }

  .title-subtext {
    font-size: 34px;
    font-family: 'Varela Round', Helvetica, sans-serif;
    margin: 0;
    color: #888;
  }

  .title-text {
    font-size: 60px;
    font-family: 'Varela Round', Helvetica, sans-serif;
    font-weight: bold;
    margin: 0;
    letter-spacing: 4px;
    line-height: 60px;
  }

  #canvas {
    position: absolute;
    margin-left: -230px;
  }

  .grab-cursor {
    cursor: grab;
  }

  .big {
    font-size: 40px;
  }

  @media (max-width: 1111px) {
    .title, #canvas {
      position: relative;
      margin-left: 0;
      margin-top: 0;
      max-width: 100%;
    }

    #canvas {
      margin-bottom: 20px;
    }

    .hero {
      height: auto;
    }
  }
</style>

<div class="hero">
  <canvas id='canvas' class="grab-cursor" height="568px" width="666px"></canvas>
  <div class="title">
    <h1 class="title-text">FREEDOM OF TRAVEL</h1>
    <h2 class="mb-5 title-subtext">Lose the itinerary.</h2>
  </div>
</div>

Going to a new city is like going on a first date.

You know very little about the person you are seeing. That's the reason for your excitement. You are showing up at a specified time with no expectations. You can look at your date's online profile for as long as you want, but you will never know how you will feel until you start speaking face-to-face. 

You know very little about the person you are seeing. That's the reason for your excitement. You are showing up at a specified time with no expectations. You can look at your date's online profile for as long as you want, but you will never know how you will feel until you start speaking face-to-face. 


You can’t plan how you feel when meeting a person for the first time, and it’s the same when you arrive to a new city.


**So, why make plans in the first place?**


Condensing a city into a checklist is offensive, and a detailed itinerary is a prelude to stress. 


Cities welcome serendipity. Travel, in my opinion, should be improvised, spontaneous, and instinctual.  When you’re exploring a city, let your senses lead the way.

Eat where you. Your nose will not let you down.
Catch a glimpse of green, and walk to the park. Have a picnic.

Stay for a few hours at free concert you heard a few blocks away. 

<p class="big"><strong>Or just sit down, look around your new surroundings, and listen.</strong></p>


<style>
#sounds {
  height: 350px;
  position: relative;
  width: 100%;
  max-width:990px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}

.sounds--img {
  opacity: 0.3;
  width: 30%;
  background-size: contain;
  background-repeat: no-repeat;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.sounds--img.active {
    opacity: 1;
    transform: translateY(-10px);
}

.sounds--img:nth-child(2) {
  height: 250px;
  background-image: url('assets/articles/city-serendipity/img/street.jpg');

}

.sounds--img:nth-child(3) {
  height: 350px;
  margin-top: 80px;
  background-image: url('assets/articles/city-serendipity/img/night.jpg');
}

.sounds--img:nth-child(4) {
  height: 250px;
  right:0;
  background-image: url('assets/articles/city-serendipity/img/park.jpg')

}


.sounds--img.active:nth-child(4) {
  /* transform: translate(560px, -150px); */
}



@keyframes move {
  from { opacity: 0.2 }
  to   { opacity: 1; }
}

#sounds--btn {
    position: absolute;
    width:100px;
    top:10px;
    margin: 0 auto;
    left:0;right:0;
    font-weight:bold;
    /* transform: translateX(-50px) */
}

@media (max-width: 900px) {
  #sounds {
    height: 630px;
    display: block;
    flex-direction: column;
  }

  #sounds--btn {
    right: 10px;
    top: auto;
    bottom: 200px;
    margin: auto;
    left: auto;
  }
  
  .sounds--img {
    position: absolute;
  }

  .sounds--img:nth-child(2) {
    width: calc(50% - 10px);
    /* height: 300px; */
  }

  .sounds--img:nth-child(3) {
    width: calc(50% - 10px);
    right:0;
    height: 350px;
    top: 30px;
    margin: 0;
  }

  .sounds--img:nth-child(4) {
    width: calc(50% - 10px);
    left:0;
    /* height: 300px; */
    background-position: 80% center;
    top: 270px;
  }
}

</style>

 <div id="sounds">
    <div data-playing="false" id="sounds--btn">Play</div>
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














