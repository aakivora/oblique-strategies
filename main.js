const card = document.querySelector('.card__inner');

const input = document.querySelector('.input');

const footer = document.querySelector('footer a');

const head = document.querySelector('.head');

const strategies = [

"It is meant to be fun",
"Accept advice",
"Trust in the you of now",
"Take a shower",
"Take a break",
"Consider the opposite",
"Take some deep breaths",
"The peace you are looking for is in the work you are avoiding",
"Are you negotiating with yourself?",
"Listen to your favourite song",
"There is no path",
"Ask for feedback", 
"Stop focusing on the outcome",
"Trust the process",
"Zoom in and obsess",
"Zoom out and reflect",
"Honour thy error as a hidden intention",
"Less, but better",
"Brevity is the essence of wit",
"One thing at a time",
"Repitition is a form of change",
"What would your closest friend do?",
"What are you over emphasizing right now?",
"Impatience is an argument with reality",
"Can this scale?",
"Take away the elements in order of apparent non-importance",
"Ask your body",
"It will never be perfect",
"Draw",
"If we live in a mindset of scarcity, we hoard great ideas",
"What assumptions are you making?",
"Anything is figureoutable",
"Take a long shot",
"Read the pale blue dot",
"Play a few rounds of Conway's Game of Life",
"Write how you feel",
"Good design is as little design as possible",
"How can it be better?",
"How can you gain momentum?",
]

//test font size

// const strategies = ["Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)"]

let lastStrat = ""; // Variable to store the last displayed strategy

const randomStrat = () => {
  let strat = "";
  // Keep selecting until we get a strategy that's different from the last one
  while (!strat || strat === lastStrat) {
    strat = strategies[Math.floor(Math.random() * strategies.length)];
  }
  input.innerText = strat;
  lastStrat = strat; // Store the current strategy as the last one
}

card.addEventListener("click", (e) => {
  card.classList.toggle('is-flipped');
  input.classList.toggle('hide');
  randomStrat();
});

/*setTimeout(function(){
    footer.style.color = "#FDFBF3";
}, 3000)*/

footer.addEventListener('mouseover', () => {
    footer.style.color = 'black';
})

footer.addEventListener('mouseout', () => {
    footer.style.color = '#FDFBF3';
})


setInterval(function(){
    head.style.opacity -= 0.1;
}, 3000);

