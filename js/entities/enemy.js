class enemy extends yentity {
  constructor(x2, y2, id) {
    super(x2, y2);
    this.behavior = "normal";
    this.grafic_type = "none";
    this.dir = "up";
    this.speed = 1.75;
    this.enemy_type = "ground";
    this.type = "enemy";
    this.hp = 3;
  }
  update() {
    super.update();
    var t = this;
    t.move();
    t.reflect();
    t.collideBullet();
  }
  move() {
    if (this.behavior == "normal") {
      if (this.dir == "left") {
        this.move_by(-this.speed, 0);
      }
      if (this.dir == "right") {
        this.move_by(this.speed, 0);
      }
      if (this.dir == "up") {
        this.move_by(0, -this.speed);
      }
      if (this.dir == "down") {
        this.move_by(0, this.speed);
      }
    }
  } //end move()
  reflect() {
    var s = this.hit_test("sign", 0, 0);
    if (s) {
      this.dir = s.dir;
    }
  }
  lose_hp(dmg) {
    var t = this;
    t.hp -= dmg;
    if (t.hp <= 0) {
      t.world.remove(this);
    }
  } //end lose hp
  collideBullet() {
    var t = this;
    var b = t.hit_test("bullet", 0, 0);
    if (b) {
      t.lose_hp(b.dmg);
      t.world.remove(b);
    }
  }
}
