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
"Take some deep breaths"
"The peace you are looking for is in the work you are avoiding"
"Stop negotiating with yourself"
"Listen to your favourite song"
"You don't have to be ashamed of using your own ideas",
    ""
]

//test font size

// const strategies = ["Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)"]

const randomStrat = () => {
  const strat = strategies[Math.floor(Math.random() * strategies.length)];
  input.innerText = strat;
}

card.addEventListener("click", (e) => {
  card.classList.toggle('is-flipped');
  input.classList.toggle('hide');
  randomStrat();
});

setTimeout(function(){
    footer.style.color = "#FDFBF3";
}, 3000)

footer.addEventListener('mouseover', () => {
    footer.style.color = 'black';
})

footer.addEventListener('mouseout', () => {
    footer.style.color = '#FDFBF3';
})


setInterval(function(){
    head.style.opacity -= 0.1;
}, 3000);

