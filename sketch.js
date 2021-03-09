/***********************************************************************************
  Playlist Generator
  by An Duong

  The intended audience for this project is for young adults or older teenagers (28-18). The questions asked are mainly pop culture. This state machine is not limited to any sites and is used for entertainment purposes. However, a home would make the most sense for this to be interacted with the most.

  This is a state machine project that will allow the user to answer a series of questions and output an array of songs (‘playlist’), Each question will lead to a different set of questions resulting in not only a non-linear, but essentially exponential navigation. Each question will depend on the one before it and the last question will lead to an auto-generated playlist.

  cite:
  https://editor.p5js.org/Noshin/sketches/r4LqGxJe7
  https://editor.p5js.org/aatish/sketches/kwq05rOSP
  https://editor.p5js.org/bengrosser/sketches/rycQ1D9zN


***********************************************************************************/

var images = [];

// array of assets
var assets = ['applePie.png', 'andrewGarfield.png', 'avocadoToast.png', 'baguette.png', 'brioche.png', 'bucky.png', 'bulbasaur.png', 'cereal.png', 'charmander.png', 'cinnamonToast.png', 'community.png', 'creedBratton.png', 'doloresUmbridge.png', 'elbows.png', 'fairyGodMother.png', 'falcon.png', 'farfalle.png', 'findingNemo.png', 'frootLoops.png', 'frostedFlakes.png', 'gameofThrones.png','gingerbreadMan.png',  'himym.png', 'indesign.png', 'innoutBurger.png', 'jupiter.png', 'kellyKapoor.png', 'krisJenner.png', 'lordFarquaad.png', 'madEyeMoody.png', 'mcdFries.png', 'meanGirls.png', 'meredithPalmer.png','neptune.png', 'pancakes.png', 'parksAndRec.png', 'pecanPie.png', 'penne.png', 'photoshop.png', 'pumpkinPie.png','remusLupin.png', 'pluto.png', 'shaq.png', 'shawshank.png', 'shuri.png', 'sourdough.png', 'squirtle.png', 'stepUp2.png', 'tbCrunchWrap.png', 'theIncredibles.png','theOffice.png', 'timotheeChalamet.png', 'tobyMaguire.png','tomHolland.png', 'toyStory.png', 'xd.png', 'danceWithSomebody.png', 'dontStopBelieving.png', 'totalEclipse.png', 'jonSnow.png', 'hurley.png','tedMosby.png', 'hotDog.png', 'nachos.png', 'popcorn.png', 'ball.png', 'bone.png', 'boot.png', 'killAMockingBird.png', 'catcherInRye.png', 'theGreatGatsby.png', 'lays.png', 'doritos.png', 'cheetos.png', 'elf.png', 'homeAlone.png', 'nightmare.png', 'corgi.png', 'pug.png', 'dachshund.png', 'futurama.png', 'avatar.png', 'rickAndMorty.png', 'scottPilgrim.png', 'superbad.png', 'juno.png', 'clueless.png', 'shesTheMan.png', '10things.png', 'breakfastClub.png', 'sixteenCandles.png', 'ferris.png', 'rome.png', 'tokyo.png', 'rio.png', 'dominos.png', 'pizzaHut.png', 'papaJohns.png', 'reese.png', 'snickers.png', 'kitKat.png', 'firecracker.png', 'strawberryShortcake.png', 'chocoTaco.png', 'hulk.png', 'profX.png', 'superman.png', 'vet.png', 'firefighter.png', 'astronaut.png', 'starbucks.png', 'peets.png', 'dunkin.png', '1920.png', '1950.png', '1970.png', 'rose.png', 'lily.png', 'daffodil.png', 'cactus.png', 'aloeVera.png', 'succulent.png'];

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


var strings = ['What Makes You Beautiful by One Direction', 'Take On Me by a-ha', 'Beat It by Michael Jackson', 'No More Parties In LA by Kanye West', 'The Scientist by Coldplay', 'Circles by Mac Miller', 'Ex-Factor by Ms. Laurym Hill', 'Hypnotize by Biggie Smalls', 'Blame It On The Boogie by The Jacksons', 'Night Fever by Bee Gees', 'Dancing Queen by ABBA', 'Drew Barrymore by SZA', 'Lost by Frank Ocean', 'Put Your Head On My Shoulders by Paul Anka', 'Put You Records On by Corinne Bailey Rae', 'Pluto Projector by Rex Orange County', 'Stuck On You by Giveon', 'Eternal Sunshine by Jhene Aiko', 'Unwritten by Natasha Beddingfield', 'No Air by Jordan Sparks', 'Your Love Is My Drug by Kesha', "Hey There Delilah by Plain White T's", "Livin' La Vida Loca by Ricky Martin", 'End Of The Road by Boyz ll Men', 'Smooth by Sanatana (ft. Rob Thomas)', 'Obsessed by Mariah Carey', '505 by The Artic Monkeys', 'Enter Sandman by Metallica', 'Another Brick in the Wall, Pt. 2 by Pink Floyd', 'Blackbird by The Beatles', 'Space Song by Beach House', 'Reptilla by The Strokes', 'Come Thru by Summer Walker ft. Usher', 'Find Someone Like You by Snoh Aalegra', '679 by Fetty Wap', 'Nice For What by Drake', 'You Belong With Me by Taylor Swift', 'No Flocking by Kodack Black', 'Faneto by Chief Keef', 'Spring Day by BTS', 'Heartshaker by Twice', 'Half Moon by Dean', 'Your Song by Birdy', 'Ordinary People by John Legend', 'Redbone by Childish Gambino', 'Who Hurt You? by Daniel Caesar', 'Honey by Kehlany', '5% Tint by Travis Scott', 'Sideline Watching by Lil Uzi', 'Dior by Pop Smoke', 'If I Were A Boy by Beyonce', "Marvin's Room by Drake", 'Bleeding Love by Leona Lewis', 'Because of You by Kelly Clarkson', 'Complicated by Avril Lavigne', 'The Only Exception by Paramore', 'Epiphany by BTS', 'Hot Girl by Megan Thee Stallion', 'No Diggity by Blackstreet', 'Shoop by Salt-N-Pepa', 'The Next Episode by Dr. Dre and Snoop Dogg', 'Back & Forth by Aaliyah', 'Creep by TLC', "Lady by D'Angelo", 'C.R.E.A.M. by Wu-Tang Clan', 'Poison by Bell Biv DeVoe', 'How Do You Want It by Tupac', 'The Real Slim Shady by Eminem', 'Oops!... I Did It Again by Britney Spears', 'Wish You Were Here by Pink Floyd', 'Crazy by Gnarls Barkley', 'Hotel California by Eagles', 'Septempber by Earth, Wind, Fire', 'Superstition by Stevie Wonder', 'Hound Dog by Elvis Presley', 'Africa by TOTO', 'Play That Funky Music by Wild Cherry', 'Sunny by Boney M.', 'Who Says by Selena Gomez', 'S.O.S by the Jonas Brothers', '7 Things by Miley Cyrus', 'Boyfriend by Big Time Rush', 'Bet On It by Troy', 'Cherry Wine', 'Yellow by Coldplay']

// generate an array of random strings from the master set
var smallStrings = [];

// number of small strings to display or use
var numSmallStrings = [];   

// global variables for drawIntro()
var midX;
var startY;
var lineHeight1 = 60;

// global variables for drawPlaylist()
var lineHeight2 = 40;

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
    images[i] = loadImage('assets/' + assets[i])
  }
}

// center drawing, drawFunction will be Intro for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  //center drawing objects
  textAlign(CENTER);
  textFont('Brice');

  smallStrings = strings;
  numSmallStrings = strings.length;

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
  text("Thanks for Answering!", width/2 + gHover, height/8);
  text("Here's Your Very Own Personal Playlist :-D", width/2 + gHover, height/8 + 30);

  // position songs text
  midX = width/2;
  startY = 200;

  fill(255);
  textSize(15);

  for( let i = 0 ; i < numSmallStrings; i++ ) {
      text( smallStrings[i], midX, startY + (i * lineHeight2) )
  }

  image(images[122]);

}

// displays instructions 
drawIntro = function() {
  // position text
  midX = width/2;
  startY = 60;

  // fill green color
  fill('#1DB954');
  textSize(24);

  // parse though string array
  for ( let i = 0; i < intro.length; i++ ) {
    text(intro[i], midX, startY + (i * lineHeight1) + gHover);
  }
  return;
}

// inputs 6 answers and displays it in set position
function displayAnswerLong(answer1, answer2, answer3, answer4, answer5, answer6) {
  text(answer1, width/2 + gHover, height/3);
  text(answer2, width/2 + gHover, height/3 + 20);


  text(answer3, width/2 - 300 + gHover, height/3);
  text(answer4, width/2 - 300 + gHover, height/3 + 20);


  text(answer5, width/2 + 300 + gHover, height/3);
  text(answer6, width/2 + 300 + gHover, height/3 + 20)
}

//  input 3 answers and displays it in set position
function displayAnswerShort(answer1, answer2, answer3) {
  fill(255);
  textSize(24);
  text(answer1, width/2 + gHover, height/3);
  text(answer2, width/2 - 300 + gHover, height/3);
  text(answer3, width/2 + 300 + gHover, height/3);
}

// input 3 images and displays it in set position
function displayImages(image1, image2, image3) {
  image(image1,  width/2 - 100, height/2 + gHover);
  image(image2, width/2 - 400, height/2 + gHover);
  image(image3, width/2 + 200, height/2 + gHover);
}

// page 1
drawFastFoodItem = function() {  
  fill('#1DB954');
  textSize(35);
  frameRate(5);
  text("Pick A Fast Food Menu Item", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  fill(255);
  textSize(24);
  displayAnswerLong("McDonald's", "Fries", "In-N-Out", "Burger", "Taco Bell's Crunch", "Wrap Supreme");

  displayImages(images[30], images[24], images[48]);

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
  displayAnswerLong("Step Up 2:", "The Streets", "Mean", "Girls", "Shawshank", "Redemption");

  displayImages(images[47], images[31], images[43]);
}

// page 1 + option 2
drawHousePlant = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What's Your Favorite House Plant?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Cactus", "Aloe Vera", "Succulent");

  displayImages(images[119], images[120], images[121]);
}

// page 1 + option 3
drawFlower = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick A Flower?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);
  displayAnswerShort("Rose", "Lily", "Daffodil");

  displayImages(images[116], images[117], images[118]);

}


// page 1 + option 1 + option 1
drawDADAProf = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Favorite DADA Professor?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Dolores", "Umbridge", "Mad-Eye", "Moody", "Remus", "Lupin");

  displayImages(images[12], images[29], images[40]);

}

// page 1 + option 1 + option 2
drawOuterPlanet = function() {
  fill('#1DB954');
  frameRate(5);
  textSize(35);

  text("Pick a Outer Planet", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Neptune", "Pluto", "Jupiter");

  displayImages(images[33], images[41], images[25]);

}

// page 1 + option 1 + option 3
drawCerealBrand = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Cereal Brand?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Frosted", "Flakes", "Cinnamon", "Toast Crunch", "Froot", "Loops");

  displayImages(images[19], images[9], images[18]);

}

// page 1 + option 2 + option 1
drawPixarMovie = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick A Pixar Movie", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("The", "Incredibles", "Finding", "Nemo", "Toy", "Story");

  displayImages(images[49], images[17], images[54]);

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

  displayAnswerLong("Game of", "Thrones", "Lost", "  ", "How I Met", "Your Mother");

  displayImages(images[59], images[60], images[61]);

}

// page 1 + option 2 + option 3
drawBread = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What Type Of Bread Could You Eat For The Rest Of Your Life?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Brioche", "Baguette", "Sourdough");

  displayImages(images[4], images[3], images[45]);

}

// page 1 + option 3 + option 1
drawPastaShape = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);
  text("Worst Pasta Shape?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Elbows", "Farfalle", "Penne");

  displayImages(images[13], images[16], images[37]);

}

// page 1 + option 3 + option 2
drawShrekCharacters = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Favorite Shrek Character?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Gingerbread", "Man", "Fairy God", "Mother", "Lord", "Farquaad");

  displayImages(images[14], images[21], images[28]);

}

// page 1 + option 3 + option 3
drawPie = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Pie Flavor?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Pumpkin", "Peacan", "Apple");

  displayImages(images[39], images[36], images[0]);
 
}

// page 1 + option 1 + option 1 + option 1
drawLifeSwitch = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Which Celebrity Would You Switch Lives With For A Day?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Shaquille", "O'Neal", "Kris", "Jenner", "Timothee.", "Chalamet");

  displayImages(images[42], images[27], images[51]);

}

// page 1 + option 1 + option 1 + option 2
drawTheOfficeCharacter= function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Which Character On The 'The Office' Do You Resonate With The Most?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Creed", "Bratton", "Kelly", "Kapoor", "Meredith", "Palmer");

  displayImages(images[11], images[26], images[32]);

}

// page 1 + option 1 + option 1 + option 3
drawMarvelSidekick = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick a Marvel Side Character", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Falcon", "Bucky", "Shuri");

  displayImages(images[15], images[5], images[44]);

}


// page 1 + option 1 + option 2 + option 1
drawBreakfast = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What's Your Go To Breakfast?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Avocado", "Toast", "Pancakes", " ", "Cereal", " ");

  displayImages(images[2], images[34], images[7]);
  
}

// page 1 + option 1 + option 2 + option 2
drawAdobeApp = function() {
  fill('#1DB954');
  textSize(24);
  frameRate(5);

  text("Best Adobe Application?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("InDesign", "XD", "Photoshop");

  displayImages(images[23], images[55], images[38]);

}

// page 1 + option 1 + option 2 + option 3
drawPokemonStarter = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick A Starter Pokemon", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Squirtle", "Bulbasaur", "Charmander");

  displayImages(images[46], images[6], images[8]);

}

// page 1 + option 1 + option 3 + option 1
drawSpiderman = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Who's The Best Spiderman?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Toby", "Maguire", "Andrew", "Garfield", "Tom", "Holland");

  displayImages(images[1], images[52], images[53]);

}

// page 1 + option 1 + option 3 + option 2
drawRewatchShow= function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Favorite TV Show To Rewatch?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("The", "Office", "Community", " ", "Parks", "and Recs");

  displayImages(images[50], images[10], images[35]);

}

// page 1 + option 1 + option 3 + option 3
draw80sHit= function() {
  fill('#1DB954');
  textSize(35);

  frameRate(5);
  text("Pick An 80s Hit Song", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Total Eclipse ", "Of The Heart", "I Want To Dance", "With Somebody", "Don't Stop", "Believing");

  displayImages(images[58], images[56], images[57]);
}

// page 1 + option 2 + option 1 + option 1
drawTheaterSnack = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Ultimate Movie Theater Snack?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Hot", "Dog", "Nachos", " ", "Popcorn", " ");

  displayImages(images[62], images[63], images[64]);

}

// page 1 + option 2 + option 1 + option 2
drawNuggetShape = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What's The Most Elite McDonald's Chicken Nugget Shape?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Ball", "Bone", "Boot");

  displayImages(images[65], images[66], images[67]);

}
// page 1 + option 2 + option 1 + option 3
drawBook = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Favorite Mandatory High School Read?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("To Kill A", "Mockingbird", "The Catcher", "In The Rye", "The Great", "Gatsby");

  displayImages(images[68], images[69], images[70]);

}

// page 1 + option 2 + option 2 + option 1
drawChip = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Chips", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Lays", "Doritos", "Cheetos");
  displayImages(images[71], images[72], images[73]);


}

// page 1 + option 2 + option 2 + option 2
drawChristmasMovie = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Favorite Christmas Movie? ", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Elf", "Home", "Alone", "The Nightmare", "Before Christmas");

  displayImages(images[74], images[75], images[76]);

}


// page 1 + option 2 + option 2 + option 3
drawDogBreed = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Cutest Dog Breed? *Controversial", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Corgi", "Pugs", "Dachshund");

  displayImages(images[77], images[78], images[79]);

}

// page 1 + option 2 + option 3 + option 1
drawAnimatedSeries = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Animated Series *American", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Futurama", " ", "Avatar: The", "Last Airbender", "Rick and", "Morty");

  displayImages(images[80], images[81], images[82]);

}

// page 1 + option 2 + option 3 + option 2
drawMichaelCera = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick A Michael Cera Movie", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Scott Pilgrim Vs.", "The World", "Superbad", " ", "Juno", " "); 

  displayImages(images[83], images[84], images[85]);

}

// page 1 + option 2 + option 3 + option 3
drawChickFlick = function() {
  fill('255');
  textSize(35);
  frameRate(5);

  text("Pick A 'Chick Flick'", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Clueless "," ", "She's", "The Man", "10 Things I", "Hate About You");

  displayImages(images[86], images[87], images[88]);

}

// page 1 + option 3 + option 1 + option 1
drawJohnHugesMovie= function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Pick A John Hughes' Movie", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("The Breakfast", "Club", "Sixteen", "Candles", "Ferris Bueller's", "Day Off");

  displayImages(images[89], images[90], images[91]);

}

// page 1 + option 3 + option 1 + option 2
drawCity = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);
  text("What City Would You Rather Be In Right Now?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Rome", "Tokyo", "Rio de Janeiro");

  displayImages(images[92], images[93], images[94]);

}

// page 1 + option 3 + option 1 + option 3
drawPizzaChain = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Pizza Place – Absolutely No Debate?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Dominos", " ", "Pizza", "Hut", "Papa", "John's");

  displayImages(images[95], images[96], images[97]);

}

// page 1 + option 3 + option 2 + option 1
drawHalloweenCandy = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Most Prized Candy in a Halloween Trade Off?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Reese's", "Snickers", "Kit Kat");

  displayImages(images[98], images[99], images[100]);

}

// page 1 + option 3 + option 2 + option 2
drawIceCream = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What Ice Cream Truck Class Would Make You Come Running?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerLong("Firecracker", " ", "Strawberry", "Shortcake", "Choco", "Taco");

  displayImages(images[101], images[102], images[103]);

}

// page 1 + option 3 + option 2 + option 3
drawSuperpower = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Which One of These Superpowers Is The Most Overpowered?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Superstrength", "Telekinesis", "Flight");

  displayImages(images[104], images[105], images[106]);

}

// page 1 + option 3 + option 3 + option 1
drawDreamJob = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("What Dream Job Did You Have As A Kid?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Vet", "Firefighter", "Astronaut");

  displayImages(images[107], images[108], images[109]);

}


// page 1 + option 3 + option 3 + option 2
drawCoffeeChain = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("Best Place To Get Coffee?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("Starbucks", "Peet's", "Dunkin'");

  displayImages(images[110], images[111], images[112]);

}

// page 1 + option 3 + option 3 + option 3
drawDecade = function() {
  fill('#1DB954');
  textSize(35);
  frameRate(5);

  text("If You Travel Back In Time, What Decade Would You Go To?", width/3, height/10, random(width/2.5,height/1.5), random(width/2.5,height/1.5) );

  textSize(24);
  fill(255);

  displayAnswerShort("1920's", "1950's", "1970's");

  displayImages(images[113], images[114], images[115]);
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
    // go to intstruction page
    drawFunction = drawIntro ;
  }

  if ( key === 's' ) {
    // go to first question
    drawFunction = drawFastFoodItem ;
  }

  if ( key === 't' ) {
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
      // house plants
      drawFunction = drawHousePlant ;
    }

    else if ( key === '3') {
      // flowers
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
      // breakfast foods
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
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawTheaterSnack ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawJohnHugesMovie) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawBreakfast ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawAdobeApp ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawPokemonStarter ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawSpiderman ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawRewatchShow ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === draw80sHit ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawNuggetShape ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawBook ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawChip ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawChristmasMovie ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawDogBreed ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawCity ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawPizzaChain ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawHalloweenCandy ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawIceCream ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawSuperpower ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawCoffeeChain ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawTheOfficeCharacter ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawMarvelSidekick ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawMichaelCera ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawChickFlick ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawAnimatedSeries ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

  if ( drawFunction === drawDecade ) {
    drawFunction = drawRandomPlaylist ;
    smallStrings = shuffle(strings);
    numSmallStrings = 10;
  }

}

function mousePressed() {
  // only change state if we are in Title screen
  if( drawFunction === drawTitle ) {
    // mouse click to instruction screen
    drawFunction = drawIntro ;
  }

}