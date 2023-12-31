export class Branch {
  constructor(startX, startY, endX, endY, lineWidth) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.color = "#f5f8ff";
    this.lineWidth = lineWidth;

    this.frame = 300;
    this.cntFrame = 0;

    this.gapX = (this.endX - this.startX) / this.frame;
    this.gapY = (this.endY - this.startY) / this.frame;

    this.currentX = this.startX;
    this.currentY = this.startY;
  }

  draw(ctx) {
    // 가지를 다 그리면 true 리턴
    if (this.cntFrame === this.frame) return true;

    ctx.beginPath();

    // 구간별 길이를 더해주어 다음 구간의 끝 좌표를 구함
    this.currentX += this.gapX;
    this.currentY += this.gapY;

    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.currentX, this.currentY);

    if (this.lineWidth < 3) {
      ctx.lineWidth = 0.2;
    } else if (this.lineWidth < 7) {
      ctx.lineWidth = this.lineWidth * 0.4;
    } else if (this.lineWidth < 10) {
      ctx.lineWidth = this.lineWidth * 0.8;
    } else {
      ctx.lineWidth = this.lineWidth;
    }

    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;

    ctx.stroke();
    ctx.closePath();

    this.cntFrame++; // 현재 프레임수 증가

    // 다 안그렸으면 false를 리턴
    return false;
  }
}
