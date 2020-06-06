///////////////tower///////////////////
class tower extends yentity {
  constructor(x2, y2) {
    super(x2, y2, twoers_s);//twoers_s is in script.js
    this.speed = 0;
    this.type = "tower";
    this.grafic_type = "sprite";
    this.tframe = 0;
    this.is_active = false;
    this.show_range = false;

    this.w = 35;
    this.h = 35;
    this.hitbw = 35; //hitbox width
    this.hitbh = 35;

    //tower stats
    this.fire_rate = 20;
    this.shoot_timer = new ytimer(this.fire_rate);
    this.dmg = 1;
    this.dmg_type = "confuse";
    this.target_type = "ground";
    this.range = 0;
    this.name;
    this.upgrades;
    this.tooltip2 = new Tooltip(this.x + 50, this.y, 100, 100);

    // this.debug = true;
  } //end constructor
  init() {
    super.init();
    this.world.add(this.tooltip2);
    this.buy_tower_btns()
  }
  update() {
    super.update();
    var t = this;
    t.build_tower();
    t.shot_enemy();
    t.on_click();
    this.buy_towers_click()
  } //end update

  buy_tower_btns() {
    var tt = this.tooltip2;
    var ph = loadImage("img/ph.jpg");
    tt.normal_tower = tt.add_btn(0, -30, 10, 10, ph);

    tt.ice_tower = tt.add_btn(0, 0, 10, 10, ph);
    tt.poison_tower = tt.add_btn(0, 30, 10, 10, ph);
    tt.hide();
  }
  do_buy(name) {
    var tt = this.tooltip2;
    var w = tt.world;
    w.buy_tower(this, name);
    tt.hide();
    tt.remove_children();
  }
  buy_towers_click() {
    var tt = this.tooltip2;
    var w = tt.world;
    if (tt.normal_tower.clicked(2)) {
      this.do_buy("normal");

    }
    if (tt.ice_tower.clicked(2)) {
      this.do_buy("ice");
    }
    if (tt.poison_tower.clicked(2)) {
      this.do_buy("poison");
    }

  }

  render() {
    super.render();
    var t = this;

    //change turret img
    t.sprite.animation.changeFrame(t.tframe);
    t.sprite.animation.stop();


    //if not active
    if (!this.is_active) {
      fill(255, 255, 102);
      ellipse(t.x, t.y, 25, 25);
      this.sprite.visible = false;
    }

    if (t.show_range && t.is_active) {
      //draw ellipse
      fill(255, 255, 102, 127);
      ellipse(t.x, t.y, t.range, t.range);
    }
  } //end render

  set_stats(data) {
    this.name = data[0];
    this.range = data[1];
    this.dmg = data[2];
    this.fire_rate = data[3];
    this.cost = data[4];
    this.dmg_type = data[5];
    this.target_type = data[6];
    this.upgrades = data[7];
    this.tframe = data[8];
    this.shoot_timer = new ytimer(this.fire_rate);
  } //end set_stats

  build_tower() {
    var t = this;
    if (t.clicked(2) && !this.is_active) {
      t.is_active = true;
      this.sprite.visible = true;
      //show buy tower popup
      this.tooltip2.show();
    }
  } //end build_tower
  on_click() {
    var t = this;
    //hover for range
    if (t.clicked(3) && t.is_active) {
      t.show_range = true;
    } else {
      t.show_range = false;
    }
    //click to show tooltip
    if (t.clicked(2) && t.is_active) {
      this.tooltip2.show();
    }


  } //end on_click

  shot_enemy() {
    var t = this;
    if (!this.is_active) {
      return;
    }
    var diste; // distance between tower and enemy
    var e; //enemy
    //get all enemies
    var enemies = this.get_by_type("enemy");
    var b; //bullet
    //loop them
    for (let i = 0; i <= enemies.length - 1; i++) {
      e = enemies[i];
      //check distance between tower and enemy
      diste = this.distanse(e);
      //if distance is less then range and shot timer finished
      if (diste < t.range && t.shoot_timer.finished() &&
        (this.target_type == e.enemy_type || this.target_type == "both")) {
        //create a bullet targeting the enemy
        b = new bullet(t.x, t.y, e);
        b.dmg_type = this.dmg_type;
        t.world.add(b);
      }
    }
  } //end shot_enemy
} //end class
///////////////end tower///////////////////
