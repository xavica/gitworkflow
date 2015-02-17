var colors = ["red", "blue", "yellow", "green", "orange", "black", "cyan", "magenta"]

function changeColor() {
    var col = document.getElementById("changecolor");
    col.style.backgroundColor = colors[Math.floor((Math.random()*8)+1)];
}