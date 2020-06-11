class tower_tooltip extends Tooltip 
{
	/*
		tt = this tooltip
		t = the parent tower
	*/
	
	constructor(x2, y2, w2, h2,yparent2) {
		super(x2, y2, w2, h2);
		this.yparent = yparent2;
		this.phase = "buy";
	}//end constructor
	
  init() {
    super.init();
    this.buy_tower_btns()
  }//end init
	
  update() {
    super.update();
    var t = this;
    this.buy_towers_click()
  } //end update
	
  /**
	name: buy_tower_btns
	description:
	creates the bu buttons when the tower is clicked for the first time
	it also hides the tooltip at the start.
	input:none
	output:none
  */	
  buy_tower_btns() {
    var tt = this;
    var ph = loadImage("img/ph.jpg");
	//create 3 btns
    tt.normal_tower = tt.add_btn(0, -30, 10, 10, ph);
    tt.ice_tower = tt.add_btn(0, 0, 10, 10, ph);
    tt.poison_tower = tt.add_btn(0, 30, 10, 10, ph);
    //hide the tooltip
	tt.hide();
  }//end buy_tower_btns
  
    /**
	name: do_buy
	description:
	does the buy action once a buy btn is clicked
	input:none
	output:none
  */	
  do_buy(name) {
    var tt = this;
    var w = tt.world;
	//try to buy the tower
    if (w.buy_tower(this.yparent, name)) {
      tt.remove_children();//remove buy btns
      this.tower_stats();//show tower stats
      this.phase = "stats";//change state (also disables buy btns)
    } else {
      return;//failed to buy (not enough credits)
    }

    tt.hide();
  }//end do_buy
  
  
  /**
	name: buy_towers_click
	description:
	handales the click event for each buy btn
	input:none
	output:none
  */
  buy_towers_click() {
    if (this.phase !== "buy") {
      return;
    }
    var tt = this;
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

  }//end buy_towers_click

  /**
	name: tower_stats
	description:
	creates the text that showes the tower stats
	input:none
	output:none
  */
  tower_stats() {
    var t = this.yparent;
    var tt = this;

    tt.name_txt = tt.add_btn(0, -20, 10, 10);
    tt.name_txt.sprite.draw = tt.draw_txt(t.name, 0, 0);
    tt.dmg_txt = tt.add_btn(0, 0, 10, 10);
    tt.dmg_txt.sprite.draw = tt.draw_txt("Damage: " + t.dmg, 0, 0);
    // tt.name_txt.sprite.draw = t.draw_txt(t.name, 0, 0);
    //
  } //end tower_stat
  
  
  
  /**
	name: draw_txt
	description:
	a helper functionfor drawin text
	input:
	- txt :the text to display
	- x,y : the xy position of the text on the screen
	output:none
  */
  draw_txt(txt, x, y) {
    return () => {
      fill(255);
      textAlign(CENTER);
      text(txt, x, y);
    };
  }//end draw_txt
	
	
	
	
}