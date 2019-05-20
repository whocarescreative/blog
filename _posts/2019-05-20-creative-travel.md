---
layout: post
title:  Creative Travel
date: '2019-05-20'
subtitle: 'Lose the itinerary'
snaketitle: 'creative-travel'
---
<style>
  p {
    font-size: 30px;
    line-height: 40px;
    margin: 30px auto;
    font-weight: 100;
    max-width: 900px;
    box-sizing: border-box;
    font-family: 'Varela Round', Helvetica, sans-serif;
}

hr {
    max-width: 900px;
}
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
    margin-bottom: 5px;
    letter-spacing: 4px;
    text-transform: uppercase;
    line-height: 60px;
  }

  .title-date {
    font-size: 20px;
    margin-bottom: 10px;
    font-family: 'Varela Round', Helvetica, sans-serif;
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

  .eiffel {
    float: left; 
    shape-outside: url('assets/articles/creative-travel/img/eiffel_illustration.png');
  }

  @media (max-width: 1111px) {
    .eiffel {
      width: 270px;
      height: auto;
    }

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
    <h3 class="title-date">
    {% assign d = page.date | date: "%-d"  %}
  {{ page.date | date: "%B" }} 
  {% case d %}
    {% when '1' or '21' or '31' %}{{ d }}st
    {% when '2' or '22' %}{{ d }}nd
    {% when '3' or '23' %}{{ d }}rd
    {% else %}{{ d }}th
    {% endcase %}, 
  {{ page.date | date: "%Y" }}
    </h3>
    <h1 class="title-text">{{ page.title }}</h1>
    <h2 class="title-subtext">{{ page.subtitle }}</h2>
  </div>
</div>

I travel because it makes me feel like a kid. Looking at my surroundings for the first time. Running around aimlessly, placing full attention on the present.

Sure, I am capable of running around aimlessly when I am at home too. I probably do that more than I should.

But when I'm on the road, there is one crucial lesson that I try to follow from kids.

It's definitely not how to do basic arithmetic. That’s too advanced for me.

Instead, it’s the approach to their day:

**The ability to disregard plans.**

To me, exploring a new place is a great excuse to appreciate the novelty of the moment. And when I impose a detailed itinerary on myself when I arrive into a new city, I feel like I'm inviting stress. Not only that, I feel like I'm offending the my destination by distilling into a simple checklist.

I have to-do lists when I am at home. And to me, it doesn't make sense to do the same when I'm trying to remove  when traveling. I can lose the stiff shell of routine.

<img class="eiffel" src="assets/articles/creative-travel/img/eiffel_illustration.png">

I understand that research is necessary. Research allows you to understand what is available, and what to avoid. But there is a part of me that says: <strong>wouldn't it be great if I was surprised to see the Eiffel Tower in Paris?</strong>

In my opinion, travel should be instinctual, and spontaneous. Because being in a new city with no plan is the perfect opportunity to experience a unique kind of freedom.

With such an mix of environment, people and senses, cities welcome surprise on their own. Serendipity is bound to happen if you lose yourself in this boiling pot of stories, and chance encounters. 

You might share the same perspective on travel. But if you don't, I invite you to spend a day in a new place letting go of your plans, and letting your senses lead the way instead. Step outside, and walk with no destination.

Eat some fresh bread you smelled across the street. Your nose will not let you down.

Stop and listen to a free concert you heard a few blocks away. Linger for an hour.

Catch a glimpse of green, and go to the park. Daydream. Have a picnic, or a beer.

**Or just sit, pause, and listen to your new surroundings.**


<style>
#sounds {
  height: 480px;
  position: relative;
  width: 100%;
  max-width:990px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;

}

.sounds--img {
  cursor: pointer;
  opacity: 0.7;
  width: 30%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

#sounds--btn {
  cursor: pointer;
   font-family: 'Varela Round', Helvetica, sans-serif;
   font-size: 30px;
   text-align: center;
   position: absolute;
    top:10px;
    margin: 0 auto;
    left:0;right:0;
    font-weight:bold;
    border-bottom: 3px solid black;
    width: 90px;
}

.sounds--img.active {
    opacity: 1;
    transform: translateY(-10px);
}

.sounds--img:nth-child(2) {
  height: 350px;
  background-image: url('assets/articles/creative-travel/img/street.jpg');
  background-position: center 60%;
}

.sounds--img:nth-child(3) {
  height: 400px;
  margin-top: 80px;
  background-image: url('assets/articles/creative-travel/img/night.jpg');
}

.sounds--img:nth-child(4) {
  height: 350px;
  background-size: cover;
  right:0;
  background-position: right center;
  background-image: url('assets/articles/creative-travel/img/park.jpg')
}


#sounds--btn:after {
  content: ' ▶';
  font-size: 22px;
}

#sounds--btn.playing:after {
  content: ' '
}

.sounds--btn--span {
  text-decoration: underline;
  letter-spacing: -1px;
}



@media (max-width: 900px) {
  #sounds {
    height: 530px;
    display: block;
    flex-direction: column;
  }

  #sounds--btn {
    right: 20px;
    top: auto;
    bottom: 90px;
    margin: auto;
    left: auto;
  }
  
  .sounds--img {
    position: absolute;
    background-size: cover;
  }

  .sounds--img:nth-child(2) {
    width: calc(50% - 10px);
    height: 300px;
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
    height: 200px;
    background-position: 80% center;
    top: 320px;
  }
}

</style>

 <div id="sounds">
    <div data-playing="false" id="sounds--btn">Play</div>
    <div class="sounds--img"></div>
    <div class="sounds--img"></div>
    <div class="sounds--img"></div>
    <audio class="sounds--audio" src="assets/articles/creative-travel/mp3/street.mp3" type="audio/mpeg"></audio>
    <audio class="sounds--audio" src="assets/articles/creative-travel/mp3/cafe.mp3" type="audio/mpeg"></audio>
    <audio class="sounds--audio" src="assets/articles/creative-travel/mp3/park.mp3" type="audio/mpeg"></audio>
</div>


By following your instincts instead of a curated guide, you can start creating your own, unique relationship with a city. You can read all about your destination beforehand, but you won’t know how you feel until you get there. It’s like online dating.

And when there is such an abundance of possibilities, you can relax knowing you won’t get to see every place or landmark a destination has to offer. Finding your taste for travel is the same as discovering your own taste in art, music or film. Out of all the choices, you find what attracts you.

I also encourage you to ask a human, not Google. Avoiding a place because it has 3.9 stars and not four isn’t practical, and you might make a new friend while dining at a hole-in-the-wall restaurant. 

Besides, isn't discovering a spot without plans and in the internet just more fun?

Travel is an opportunity to play.

And if you too, want to feel like a kid again, you should play at any chance you get.

<div id="dice"></div>

Travel is creative.

Be creative.


---

   
<p style="padding-bottom:20px"></p>

<p style="text-align:center; font-size:15px;"> Whocares? </p>

















