p1 = roll(12345);
p2 = roll(67890);
images (p1, p2);
winner();

function images(p1, p2){
    document.querySelector("img.img1").outerHTML = "<img class='img1' src='images/dice" + p1 + ".png'>"
    document.querySelector("img.img2").outerHTML = "<img class='img1' src='images/dice" + p2 + ".png'>"
}

function roll(seed) {
    return Math.floor(Math.random(seed) * 6) + 1;
}

function winner() {
    if (p1 > p2) {
        document.querySelector("h1").innerText = "Player 1 Wins!"
    }
    else if (p2 > p1) {
        document.querySelector("h1").innerText = "Player 2 Wins!"
    }
    else {
        document.querySelector("h1").innerText = "Draw"
    }
}