function onReady() {
  console.log('Yay!, onReady() got called when the page loaded.');
// We can do DOM stuff
// We can select things
// They all come from magical place called - document
// document refers to the DOM - it's the HTML file - it's everything

// querySelector matches the first thing it finds

// selecting...
let header = document.querySelector('h1')
// document.querySelector('.class');
// document.getElementById('container');

console.log(header);

// manipulating...
header.classList.add('pink-text');
// header.classList.remove'pink-text'); - removes
// header.classList.toggle('pink-text'); - toggles, like light switch

header.textContent = 'Hello from JS'
}

function deletePotato (event) {
  // event.target is where the click happend
  console.log('you want to get rid of one?', event.target);
  event.target.remove();
}

function setUnicornFree (event) {
  console.log('BE FREE', event.target);
  event.target.remove();
}

function onPotatoClick() {
  console.log('you clicked potato');
  let potatoFarm = document.getElementById('potatoFarm');
  console.log(potatoFarm);
  potatoFarm.innerHTML += `<p onclick="deletePotato(event)">🥔</p>`;
}

function onUnicornClick() {
  console.log('you clicked unicorn');
  let unicornPasture = document.getElementById('unicornPasture');
  console.log(unicornPasture);
  unicornPasture.innerHTML += `<p onclick="setUnicornFree(event)">🦄</p>`;
}



// Will call onReady() when the page loads.
onReady()