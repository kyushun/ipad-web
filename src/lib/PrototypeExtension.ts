import Point from "./Point";

declare global {
  interface Element {
    getCenterPoint(): Point;
    getPosition(): Point;
  }
  interface Math {
    getIntersectionsOfCircleWithLine(
      pointA: Point,
      pointB: Point,
      circle: Point,
      radius: number
    ): Point[];
  }
}

Element.prototype.getPosition = function() {
  const rect = this.getBoundingClientRect();
  return new Point(
    rect.left + window.pageXOffset,
    rect.top + window.pageYOffset
  );
};

Element.prototype.getCenterPoint = function() {
  const pos = this.getPosition();
  pos.move(this.clientWidth / 2, this.clientHeight / 2);
  return pos;
};

Math.getIntersectionsOfCircleWithLine = function(
  pointA: Point,
  pointB: Point,
  circle: Point,
  radius: number
) {
  const a = pointB.y - pointA.y;
  const b = pointA.x - pointB.x;
  const c = -(a * pointA.x + b * pointA.y);

  const l = Math.sqrt((pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2);
  const eX = (pointB.x - pointA.x) / l;
  const eY = (pointB.y - pointA.y) / l;
  const vX = -eY;
  const vY = eX;
  const k = -(a * circle.x + b * circle.y + c) / (a * vX + b * vY);
  const pX = circle.x + k * vX;
  const pY = circle.y + k * vY;

  if (radius < k) {
    return [];
  } else {
    const S = Math.sqrt(radius ** 2 - k ** 2);
    return [
      new Point(pX + S * eX, pY + S * eY),
      new Point(pX - S * eX, pY - S * eY)
    ];
  }
};
