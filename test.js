var welcome = new Title('Title!');
var rockButton = new Button('Collect Rocks', increaseRocks);
var stoneButton = new Button('Collect stones');
var rocks = 0;
var rockCount = new Text(rocks);
var section = new Section();
var section2 = new Section();


section.add(rockButton);
section.add(rockCount);

section2.add(rockButton);
section2.add(stoneButton);





function increaseRocks() {
  rocks++;
  rockCount.edit(rocks);
}