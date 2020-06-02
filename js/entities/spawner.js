///////////////spawner///////////////////
class spawner extends yentity {
  constructor(x2, y2, g) {
    super(x2, y2, g);
    this.speed = 4;
    this.type = "spawner";
    this.spawnTimer = new ytimer(60);
    this.grafic_type = "none";
  } //end constructor

  update() {
    var t = this;
    super.update();
    t.spawn();
  } //end update

  spawn() {
    var t = this;
    var w = t.world;

    if (t.spawnTimer.finished()) {
      var e = new enemy(this.x, this.y);
      t.world.add(e);
    }
  }
} //end class
///////////////end spawner///////////////////
