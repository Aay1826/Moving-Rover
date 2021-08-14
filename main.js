canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=75;
rover_height=75;
rover_x=10;
rover_y=20;

//arraymarsimg
mars_background=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
var randomnum=Math.floor(Math.random()*5);

canvas_background=mars_background[randomnum];
rover_img="rover.png";

function add(){
    img_1=new Image();
    img_1.onload=upload_background();
img_1.src=canvas_background;

img2=new Image();
img2.onload=uploadrover();
img2.src=rover_img;
}
function upload_background(){
    ctx.drawImage(img_1,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(img2,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",key_down);

function key_down(e){
    var keypress=e.keyCode;
    console.log(keypress);
    //left
    if (keypress=='37') {
    rover_left();
    }
    //up
    if (keypress=='38') {
        rover_up();
        }
        //right
        if (keypress=='39') {
            rover_right();
            }
            //down
            if (keypress=='40') {
                rover_down();
                }
}
function rover_left(){
    if (rover_x>=0) {
        rover_x=rover_x-10;
upload_background();
uploadrover();
    }
}
function rover_up(){
    if (rover_y>=0) {
        rover_y=rover_y-10;
upload_background();
uploadrover();
    }
}
function rover_right(){
    if (rover_x<=700) {
        rover_x=rover_x+10;
upload_background();
uploadrover();
    }
}
function rover_down(){
    if (rover_y<=500) {
        rover_y=rover_y+10;
upload_background();
uploadrover();}
    }