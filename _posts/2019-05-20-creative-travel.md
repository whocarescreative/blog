---
layout: post
title:  Creative Travel
date: '2019-05-20'
subtitle: 'Lose the itinerary'
snaketitle: 'creative-travel'
---

<div>
  <a href="/">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="155" height="55" viewBox="0 0 375.83 215" style="margin: 0 auto; margin-top: 15px; display: block;">
      <defs>
        <clipPath id="clip-path">
          <rect width="375.83" height="215" fill="none"/>
        </clipPath>
      </defs>
      <g id="Component_1_5" data-name="Component 1 – 5" clip-path="url(#clip-path)">
        <text id="Who_Cares" data-name="Who 
    Cares" transform="translate(0 107.339)" fill="black" font-size="89" font-family="Muli" font-weight="900" letter-spacing="-0.058em"><tspan x="0" y="0">Who </tspan><tspan x="0" y="82">Cares</tspan></text>
        <path id="Path_8" data-name="Path 8" d="M39.924,122.59v-45.8q2.818.47,5.167.822a30.124,30.124,0,0,0,4.462.352A39.932,39.932,0,0,0,61.53,76.208a32.4,32.4,0,0,0,9.746-4.814A22.426,22.426,0,0,0,77.734,64a19.681,19.681,0,0,0,2.348-9.511,17.554,17.554,0,0,0-4.7-12.212q-4.7-5.167-12.682-5.167a14.72,14.72,0,0,0-11.625,4.932q-4.345,4.932-4.345,12.917H0A49.873,49.873,0,0,1,4.814,33,53.41,53.41,0,0,1,18.2,15.617,62.366,62.366,0,0,1,38.4,4.11,75.233,75.233,0,0,1,63.643,0,67.1,67.1,0,0,1,88.89,4.58,61.888,61.888,0,0,1,108.5,16.909a54.74,54.74,0,0,1,12.682,17.848,51.193,51.193,0,0,1,4.462,20.9q0,35.227-42.507,50.022V122.59Zm-4.7,36.871a27.52,27.52,0,1,1,2.114,10.686A27.393,27.393,0,0,1,35.227,159.461Z" transform="translate(243.408 34) rotate(13) scale(0.8, 0.8)" fill="black"/>
      </g>
    </svg>
  </a>
</div>

<div class="hero">
  <img id="globe-helper" src="/assets/articles/creative-travel/img/hand.png"/>
  <canvas id='canvas' class="grab-cursor" height="568px" width="666px"></canvas>
  <div class="title">
    <h3 class="title-date">
    {% assign d = page.date | date: "%-d"  %}

    {{ page.date | date: "%B" }} {% case d %}
      {% when '1' or '21' or '31' %}{{ d }}st
      {% when '2' or '22' %}{{ d }}nd
      {% when '3' or '23' %}{{ d }}rd
      {% else %}{{ d }}th{% endcase %}, {{ page.date | date: "%Y" }}
    </h3>
    <h1 class="title-text">{{ page.title }}</h1>
    <h2 class="title-subtext">{{ page.subtitle }}</h2>
  </div>
</div>

Travelling makes me feel like a kid. Looking at my surroundings for the first time. Running around aimlessly, placing full attention on the present.

I mean, I am capable of running around aimlessly when I am in my home city too. I probably do that more than I should.

But when I’m on the road, there’s one particular part of childhood I try to practice.
 
It’s not basic arithmetic. That’s too advanced for me.

Instead, it’s an approach to the day:

**The practice of disregarding plans.**

To me, exploring a new place is a great excuse to appreciate the novelty of the moment. And when I impose a detailed itinerary on myself upon arriving into a new city, I feel like I’m inviting stress. Not only that, I feel like I’m offending my destination by distilling it into a simple checklist.

I have to-do lists when I am at home. And to me, it doesn’t make sense to do the same when I’m traveling. I can lose the stiff shell of routine.

I understand that researching your destination is necessary. Research allows you to understand what is available, and what to avoid. But there is a part of me that says:  <strong>wouldn’t it be great if I was surprised to see the Eiffel Tower in Paris? </strong>


<img class="eiffel" src="assets/articles/creative-travel/img/eiffel_illustration.png">


Travel can be instinctive and spontaneous. Because being in a new city with no plan is the perfect opportunity to experience a unique kind of freedom.

With a mix of environment, people and senses, a new place welcomes surprise on its own. Serendipity is bound to happen if you lose yourself in this boiling pot of stories, and chance encounters.

You might share the same perspective on travel. But if you don’t, I invite you to spend a day in a new place letting go of your plans, and letting your senses lead the way instead. Step outside, and start walking without a destination. 

Smell the fresh bread across the street, and eat at the bakery. Your nose will not let you down.


Stop and listen to a free concert you heard a few blocks away. Linger for an hour.


Catch a glimpse of green, and go to the park. Have a picnic.


**Or just sit, pause, and listen to your new surroundings.**


 <div id="sounds">
    <div data-playing="false" id="sounds--btn">
      <div id="sounds--btn--play">
        <svg width="22" height="22" viewBox="0 0 103 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 60V38V33.5H21L48.5 6C66.3824 39.2583 64.2255 56.9303 48.5 87.5L21 60H4Z" fill="black"/>
          <path d="M86 87.5C101.726 56.9303 103.882 39.2583 86 6M67 87.5C82.7255 56.9303 84.8824 39.2583 67 6M4 38V60H21L48.5 87.5C64.2255 56.9303 66.3824 39.2583 48.5 6L21 33.5H4V38Z" stroke="black" stroke-width="7"/>
        </svg>
        Play 
      </div>
      <div id="sounds--btn--pause">
        <svg width="22" height="22" viewBox="0 0 103 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 60V38V33.5H21L48.5 6C66.3824 39.2583 64.2255 56.9303 48.5 87.5L21 60H4Z" fill="black"/>
        </svg>
        Pause 
      </div>
    </div>
    
    <div class="sounds--img"></div>
    <div class="sounds--img"></div>
    <div class="sounds--img"></div>
    <audio class="sounds--audio" preload="auto" src="/assets/articles/creative-travel/mp3/street.mp3" type="audio/mpeg"></audio>
    <audio class="sounds--audio" preload="auto" src="/assets/articles/creative-travel/mp3/night.mp3" type="audio/mpeg"></audio>
    <audio class="sounds--audio" preload="auto" src="/assets/articles/creative-travel/mp3/park.mp3" type="audio/mpeg"></audio>
</div>


By following your instincts instead of a curated guide, you can start creating your own, unique relationship with a city. You can read all about your destination beforehand, but you won’t know how you feel until you get there. It’s like online dating.

And when there is such an abundance of places to see in a city: parks, restaurantes, museums, you can relax knowing you won’t get to see every landmark a destination has to offer. Finding your taste for travel is the same as discovering your own taste in art, music or film. Out of all the choices, you find what attracts you.

I also encourage you to ask a human, not Google. Avoiding a place because it doesn’t have five stars is limiting, and you might make a new friend while taking risks eating food you’ve never heard of before. 

Travel is a opportunity to get familiar with uncertainty, and find your own way to play in a new city. 

And if I really want to feel like a kid again, I take any chance I can get to play. 

<div style="position: relative;">
  <div style="background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%); position: absolute; height: 60px; width: 100%;"></div>
  <img id="dice-helper" src="/assets/articles/creative-travel/img/hand.png"/>
  <div id="dice"></div>
</div>

Travel is creative.

Be creative.

<div style="max-width:900px; margin: 100px auto 30px;">
{% capture footer %}{% include article-footer.html %}{% endcapture %}
{{ footer | markdownify }}
</div>