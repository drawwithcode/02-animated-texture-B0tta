var colors1 = ["#2B2D42", "#92DCE5", "#F8F7F9", "#F7EC59", "#FF66D8"];
var colors2 = ["#466365", "#B49A67", "#CEB3AB", "#C4C6E7", "#BAA5FF"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //noLoop();
  frameRate(1);
}

function draw() {
  pattern();
  textSize(64);

  fill(0, 0, 0);
  textAlign(CENTER);
  text("Move up and down", width / 2 - 40, height / 2 - 40);
}

function pattern() {
  for (var x = 0; x < width; x += 100) {
    for (var y = 0; y < height; y += 100) {
      var index = floor(random() * 5);
      if (mouseY > height / 2) {
        fill(colors1[index]);
      } else {
        fill(colors2[index]);
      }
      triangle(x, y, x, y + 100, x + 50, y + 50);

      var index = floor(random() * 5);
      if (mouseY > height / 2) {
        fill(colors1[index]);
      } else {
        fill(colors2[index]);
      }
      triangle(x, y, x + 100, y, x + 50, y + 50);

      var index = floor(random() * 5);
      if (mouseY > height / 2) {
        fill(colors1[index]);
      } else {
        fill(colors2[index]);
      }
      triangle(x + 100, y, x + 100, y + 100, x + 50, y + 50);

      var index = floor(random() * 5);
      if (mouseY > height / 2) {
        fill(colors1[index]);
      } else {
        fill(colors2[index]);
      }
      triangle(x, y + 100, x + 100, y + 100, x + 50, y + 50);
    }
  }
}
