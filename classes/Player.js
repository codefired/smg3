class Player {
  constructor(x, y, spriteobj) {
    this.x = x;
    this.y = y;
    this.sprite = spriteobj;
    this.sprite.x = this.x;
    this.sprite.y = this.y;
  }
}

export {Player};