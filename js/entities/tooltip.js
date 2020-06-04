class Tooltip extends yentity {
  constructor(x2, y2, w2, h2) {
    super(x2, y2);
    this.w = w2;
    this.h = h2;
    this.children = [];
    this.is_active = false;
    this.grafic_type = "none";
  }
  update() {
    super.update();
    if (!this.is_active) {
      return;
    }
  }
  render() {
    super.render();
    if (!this.is_active) {
      this.sprite.visible = false;
    } else {
      this.sprite.visible = true;
    }
  }
}
