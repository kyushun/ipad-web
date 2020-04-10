export default class Point {
  constructor(public x: number, public y: number) {}

  getDistance(dest: Point) {
    return Math.sqrt((dest.x - this.x) ** 2 + (dest.y - this.y) ** 2);
  }

  getCloserPoint(points: Point[]) {
    let closer = points[0];
    for (let i = 0; i < points.length; i++) {
      if (this.getDistance(points[i]) < this.getDistance(closer))
        closer = points[i];
    }
    return closer;
  }

  move(x: number, y: number) {
    this.x += x;
    this.y += y;
    return this;
  }
}
