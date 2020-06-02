class game_world extends world {
  constructor(name2, wh2) {
    super(name2);
    this.wh = wh2;
  }

  init() {
    super.init();
    var t = this;
    allSprites.clear();
    t.entitys = [];
    var s = new sign(this.wh.w / 1.5, this.wh.h - 20, "up");
    var s2 = new sign(this.wh.w / 1.5, this.wh.h - 130, "left");
    var s3 = new sign(this.wh.w / 2 - 20, this.wh.h - 130, "up");
    var s4 = new sign(this.wh.w / 2 - 20, this.wh.h - 360, "left");
    var sp = new spawner(this.wh.w / 1.5, this.wh.h + 20);
    var tower2 = new tower(300, 60);
    // var b = new bullet(0, 0, e);
    t.add(s);
    t.add(s2);
    t.add(s3);
    t.add(s4);
    t.add(sp);
    t.add(tower2);
    // t.add(b);
  }

  update() {
    super.update();
    var t = this;
  }
}
