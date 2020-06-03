///////////////sign///////////////////
class sign extends yentity {
  constructor(x2, y2, dir2) {
    super(x2, y2);
    this.speed = 4;
    this.type = "sign";
    this.dir = dir2;
    this.grafic_type = "none";
  } //end constructor
  init() {
    super.init();
    // this.sprite.visible = false;
  }
  update() {
    var t = this;
    super.update();
  } //end update
} //end class
///////////////end sign///////////////////
