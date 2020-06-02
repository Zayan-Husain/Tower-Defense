///////////////tower///////////////////
class tower extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 0;
	  this.type = "tower";

	  this.is_active = true;
	 //tower stats
      this.fire_rate = 20;
      this.shoot_timer = new ytimer(fire_rate);
	  this.dmg = 1;
	  this.dmg_type = "normal";
	  this.target_type = "ground";
	  this.range = 300;
	  
	  
  }//end constructor
  
  update()
  {
	var t = this;
	super.update();
  }//end update
  
  shot_enemy()
  {
	  //get all enemies
	  //loop them
		//check distance between tower and enemy
		//if distance is less then range and shot timer finished
		//create a bullet targeting the enemy
  }
  
}//end class
///////////////end tower///////////////////