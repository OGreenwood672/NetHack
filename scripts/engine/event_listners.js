

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

// Makes game full screen when user clicks on canvas
canvas.addEventListener("click", () => {
    var game_el = document.getElementById("game");

    if (game_el.requestFullscreen) {
        game_el.requestFullscreen();
    } else if (game_el.webkitRequestFullScreen) {
        game_el.webkitRequestFullScreen();
    } else if (game_el.mozRequestFullScreen) {
        game_el.mozRequestFullScreen();
    } else if (game_el.msRequestFullscreen) {
            game_el.msRequestFullscreen();
    }
});
