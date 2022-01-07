
var cavnas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
ball_y=400;
ball_x=800;


block_image_width = 5;
block_image_height = 5;

window.addEventListener("keydown", my_keydown);

function load_img(){
fabric.Image.fromURL("golf-h.png", function(Img){
hole_obj = Img;
hole_obj.scaleToWidth(50);
hole_obj.scaleToWidth(50);
hole_obj.set({
	top:hole_y
	left:hole_x
});
canvas.add(hole.obj);
});
	new_image();
}

function new_image()
{
		fabric.Image.fromURL("ball.png", function (Img){
			ball_obj = Img;
			ball_obj.scaleToWidth(50);
			ball_obj.scaleToHeight(50);
			ball_obj.set({
				top:ball_y
				left:ball_x
			});
		});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */


if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball.obj);
	document.getElementById("hd3").innerHTML="You Hit a Goal!!";
	document.getElementById("Canvas").style.borderColor="red";
}

	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y <=38)
		{
			ball_y = ball_y + block_image-height;
		console.log("block image height =" + block_image_height);
		console.log("When Up Arrow is pressed, X = " + ball_x + "Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image ()	}

	function down()
	{
if(ball_y <=450)
{
	ball_y = ball_y + block_image-height;
console.log("block image height =" + block_image_height);
console.log("When Down Arrow is pressed, X = " + ball_x + "Y = " + ball_y);
canvas.remove(ball_obj);
new_image ()
}

}

	function left()
	{
		if(ball_y <=37)
{
	ball_y = ball_y + block_image-height;
console.log("block image height =" + block_image_height);
console.log("When Left Arrow is pressed, X = " + ball_x + "Y = " + ball_y);
canvas.remove(ball_obj);
new_image ()
	}

	function right()
	{
		if(ball_x <=1050)
		{
			if(ball_y <=39)
			{
				ball_y = ball_y + block_image-height;
			console.log("block image height =" + block_image_height);
			console.log("When Right Arrow is pressed, X = " + ball_x + "Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image ()		}
	}
	
}

