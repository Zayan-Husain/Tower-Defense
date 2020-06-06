//turets[]=[name,range,dmg,delay,cost,type,target,upgrades,sprite_frame];

turets = [
  ["test", 200, 1, 20, 0, "normal", "ground", ["test1", "test2"], 0],
  ["test1", 500, 3, 20, 0, "normal", "both", ["none"], 0],
  ["test2", 200, 9, 20, 0, "normal", "ground", ["none"], 0],
  ["normal", 100, 3, 20, 100, "normal", "both", ["test1", "test2"], 4],
  ["ice", 100, 1, 20, 100, "ice", "both", ["test1", "test2"], 6],
  ["poison", 100, 1, 20, 100, "poison", "both", ["test1", "test2"], 1],
];
