var myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

function getRandomIndex(items) {
  return Math.floor(Math.random() * items.length);
}

for (var i = 0; i < 3; i++) {
  var removedItem = myShows.splice(getRandomIndex(myShows), 1);
  document.writeln(removedItem)
}
