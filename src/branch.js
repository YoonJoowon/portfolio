// branch.js

export class Branch {
  constructor(startX, startY, endX, endY, depth) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.depth = depth;

    this.gapX = (endX - startX) / this.frame;
    this.gapY = (endY - startY) / this.frame;

    this.currentX = startX;
    this.currentY = startY;

    this.cntFrame = 0;
    this.frame = 30;

    this.lineWidth = 2;
    this.color = "white"; // 흰색으로 변경
  }

  draw(ctx) {
    // 가지를 다 그리면 true 리턴
    if (this.cntFrame === this.frame) return true;

    ctx.beginPath();

    this.currentX += this.gapX;
    this.currentY += this.gapY;

    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.currentX, this.currentY);

    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;

    ctx.stroke();
    ctx.closePath();

    this.cntFrame++;

    // 다 안그렸으면 false를 리턴
    return false;
  }
}
