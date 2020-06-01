///////////////explosion///////////////////
class explosion extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 4;
	  this.type = "explosion";
  }//end constructor
  
  update()
  {
	var t = this;
	super.update();
  }//end update
  
  
}//end class
///////////////end explosion///////////////////