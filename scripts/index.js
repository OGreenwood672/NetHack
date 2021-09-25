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

var ctx;
var map = [];

const w = 10;
const h = 10;
let w_scale, h_scale;


function create() {

    var canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");

    w_scale = canvas.width / w;
    h_scale = canvas.height / h;

    createMap();


}

function render(time) {


    drawMap();

    requestAnimationFrame(render);


}

function drawMap() {


    for (x=0; x<w; x++) {

        for (y=0; y<h; y++) {

            let colour = map[x][y].getColour();

            ctx.strokeStyle = colour;
            ctx.fillStyle = colour;

            ctx.fillRect(w_scale * x, h_scale * y, w_scale, h_scale);

        }

    }

}

function createMap() {

    for (x=0; x<w; x++) {

        var col = [];

        for (y=0; y<h; y++) {

            col.push(new Block(x, y));

        }

        map.push(col);

    }

}

create();
requestAnimationFrame(render);