var canvas = new fabric.Canvas("myCanvas");
body_image_height = 30;
body_image_width = 30;
player_x = 10;
player_y = 10;
var player_object = "";
function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ 
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
    
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        body_image_object = Img;
        body_image_object.scaleToWidth(body_image_width);
        body_image_object.scaleToHeight(body_image_height);
        body_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(body_image_object);
    });
}
window.addEventListener("keydown" , my_keydown);
function my_keydown (e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("P and Shift pressed together");
        body_image_width = body_image_width + 10;
        body_image_height = body_image_height + 10;
        document.getElementById("current_width").innerHTML = body_image_width;
        document.getElementById("current_height").innerHTML = body_image_height;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("M and Shift presssed together");
        body_image_width = body_image_width - 10;
        body_image_height = body_image_height - 10;
        document.getElementById("current_width").innerHTML = body_image_width;
        document.getElementById("current_height").innerHTML = body_image_height;
    }
    if (keyPressed == '38') {
        UP();
        console.log("UP");
    }
    if (keyPressed == '40') {
        DOWN();
        console.log("DOWN");
    }
    if (keyPressed == '37') {
        LEFT();
        console.log("LEFT");
    }
    if (keyPressed == "39") {
        RIGHT();
        console.log("RIGHT");
    }
    if (keyPressed == '72') {
        new_image("ironman_face.png");
        console.log ("Head");
    }
    if (keyPressed == '76') {
        new_image("captain_america_left_hand.png");
        console.log("Left Hand");
    }
    if (keyPressed == '82') {
        new_image("thor_right_hand.png");
        console.log("Right Hand");
    }
    if (keyPressed == '66') {
        new_image("spiderman_body.png");
        console.log("Body")
    }
    if (keyPressed == '74') {
        new_image("hulk_legs.png");
        console.log("Legs");
    }
    if (keyPressed == '75') {
        REMOVE();
        console.log("Remove");
    }
}