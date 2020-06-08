class game_world extends world {
  constructor(name2, wh2) {
    super(name2);
    this.wh = wh2;
    this.p = new player();
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
    var tower3 = new tower(370, 260);
    var tower4 = new tower(480, 420);
    // tower4.set_stats(turets[0]);
    // var b = new bullet(0, 0, e);
    t.add(s);
    t.add(this.p);
    t.add(s2);
    t.add(s3);
    t.add(s4);
    t.add(sp);
    t.add(tower2);
    t.add(tower3);
    t.add(tower4);
    // t.add(b);
  }

  buy_tower(tower, type) {
    var data = this.select_tower_by_name(type)
    if (this.p.credits >= data[4]) {
      tower.set_stats(data);
      this.p.credits -= data[4];
      return true;
    }
    return false;
  }
  select_tower_by_name(name) {
    for (let i = 0; i < turets.length; i++) {
      if (turets[i][0] == name) {
        return turets[i];
      }
    }
  }

  ui() {
    camera.off();
    this.ytext(50, 22, "credits: " + this.p.credits);

    camera.on();
  }//end ui

  update() {
    super.update();
    var t = this;
  }

  render() {
    super.render();
    var t = this;
    t.ui();
  }//end render


}
