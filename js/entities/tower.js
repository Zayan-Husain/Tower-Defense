///////////////tower///////////////////
class tower extends yentity {
  constructor(x2, y2, g) {
    super(x2, y2, g);
    this.speed = 0;
    this.type = "tower";
    this.grafic_type = "none";
    this.is_active = true;
    this.show_range = false;
    //tower stats
    this.fire_rate = 20;
    this.shoot_timer = new ytimer(this.fire_rate);
    this.dmg = 1;
    this.dmg_type = "confuse";
    this.target_type = "ground";
    this.range = 250;
    this.w = 35;
    this.h = 35;
    this.hitbw = 35; //hitbox width
    this.hitbh = 35;
    this.debug = true;
  } //end constructor

  update() {
    super.update();
    var t = this;
    t.shot_enemy();
    t.on_click();
  } //end update

  render() {
    super.render();
    var t = this;

    if (t.show_range) {
      //draw ellipse
      fill(255, 255, 102, 127);
      ellipse(t.x, t.y, t.range, t.range);
    }
  } //end render

  on_click() {
    var t = this;
    if (t.clicked(2)) {
      //toggle show range on click
      t.show_range = !t.show_range;
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
      if (diste < t.range && t.shoot_timer.finished() && this.target_type == e.enemy_type) {
        //create a bullet targeting the enemy
        b = new bullet(t.x, t.y, e);
        b.dmg_type = this.dmg_type;
        t.world.add(b);
      }
    }
  }
} //end class
///////////////end tower///////////////////
