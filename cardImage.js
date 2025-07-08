const cards = document.querySelectorAll('.card-image');

let colors = ["#ff8267", "#cb97ff", "#fefa8b", "#8dfe8b", "#8bfed9", "#8bb8fe"];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(colors);

cards.forEach((card, index) => {
    if (index < colors.length) {
        card.style.backgroundColor = colors[index];
    } else {
        card.style.backgroundColor = colors[index % colors.length];
    }
});
