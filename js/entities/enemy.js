class enemy extends yentity {
  constructor(x2, y2, id) {
    super(x2, y2);
    this.behavior = "normal";
    this.grafic_type = "none";
    this.dir = "up";
    this.freeze1 = new ytimer(40);
    this.poison1 = new ytimer(100);
    this.poison_dmg = new ytimer(20);
    this.start_poison = false;
    this.start_freeze = false;

    this.type = "enemy";
    //stats
    this.hp = 10;
    this.name = "";
    this.enemy_type = "ground";
    this.speed = 3;
    this.original_speed = this.speed;
  }
  update() {
    super.update();
    var t = this;
    t.move();
    t.reflect();
    t.collideBullet();
    t.effect();
  }
  effect() {
    if (this.start_freeze) {
      this.speed = this.original_speed / 2;
      if (this.freeze1.finished()) {
        this.start_freeze = false;
        this.speed = this.original_speed;
      }
    }
    if (this.start_poison) {
      if (this.poison_dmg.finished()) {
        this.lose_hp(5);
       // console.log(this.hp);
      }
      if (this.poison1.finished()) {
        this.start_poison = false;
      }
    }
  } // end effect
  set_stats(stats) {
    this.name = stats[0]
    this.hp = stats[1];
    this.speed = stats[2];
    this.enemy_type = stats[3];
    this.original_speed = this.speed;
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
		// console.log(b.dmg_type)
      if (b.dmg_type == "freeze") {
       
        this.start_freeze = true;
      }
      if (b.dmg_type == "poison") {
        this.start_poison = true;
      }
      if (b.dmg_type == "confuse") {
        this.oppositeDirection();
      }
      t.lose_hp(b.dmg);
      t.world.remove(b);
    }
  }
  oppositeDirection() {
    if (this.dir == "up") {
      this.dir = "down";
    } else if (this.dir == "down") {
      this.dir = "up";
    } else if (this.dir == "right") {
      this.dir = "left";
    } else if (this.dir == "left") {
      this.dir = "right";
    }
  }
}
