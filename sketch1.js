/***********************************************************************************
  Playlist Generator
  by An Duong

  This is a Buzzfeed-esque series of questions that will ask the user a series of questions. At the end, a playlist will be generated based on the response.

  cite:
  https://editor.p5js.org/Noshin/sketches/r4LqGxJe7
  https://editor.p5js.org/aatish/sketches/kwq05rOSP
  https://editor.p5js.org/bengrosser/sketches/rycQ1D9zN
  https://github.com/sngrasso/RoomsOfMyDreamHouse/blob/main/sketch.js


***********************************************************************************/

var images = [];

// array of assets
var assets = ['applePie.png', 'andrewGarfield.png', 'avocadoToast.png', 'baguette.png', 'brioche.png', 'bucky.png', 'bulbasaur.png', 'cereal.png', 'charmander.png', 'cinnamonToast.png', 'community.png', 'creedBratton.png', 'doloresUmbridge.png', 'elbows.png', 'fairyGodMother.png', 'falcon.png', 'farfalle.png', 'findingNemo.png', 'frootLoops.png', 'frostedFlakes.png', 'gameofThrones.png','gingerbreadMan.png',  'himym.png', 'indesign.png', 'innoutBurger.png', 'jupiter.png', 'kellyKapoor.png', 'krisJenner.png', 'lordFarquaad.png', 'madEyeMoody.png', 'mcdFries.png', 'meanGirls.png', 'meredithPalmer.png','neptune.png', 'pancakes.png', 'parksAndRec.png', 'pecanPie.png', 'penne.png', 'photoshop.png', 'pumpkinPie.png','remusLupin.png', 'pluto.png', 'shaq.png', 'shawshank.png', 'shuri.png', 'sourdough.png', 'squirtle.png', 'stepUp2.png', 'tbCrunchWrap.png', 'theIncredibles.png','theOffice.png', 'timotheeChalamet.png', 'tobyMaguire.png','tomHolland.png', 'toyStory.png', 'xd.png', 'danceWithSomebody.png', 'dontStopBelieving.png', 'totalEclipse.png', 'jonSnow.png', 'hurley.png','tedMosby.png'];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 40;

// create hover
var gHover = 0;

var hoverSpeed = 2;


// Array for title 
var title = ['Random', 'Playlist', 'Generator', 'Click', 'Anywhere', 'To','Begin', ':D'];
var i = 0;

// global variables for instruction text
var intro = ['Hi!', 'Are you ready to get a random playlist?', 'All you need to do is answer a few questions :-)', 'Press key #1-3 to choose an answer from left to right', 'Press key " S " to start', 'Press key " I " to go back to this page', 'Press key " T " to go back to the title page'];


var songs = ['What Makes You Beautiful by One Direction', 'Take On Me by a-ha', 'Beat It by Michael Jackson', 'No More Parties In LA by Kanye West', 'The Scientist by Coldplay', 'Circles by Mac Miller', 'Ex-Factor by Ms. Laurym Hill', 'Hypnotize by Biggie Smalls', 'Blame It on the Boogie by The Jacksons', 'Night Fever by Bee Gees', 'Dancing Queen by ABBA', 'Drew Barrymore by SZA', 'Lost by Frank Ocean', 'Put Your Head On My Shoulders by Paul Anka', 'Put You Records On by Corinne Bailey Rae', 'Pluto Projector by Rex Orange County', 'Stuck On You by Giveon', 'Eternal Sunshine by Jhene Aiko', 'Written by Natasha Beddingfield', 'No Air by Jordan Sparks', 'Your Love Is My Drug by Kesha', "Hey There Delilah by Plain White T's", "Livin' La Vida Loca by Ricky Martin", 'End Of The Road by Boyz ll Men', 'Smooth by Sanatana (ft. Rob Thomas)', 'Obsessed by Mariah Carey', '505 by The Artic Monkeys', 'Enter Sandman by Metallica', 'Another Brick in the Wall, Pt. 2 by Pink Floyd', 'Blackbird by The Beatles', 'Space Song by Beach HOuse', 'Reptilla by The Stroke', 'Com Thru by Summer Walker ft. Usher', 'Find Someone Like You by Snoh Aalegra'];

// global variable for individual playlist
var playlist1 = [];

// global variables for instructions page
var midX;
var startY;
var lineHeight = 50;

// global variables for stars background
var spot = {
  x: 100,
  y: 100,
}

var col = {
  r: 255,
  g: 255,
  b: 255,
}

// load typeface
function preload() {
  Brice = loadFont('Brice/Brice-Regular.otf');

  for ( var i = 0; i < assets.length; i++ ) {
    images[i] = loadImage('assets250/' + assets[i])
  }

  // images[0] = loadImage('assets/five.png');

}

// center drawing, drawFunction will be Intro for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  //center drawing objects
  textAlign(CENTER);
  textFont('Brice');

  // set to Category for startup
  drawFunction = drawTitle;
}

function draw() {
  background(0);

  // call animated star background
  drawStarBackground();

  // draw hover effect
  drawHover();

  //  call state machine function
  drawFunction();
}


//-- drawTitle() will draw the image at index 4 from the array
drawTitle = function() {
  frameRate(2);

  // parse though title array
  if(i > title.length) {
    i = 0;
  }
  
  // get ith element of title array
  let t = title[i];

  // place text at a random place
  textSize(80);
  fill('#1DB954');

  // randomize positon of text on screen
  text(t, random(width), random(height) );

  // move onto next string in array
  i = i + 1;
}

drawRandomPlaylist = function() {

  // header
  fill('#1DB954');
  textSize(35);
  frameRate(5);
  text("Thanks for Answering!", width/2 + gHover, height/8 );
  text("Here's Your Very Own Personal Playlist :-D", width/2 + gHover, height/8 + 30 );

  // position songs text
  midX = width/2;
  startY = 200;
  lineHeight = 20;

  fill(255);
  textSize(15);

  // parse though string array
  for ( let i = 0; i < songs.length; i++ ) {
    
    // need to figure out how to generate a new string that randomly chooses from preexisting string
    text((songs[i]), midX, startY + (i * lineHeight) );

  }
  return;

}

drawIntro = function() {
  // position text
  midX = width/2;
  startY = 60;

  // fill green color
  fill('#1DB954');
  textSize(24);

  // parse though string array
  for ( let i = 0; i < intro.length; i++ ) {
    text( intro[i], midX, startY + (i * lineHeight) );
  }
  return;
}

// page 1
drawFastFoodItem = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);
  text("Pick A Fast Food Menu Item", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  fill(255);
  textSize(24);


  text("McDonald's", width/2 + gHover, height/3);
  text("Fries", width/2 + gHover, height/3 + 20);
  image(images[24], width/2 - 100, height/2);

  text("In-N-Out", width/2 - 300 + gHover, height/3);
  text("Burger", width/2 - 300 + gHover, height/3 + 20);
  image(images[30], width/2 + 200, height/2);

  text("Taco Bell's Crunch", width/2 + 300 + gHover, height/3);
  text("Wrap Supreme", width/2 + 300 + gHover, height/3 + 20);
  image(images[48], width/2 - 400 , height/2);

}

// page 1 + option 1
drawLifeMovie = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What Movie Describes Your Life?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );
  1

  fill(255);
  textSize(24);

  text("Step Up 2:", width/2 + gHover, height/3);
  text("The Streets", width/2 + gHover, height/3 + 20);
  image(images[47], width/2 - 100, height/2);

  text("Mean", width/2 - 300 + gHover, height/3);
  text("Girls", width/2 - 300 + gHover, height/3 + 20);
  image(images[31], width/2 - 400, height/2);

  text("Shawshank", width/2 + 300 + gHover, height/3);
  text("Redemption", width/2 + 300 + gHover, height/3 + 20);
  image(images[43], width/2 + 200 , height/2);
}

// page 1 + option 2
drawHousePlant = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What's Your Favorite House Plant?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  // displayAnswers("Heads","Tails","Neither");

  text("Cactus", width/2 + gHover, height/3);
  text("Aloe Vera", width/2 - 300 + gHover, height/3);
  text("Succulent", width/2 + 300 + gHover, height/3);
}

// page 1 + option 3
drawFlower = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick A Flower?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Rose", width/2 + gHover, height/3);
  text("Lily", width/2 - 300 + gHover, height/3);
  text("Daffodil", width/2 + 300 + gHover, height/3);
}


// page 1 + option 1 + option 1
drawDADAProf = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Favorite DADA Professor?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Dolores", width/2 + gHover, height/3);
  text("Umbridge", width/2 + gHover, height/3 + 20);
  image(images[12], width/2 - 100, height/2);

  text("Mad-Eye", width/2 - 300 + gHover, height/3);
  text("Moody", width/2 - 300 + gHover, height/3 + 20);
  image(images[29], width/2 - 400, height/2);

  text("Remus", width/2 + 300 + gHover, height/3);
  text("Lupin", width/2 + 300 + gHover, height/3 + 20);
  image(images[40], width/2 + 200, height/2);

}

// page 1 + option 1 + option 2
drawOuterPlanet = function() {
  fill('#1DB954');
  frameRate(5);
  textSize(35);

  text("Pick a Outer Planet", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Neptune", width/2 + gHover, height/3);
  image(images[33], width/2 - 100, height/2);

  text("Pluto", width/2 - 300 + gHover, height/3);
  image(images[41], width/2 - 400, height/2);

  text("Jupiter", width/2 + 300 + gHover, height/3);
  image(images[25], width/2 + 200, height/2);

}

// page 1 + option 1 + option 3
drawCerealBrand = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Cereal Brand?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Frosted", width/2 + gHover, height/3);
  text("Flakes", width/2 + gHover, height/3 + 20);
  image(images[19], width/2 - 100, height/2);

  text("Cinnamon", width/2 - 300 + gHover, height/3);
  text("Toast Crunch", width/2 - 300 + gHover, height/3 + 20);
  image(images[9], width/2 - 400 , height/2);

  text("Froot", width/2 + 300 + gHover, height/3);
  text("Loops", width/2 + 300 + gHover, height/3 + 20);
  image(images[18], width/2 + 200 , height/2);


}

// page 1 + option 2 + option 1
drawPixarMovie = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick A Pixar Movie", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("The", width/2 + gHover, height/3);
  text("Incredibles", width/2 + gHover, height/3 + 20);
  image(images[49], width/2 - 100, height/2);

  text("Finding", width/2 - 300 + gHover, height/3);
  text("Nemo", width/2 - 300 + gHover, height/3 + 20);
  image(images[17], width/2 - 400, height/2);

  text("Toy", width/2 + 300 + gHover, height/3);
  text("Story", width/2 + 300 + gHover, height/3 + 20);
  image(images[54], width/2 + 200, height/2);

}

// skip change
// page 1 = option 2 + option 2
drawTvEnding= function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Worst TV Show Ending?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Game of", width/2 + gHover, height/3);
  text("Thrones", width/2 + gHover, height/3 + 20);
  image(images[59], width/2 - 100, height/2);

  text("Lost", width/2 - 300 + gHover, height/3);
  image(images[60], width/2 - 400, height/2);

  text("How I Met", width/2 + 300 + gHover, height/3);
  text("Your Mother", width/2 + 300 + gHover, height/3 + 20);
  image(images[61], width/2 + 200, height/2);


}

// page 1 + option 2 + option 3
drawBread = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What Type Of Bread Could You Eat For The Rest Of Your Life?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Brioche", width/2 + gHover, height/3);
  image(images[4], width/2 - 100, height/2);

  text("Baguette", width/2 - 300 + gHover, height/3);
  image(images[3], width/2 - 400, height/2);

  text("Sourdough", width/2 + 300 + gHover, height/3);
  image(images[45], width/2 + 200, height/2);

}

// page 1 + option 3 + option 1
drawPastaShape = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);
  text("Worst Pasta Shape?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Elbows", width/2 + gHover, height/3);
  image(images[13], width/2 - 100, height/2);

  text("Farfalle", width/2 - 300 + gHover, height/3);
  image(images[16], width/2 - 400, height/2);

  text("Penne", width/2 + 300 + gHover, height/3);
  image(images[37], width/2 + 200, height/2);

}

// page 1 + option 3 + option 2
drawShrekCharacters = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Favorite Shrek Character?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Gingerbread", width/2 + gHover, height/3);
  text("Man", width/2 + gHover, height/3 + 20);
  image(images[14], width/2 - 400, height/2);


  text("Fairy God", width/2 - 300 + gHover, height/3);
  text("Mother", width/2 - 300 + gHover, height/3 + 20);
  image(images[21], width/2 - 100, height/2);

  text("Lord", width/2 + 300 + gHover, height/3);
  text("Farquaad", width/2 + 300 + gHover, height/3 + 20);
  image(images[28], width/2 + 200, height/2);

}

// page 1 + option 3 + option 3
drawPie = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Pie Flavor?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Pumpkin", width/2 + gHover, height/3);
  image(images[39], width/2 - 100, height/3);

  text("Peacan", width/2 - 300 + gHover, height/3);
  image(images[36], width/2 - 400, height/3);

  text("Apple", width/2 + 300 + gHover, height/3);
  image(images[0], width/2 + 200, height/3);

  
}

// page 1 + option 1 + option 1 + option 1
drawLifeSwitch = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Which Celebrity Would You Switch Lives With For A Day?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);
  text("Shaquille", width/2 + gHover, height/3);
  text("O'Neal", width/2 + gHover, height/3 + 20);
  image(images[42], width/2 - 150, height/2);

  text("Kris", width/2 - 300 + gHover, height/3);
  text("Jenner", width/2 - 300 + gHover, height/3 + 20);
  image(images[27], width/2 - 470, height/2);

  text("Timothee.", width/2 + 300 + gHover, height/3);
  text("Chalamet", width/2 + 300 + gHover, height/3 + 20);
  image(images[51], width/2 + 200, height/2);

}

// page 1 + option 1 + option 1 + option 2
drawTheOfficeCharacter= function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Which Character On The 'The Office' Do You Resonate With The Most?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Creed", width/2 + gHover, height/2);
  text("Bratton", width/2 + gHover, height/2 + 20);
  image(images[11], width/2 - 100, height/2 + 50);

  text("Kelly", width/2 - 300 + gHover, height/2);
  text("Kapoor", width/2 - 300 + gHover, height/2 + 20);
  image(images[26], width/2 - 400, height/2 + 50);

  text("Meredith", width/2 + 300 + gHover, height/2);
  text("Palmer", width/2 + 300 + gHover, height/2 + 20);
  image(images[32], width/2 + 200, height/2 + 50);

}

// page 1 + option 1 + option 1 + option 3
drawMarvelSidekick = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick a Marvel Side Character", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Falcon", width/2 - 300 + gHover, height/3);
  image(images[15], width/2 - 400, height/2);

  text("Bucky", width/2 + gHover, height/3);
  image(images[5], width/2 - 100, height/2);

  text("Shuri", width/2 + 300 + gHover, height/3);
  image(images[44], width/2 + 200, height/2);

}


// page 1 + option 1 + option 2 + option 1
drawBreakfast = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What's Your Go To Breakfast?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Avocado", width/2 + gHover, height/3);
  text("Toast", width/2 + gHover, height/3 + 20);
  image(images[2], width/2 - 100, height/2);

  text("Pancakes", width/2 + 300 + gHover, height/3);
  image(images[34], width/2 + 200, height/2);

  text("Cereal", width/2 - 300 + gHover, height/3); 
  image(images[7], width/2 - 400, height/2);
  
}

// page 1 + option 1 + option 2 + option 2
drawAdobeApp = function() {
  fill('#1DB954');
  textSize(24);
  frameRate(5);

  text("Best Adobe Application?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("InDesign", width/2 + gHover, height/3);
  image(images[23], width/2 - 100, height/2);

  text("XD", width/2 - 300 + gHover, height/3);
  image(images[55], width/2 - 400, height/2);

  text("Photoshop", width/2 + 300 + gHover, height/3);
  image(images[38], width/2 + 200, height/2);

}

// page 1 + option 1 + option 2 + option 3
drawPokemonStarter = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick A Starter Pokemon", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Squirtle", width/2 + gHover, height/3);
  image(images[46], width/2 - 100, height/2);

  text("Bulbasaur", width/2 - 300 + gHover, height/3);
  image(images[6], width/2 - 400, height/2);

  text("Charmander", width/2 + 300 + gHover, height/3);
  image(images[8], width/2 + 200, height/2);

}

// page 1 + option 1 + option 3 + option 1
drawSpiderman = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Who's The Best Spiderman?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Toby", width/2 + gHover, height/3);
  text("Maguire", width/2 + gHover, height/3 + 20);
  image(images[1], width/2 - 400, height/2);

  text("Andrew", width/2 - 300 + gHover, height/3);
  text("Garfield", width/2 - 300 + gHover, height/3 + 20);
  image(images[52], width/2 - 120, height/2);

  text("Tom", width/2 + 300 + gHover, height/3);
  text("Holland", width/2 + 300 + gHover, height/3 + 20);
  image(images[53], width/2 + 200, height/2);

}

// page 1 + option 1 + option 3 + option 2
drawRewatchShow= function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Favorite TV Show To Rewatch?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("The", width/2 + gHover, height/3);
  text("Office", width/2 + gHover, height/3 + 20);
  image(images[50], width/2 - 100, height/2);

  text("Community", width/2 - 300 + gHover, height/3);
  image(images[10], width/2 - 420, height/2);

  text("Parks", width/2 + 300 + gHover, height/3);
  text("and Recs", width/2 + 300 + gHover, height/3 + 20);
  image(images[35], width/2 + 200, height/2);

}

// page 1 + option 1 + option 3 + option 3
draw80sHit= function() {
  fill('#1DB954');
  textSize(35);

  frameRate(5);
  text("Pick An 80s Hit Song", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Total Eclipse ", width/2 + gHover, height/3);
  text("Of The Heart", width/2 + gHover, height/3 + 20);
  image(images[58], width/2 - 100, height/2);

  text("I Want To Dance", width/2 - 300 + gHover, height/3);
  text("With Somebody", width/2 - 300 + gHover, height/3 + 20);
  image(images[56], width/2 - 450, height/2);

  text("Don't Stop", width/2 + 300 + gHover, height/3);
  text("Believing", width/2 + 300 + gHover, height/3 + 20);
  image(images[57], width/2 + 250, height/2);

}

// page 1 + option 2 + option 1 + option 1
drawTheaterSnack = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Ultimate Movie Theater Snack?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Hot", width/2 + gHover, height/3);
  text("Dog", width/2 + gHover, height/3 + 20);
  // image(images[62], width/2 - 100, height/2);

  text("Nachos", width/2 + 300 + gHover, height/3);
  // image(images[63], width/2 + 200, height/2);

  text("Popcorn", width/2 - 300 + gHover, height/3);
  // image(images[64], width/2 - 400, height/2);

}

// page 1 + option 2 + option 1 + option 2
drawNuggetShape = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What's The Most Elite McDonald's Chicken Nugget Shape?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);
  text("Ball", width/2 + gHover, height/3);
  // image(images[68], width/2, height/2);

  text("Bone", width/2 + 300 + gHover, height/3);
  // image(images[70], width/2, height/2);

  text("Boot", width/2 - 300 + gHover, height/3);
  // image(images[69], width/2, height/2);

}
// page 1 + option 2 + option 1 + option 3
drawBook = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Favorite Mandatory High School Read?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("To Kill A", width/2 + gHover, height/3);
  text("Mockingbird", width/2 + gHover, height/3 + 20);
  // image(images[67], width/2 - 400, height/2);

  text("The Catcher", width/2 - 300 + gHover, height/3);
  text("In The Rye", width/2 - 300 + gHover, height/3 + 20);
  // image(images[65], width/2 - 100, height/2);

  text("The Great", width/2 + 300 + gHover, height/3);
  text("Gatsby", width/2 + 300 + gHover, height/3 + 20);
  // image(images[66], width/2 + 200, height/2);

}

// page 1 + option 2 + option 2 + option 1
drawChip = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Chips", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Lays", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Doritos", width/2 - 300 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Cheetos", width/2 + 300 + gHover, height/3);
  // image(images[], width/2, height/2);

}

// page 1 + option 2 + option 2 + option 2
drawChristmasMovie = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Favorite Christmas Movie? ", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Elf", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Home", width/2 - 300 + gHover, height/3);
  text("Alone", width/2 - 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

  text("The Nightmare", width/2 + 300 + gHover, height/3);
  text("Before Christmas", width/2 + 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

}


// page 1 + option 2 + option 2 + option 3
drawDogBreed = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Cutest Dog Breed? *Controversial", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Corgi", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Pugs", width/2 - 300 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Dachshund", width/2 + 300 + gHover, height/3);
  // image(images[], width/2, height/2);


}

// page 1 + option 2 + option 3 + option 1
drawAnimatedSeries = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Animated Series *American", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Futurama", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Avatar: The", width/2 - 300 + gHover, height/3);
  text("Last Airbender", width/2 - 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

  text("Rick and", width/2 + 300 + gHover, height/3);
  text("Morty", width/2 + 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

}

// page 1 + option 2 + option 3 + option 2
drawMichaelCera = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick A Michael Cera Movie", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);
  text("Scott Pilgrim Vs.", width/2 + gHover, height/3);
  text("The World", width/2 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

  text("Superbad", width/2 - 300 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Juno", width/2 + 300 + gHover, height/3);
  // image(images[], width/2, height/2);
}

// page 1 + option 2 + option 3 + option 3
drawChickFlick = function() {
  fill('255');
  textSize(35);
  frameRate(5);

  text("Pick A 'Chick Flick'", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Clueless ", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("She's", width/2 - 300 + gHover, height/3);
  text("The Man", width/2 - 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

  text("10 Things I", width/2 + 300 + gHover, height/3);
  text("Hate About You", width/2 + 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

}

// page 1 + option 3 + option 1 + option 1
drawJohnHugesMovie= function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick A John Hughes' Movie", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("The Breakfast", width/2 + gHover, height/3);
  text("Club", width/2 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

  text("Sixteen", width/2 - 300 + gHover, height/3);
  text("Candles", width/2 - 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

  text("Ferris Bueller's.", width/2 + 300 + gHover, height/3);
  text("Day Off", width/2 + 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

}

// page 1 + option 3 + option 1 + option 2
drawCity = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);
  text("What City Would You Rather Be In Right Now?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Rome", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Tokyo", width/2 - 300 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Rio de Janeiro", width/2 + 300 + gHover, height/3);
  // image(images[], width/2, height/2);

}

// page 1 + option 3 + option 1 + option 3
drawPizzaChain = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Pizza Place – Absolutely No Debate?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Dominos", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Pizza", width/2 - 300 + gHover, height/3);
  text("Hut", width/2 - 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

  text("Papa", width/2 + 300 + gHover, height/3);
  text("John's", width/2 + 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

}

// page 1 + option 3 + option 2 + option 1
drawHalloweenCandy = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Most Prized Candy in a Halloween Trade Off?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Reese's", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Snickers", width/2 - 300 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Kit Kat", width/2 + 300 + gHover, height/3);
  // image(images[], width/2, height/2);

}

// page 1 + option 3 + option 2 + option 2
drawIceCream = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What Ice Cream Truck Class Would Make You Come Running?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Firecracker", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Strawberry", width/2 - 300 + gHover, height/3);
  text("Shortcake Bar", width/2 - 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);

  text("Choco", width/2 + 300 + gHover, height/3);
  text("Taco", width/2 + 300 + gHover, height/3 + 20);
  // image(images[], width/2, height/2);


}

// page 1 + option 3 + option 2 + option 3
drawSuperpower = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Which One of These Superpowers Is The Most Overpowered?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Superstrength", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Telekinesis", width/2 - 300 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Flight", width/2 + 300 + gHover, height/3);
  // image(images[], width/2, height/2);


}

drawDreamJob = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What Dream Job Did You Have As A Kid?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  text("Vet", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Firefighter", width/2 - 300 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Astronout", width/2 + 300 + gHover, height/3);
  // image(images[], width/2, height/2);


}

// page 1 + option 3 + option 3 + option 2
drawCoffeeChain = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Place To Get Coffee?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);


  text("Starbucks", width/2 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Peet's", width/2 - 300 + gHover, height/3);
  // image(images[], width/2, height/2);

  text("Dunkin'", width/2 + 300 + gHover, height/3);
  // image(images[], width/2, height/2);

}

// page 1 + option 3 + option 3 + option 3
drawDecade = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("If You Travel Back In Time, What Decade Would You Go To?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);
  text("1920s'", width/2, height/3);
  // image(images[], width/2, height/2);

  text("1950's", width/2 - 300, height/3);
  // image(images[], width/2, height/2);

  text("1970's", width/2 + 300, height/3);
  // image(images[], width/2, height/2);

}

drawStarBackground = function() {
  frameRate(5);
  noStroke();
  fill(col.r, col.g, col.b, 120);
  
  // randomize mulitple star shapes
  spot.x = random(0, width);
  spot.y = random(0, height-100);
  ellipse(spot.x, spot.y, 20, 1);
  ellipse(spot.x, spot.y, 1, 20);
  
  spot.x = random(0, width);
  spot.y = random(0, height-100);
  ellipse(spot.x, spot.y, 20, 1);
  ellipse(spot.x, spot.y, 1, 20);
  
  spot.x = random(0, width);
  spot.y = random(0, height-100);
  ellipse(spot.x, spot.y, 20, 1);
  ellipse(spot.x, spot.y, 1, 20);

  spot.x = random(0, width);
  spot.y = random(0, height-100);
  ellipse(spot.x, spot.y, 20, 1);
  ellipse(spot.x, spot.y, 1, 20);

  spot.x = random(0, width);
  spot.y = random(0, height-100);
  ellipse(spot.x, spot.y, 20, 1);
  ellipse(spot.x, spot.y, 1, 20);

  spot.x = random(0, width);
  spot.y = random(0, height-100);
  ellipse(spot.x, spot.y, 20, 1);
  ellipse(spot.x, spot.y, 1, 20);

  spot.x = random(0, width);
  spot.y = random(0, height-100);
  ellipse(spot.x, spot.y, 20, 1);
  ellipse(spot.x, spot.y, 1, 20);

  spot.x = random(0, width);
  spot.y = random(0, height-100);
  ellipse(spot.x, spot.y, 20, 1);
  ellipse(spot.x, spot.y, 1, 20);
}

drawHover = function() {
  gHover = gHover + hoverSpeed;

  if ( gHover > 10 || gHover < -10 ) {
    hoverSpeed = hoverSpeed * -1;
  }
}

function keyPressed() {
  print(keyCode);

  // intro 
  if ( key === 'i' ) {

    //  ISSUE

    // go to intstruction page
    drawFunction = drawIntro ;
  }

  if ( key === 's' ) {
    // go to first question
    drawFunction = drawFastFoodItem ;
  }

  if ( key === 't' ) {
    // ISSUE
    // go to title page
    drawFunction = drawTitle ;
  }

  // page 1
  // fast food menu
  if ( drawFunction === drawFastFoodItem ) {
    if ( key === '1' ) {
      // movie
      drawFunction = drawLifeMovie ;
    }

    else if ( key === '2' ) {
      // heads or tails
      drawFunction = drawHousePlant ;
    }

    else if ( key === '3') {
      // color
      drawFunction = drawFlower ;
    }
    return;
  }


  // movies
  if ( drawFunction === drawLifeMovie

  ) {
    if ( key === '1' ) {
      // DADA prof
      drawFunction = drawDADAProf ;
    }

    else if ( key === '2' ) {
      // outer plant
      drawFunction = drawOuterPlanet ;
    }

    else if ( key === '3') {
      // cereal brand
      drawFunction = drawCerealBrand ;
    }
    return;
  }

  if ( drawFunction === drawHousePlant ) {
    if ( key === '1' ) {
      // pixar movie
      drawFunction = drawPixarMovie ;
    }

    else if ( key === '2' ) {
      // worst show ending
      drawFunction = drawTvEnding;
    }

    else if ( key === '3') {
      // bread type
      drawFunction = drawBread ;
    }
    return;
  }

  if ( drawFunction === drawFlower ) {
    if ( key === '1' ) {
      // pasta shape
      drawFunction = drawPastaShape ;
    }

    else if ( key === '2' ) {
      // shrek character
      drawFunction = drawShrekCharacters ;
    }

    else if ( key === '3') {
      // pie flavor
      drawFunction = drawPie ;
    }
    return;
  }

  if ( drawFunction === drawDADAProf ) {
    if ( key === '1' ) {
      // celebrity for a day
      drawFunction = drawLifeSwitch ;
    }

    else if ( key === '2' ) {
      // the office character
      drawFunction = drawTheOfficeCharacter;
    }

    else if ( key === '3') {
      // marvel side character
      drawFunction = drawMarvelSidekick ;
    }
    return;
  }

  if ( drawFunction === drawOuterPlanet ) {
    if ( key === '1' ) {
      // moon, stars, or plants
      drawFunction = drawBreakfast ;
    }

    else if ( key === '2' ) {
      // adobe application
      drawFunction = drawAdobeApp ;
    }

    else if ( key === '3') {
      // starter pokemon
      drawFunction = drawPokemonStarter ;
    }
    return;
  }

  if ( drawFunction === drawCerealBrand ) {
    if ( key === '1' ) {
      // spiderman actor
      drawFunction = drawSpiderman ;
    }

    else if ( key === '2' ) {
      // favorite tv show to rewatch
      drawFunction = drawRewatchShow;
    }

    else if ( key === '3') {
      // 80s hit song
      drawFunction = draw80sHit;
    }
    return;
  }

  if ( drawFunction === drawPixarMovie ) {
    if ( key === '1' ) {
      // breakfast
      drawFunction = drawTheaterSnack ;
    }

    else if ( key === '2' ) {
      // best nugget shapes
      drawFunction = drawNuggetShape ;
    }

    else if ( key === '3') {
      // mandatory high school read
      drawFunction = drawBook ;
    }
    return;
  }

  if ( drawFunction === drawTvEnding) {
    if ( key === '1' ) {
      // best chip
      drawFunction = drawChip ;
    }

    else if ( key === '2' ) {
      // christmas movie
      drawFunction = drawChristmasMovie ;
    }

    else if ( key === '3') {
      // cutest dog breed
      drawFunction = drawDogBreed ;
    }
    return;
  }

  if ( drawFunction === drawBread ) {
    if ( key === '1' ) {
      // animated series
      drawFunction = drawAnimatedSeries ;
    }

    else if ( key === '2' ) {
      // michael cera movie
      drawFunction = drawMichaelCera ;
    }

    else if ( key === '3') {
      // chick flick
      drawFunction = drawChickFlick ;
    }
    return;
  }

  if ( drawFunction === drawPastaShape ) {
    if ( key === '1' ) {
      // john hughes movie
      drawFunction = drawJohnHugesMovie;
    }

    else if ( key === '2' ) {
      // city
      drawFunction = drawCity ;
    }

    else if ( key === '3') {
      // pizza chain
      drawFunction = drawPizzaChain ;
    }
    return;
  }

  if ( drawFunction === drawShrekCharacters ) {
    if ( key === '1' ) {
      // halloween candy
      drawFunction = drawHalloweenCandy ;
    }

    else if ( key === '2' ) {
      // ice cream 
      drawFunction = drawIceCream ;
    }

    else if ( key === '3') {
      // superpower
      drawFunction = drawSuperpower ;
    }
    return;
  }

  if ( drawFunction === drawPie ) {
    if ( key === '1' ) {

      // ISSUE

      // dream job as a kid
      drawFunction = drawDreamJob ;
    }

    else if ( key === '2' ) {
      // coffee chain
      drawFunction = drawCoffeeChain ;
    }

    else if ( key === '3') {
      // decade 
      drawFunction = drawDecade ;
    }
    return;
  }

  if ( drawFunction === drawLifeSwitch ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawTheaterSnack ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawJohnHugesMovie) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawBreakfast ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawAdobeApp ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawPokemonStarter ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawSpiderman ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawRewatchShow ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === draw80sHit ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawNuggetShape ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawBook ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawChip ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawChristmasMovie ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawDogBreed ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawCity ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawPizzaChain ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawHalloweenCandy ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawIceCream ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawSuperpower ) {
    drawFunction = drawRandomPlaylist ;
  }

  if ( drawFunction === drawCoffeeChain ) {
    drawFunction = drawRandomPlaylist ;
  }


}

function mousePressed() {
  // only change state if we are in Title screen
  if( drawFunction === drawTitle ) {
    // mouse click to instruction screen
    drawFunction = drawIntro ;
  }

}