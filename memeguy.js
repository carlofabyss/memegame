class memeGuy {
  constructor(inputradius) {
    this.r = inputradius;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2.9;
    this.jumpmode = -1;
  }

  jump() {
    this.jumpmode *= -1;
    if(this.jumpmode == 1) {
      this.gravity = 2.9;
    } else if(this.jumpmode == -1) {
      this.gravity = 1.8;
    }

    if (this.y == height - this.r) {
      this.vy = -35;
    }
  }

  hits(enemy) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = enemy.x + enemy.r * 0.5;
    let y2 = enemy.y + enemy.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, enemy.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    if(gamemode == 0) {
      image(classicplayer_img, this.x, this.y, this.r, this.r);
    } else if(gamemode == 1) {
      image(mgImg, this.x, this.y, this.r, this.r);
    }

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
