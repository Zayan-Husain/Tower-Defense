///////////////bullet///////////////////
class bullet extends yentity {
  constructor(x2, y2, targ2) {
    super(x2, y2);
    this.speed = 15;
    this.type = "bullet";
    this.grafic_type = "none";
    this.dmg = 1;
    this.dmg_type = "normal";
    this.movement_type = "normal";
    this.targ = targ2;
    this.life_timer = new ytimer(70);
    this.set_wh(6, 6);
    this.sethb_wh(6, 6);
  } //end constructor

  update() {
    var t = this;
    super.update();
    t.move();
  } //end update

  render() {
    super.render();
    var t = this;
    this.sprite.draw = function () {
      fill(color(255, 255, 255));
      ellipse(0, 0, t.w, t.h);
    }; //end draw
  }

  move() {
    var t = this;
    t.move_to(t.targ);
    //outside of screen
    if (t.x < 0 || t.x > t.world.wh.w || t.y < 0 || t.y > t.world.wh.h || t.life_timer.finished() || !t.targ) {
      t.world.remove(this);
    }
  } //end move
} //end class
///////////////end bullet///////////////////
