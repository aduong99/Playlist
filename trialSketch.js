var myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

function getRandomIndex(items) {
  return Math.floor(Math.random() * items.length);
}

for (var i = 0; i < 3; i++) {
  var removedItem = myShows.splice(getRandomIndex(myShows), 1);
  document.writeln(removedItem)
}


// generate an array of random strings from the master set
var smallStrings = [];

// number of small strings to display or use
var numSmallStrings = 3;   

// at startup, copy master array into another one, set length to master array length
smallStrings = strings;
numSmallStrings = strings.length;

// Draw code goes here
function draw() {
  background(0);

  fill(255);
  for( let i = 0 ; i < numSmallStrings; i++ ) {
      text( smallStrings[i], midX, startY + (i * lineHeight) )
  }
}

smallStrings = shuffle(strings);
numSmallStrings = 3;