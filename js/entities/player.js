///////////////player///////////////////
class player extends yentity {
  constructor() {
    super()
    this.speed = 4;
    this.type = "player";
    this.credits = 500;
    this.score = 0;
    this.grafic_type = "none"
  }//end constructor
  init() { }
  update() {
    var t = this;
    super.update();
  }//end update


}//end class
///////////////end player///////////////////