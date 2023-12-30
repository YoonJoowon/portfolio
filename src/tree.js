// tree.js

import { Branch } from "./branch";

class Tree {
  constructor(ctx, posX, posY) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.branches = [];
    this.depth = 11;

    this.cntDepth = 0; // depth별로 그리기 위해 현재 depth 변수 선언
    this.animation = null; // 현재 동작하는 애니메이션

    this.init();
  }

  init() {
    // depth별로 가지를 저장하기 위해 branches에 depth만큼 빈배열 추가
    for (let i = 0; i < this.depth; i++) {
      this.branches.push([]);
    }

    this.createBranch(this.posX, this.posY, -90, 0);
    this.draw();
  }

  createBranch(startX, startY, angle, depth) {
    if (depth === this.depth) return;

    const len = depth === 0 ? this.random(10, 13) : this.random(0, 11);

    const endX = startX + this.cos(angle) * len * (this.depth - depth);
    const endY = startY + this.sin(angle) * len * (this.depth - depth);

    // depth에 해당하는 위치의 배열에 가지를 추가
    this.branches[depth].push(
      new Branch(startX, startY, endX, endY, this.depth - depth)
    );

    this.createBranch(endX, endY, angle - this.random(15, 23), depth + 1);
    this.createBranch(endX, endY, angle + this.random(15, 23), depth + 1);
  }

  draw() {
    // 다 그렸으면 requestAnimationFrame을 중단해 메모리 누수가 없게 함.
    if (this.cntDepth === this.depth) {
      cancelAnimationFrame(this.animation);
      return;
    }

    // depth별로 가지를 그리기
    for (let i = this.cntDepth; i < this.branches.length; i++) {
      for (let j = 0; j < this.branches[i].length; j++) {
        const branchDrawn = this.branches[i][j].draw(this.ctx);

        if (branchDrawn) {
          console.log(`Branch drawn: depth ${i}, index ${j}`);
        }
      }
    }

    this.cntDepth++;
    this.animation = requestAnimationFrame(() => this.draw());
  }

  // 이 메서드가 어디에 있는지 알 수 없으므로 추가해야 합니다.
  random(min, max) {
    return Math.random() * (max - min) + min;
  }

  // 이 메서드도 어디에 있는지 알 수 없으므로 추가해야 합니다.
  cos(angle) {
    return Math.cos((angle * Math.PI) / 180);
  }

  // 이 메서드도 어디에 있는지 알 수 없으므로 추가해야 합니다.
  sin(angle) {
    return Math.sin((angle * Math.PI) / 180);
  }
}

export default Tree;
