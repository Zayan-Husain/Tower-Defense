var yscreen = { w: 640, h: 480 };
//init engine
var yeng = new yengine();

var tste, tste2;
var current_world;
var twoers_s;

function setup() {
  createCanvas(yscreen.w, yscreen.h);
  frameRate(60);
  
  	var tframes = yeng.create_sprite_frames("normal",59,52,
	[0,0
	,1,0
	,2,0
	,3,0
	,4,0
	,5,0
	,6,0
	,7,0]);
  twoers_s = loadSpriteSheet("img/turet_smap.png",tframes);

  //create worlds
  var ygame_world = new game_world("game_world", yscreen);
  yeng.add_world(ygame_world);

  //set current world
  yeng.set_c_world("game_world");
}

function draw() {
  //clear screen
  background(0); //blak bg
  drawSprites(); //p5.play render

  //update render current world
  current_world = yeng.get_c_world();
  current_world.update();
  current_world.render();
}
