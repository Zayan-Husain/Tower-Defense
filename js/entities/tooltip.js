class Tooltip extends yentity {
  constructor(x2, y2, w2, h2) {
    super(x2, y2);
    this.w = w2;
    this.h = h2;
    this.children = [];
    this.is_active = false;
    this.grafic_type = "none";
    this.name = "tooltip";

    this.xbtn;
  }

  init() {
    super.init();
    var t = this;
    t.xbtn = t.add_btn(this.w / 2 - 5, -(this.h / 2) + 8, 5, 5);
    t.xbtn.sprite.draw = () => {
      fill(255, 0, 0);
      textAlign(CENTER);
      text("x", 0, 0);
    }
    t.zi = 998;
    t.hide();
  }
  update() {
    super.update();
    if (!this.is_active) {
      return;
    }
    var t = this;
    t.click_x();
    //t.update_children()

  }

  update_children() {
    var t = this;

    var e;
    for (var i in t.children) {
      e = t.children[i];
      //e.sx(t.x+e.x);
      //e.sy(t.y+e.y);
    }
  }//end update_children

  remove_children() {
    var t = this;

    var e;
    for (var i in t.children) {
      e = t.children[i];
      t.world.remove(e);
    }
  }

  hide() {
    var t = this;

    var e;
    for (var i in t.children) {
      e = t.children[i];
      //hide child
      e.sprite.visible = false;

    }
    //hide tooltip
    t.sprite.visible = false;
    //disable tooltip
    t.is_active = false;
  }//end hide

  show() {
    var t = this;

    var e;
    for (var i in t.children) {
      e = t.children[i];
      //show child
      e.sprite.visible = true;

    }
    //show tooltip
    t.sprite.visible = true;

    t.is_active = true;

  }//end show


  render() {
    super.render();
  }

  click_x() {
    var t = this;
    if (!t.xbtn) { return; }

    if (t.xbtn.clicked(2)) {
      t.hide();
    }

  }//end click_x

  add_btn(x, y, w, h) {
    var t = this;
    //entity to add
    var e = new yentity(x, y);
    //add it to children
    t.children[t.children.length] = e;
    e.grafic_type = "none";
    e.type = t.name;//for easy manipulation
    t.world.add(e);
    //pos reltive to parent
    e.sx(t.x + e.x);
    e.sy(t.y + e.y);
    e.zi = 999;
    return e;

  }//end add_btn
}
