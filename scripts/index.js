


var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

canvas.addEventListener("click", () => {
    var game_el = document.getElementById("game");
    if(game_el.requestFullscreen) {
        game_el.requestFullscreen();
    }
    else if(game_el.webkitRequestFullScreen) {
        game_el.webkitRequestFullScreen();
    }
   else if (game_el.mozRequestFullScreen) {
        game_el.mozRequestFullScreen();
   } else if (game_el.msRequestFullscreen) {
        game_el.msRequestFullscreen();
   }
});

/*
********************IMPORTANT**********************************
    Main game code goes here
    Download the live server extention in vscode or any alternative self hosting
    We will be coding in OOP, pls keep it to one object per file. (should be good practice for your cs lessons)
        

***************Side notes ****************************
    When creating a new .js file, add it to the index.html scripts section
    Try and use snake case not camel case.
    I am afraid we will have to comment the code
    If you can not see the changes you created, you may need to press f5 to reload the page cache

*/