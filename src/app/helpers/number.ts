export class NumberHelper {
  /**
   * Return a random number between min and max
   * @param min
   * @param max
   * @returns {number}
   */
  static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Return the smallest of the three numbers passed in
   * @param x
   * @param y
   * @param z
   * @returns {number}
   */
  static min(x: number, y: number, z: number): number {
    if (x <= y && x <= z) {
      return x;
    }
    if (y <= x && y <= z) {
      return y;
    }
    return z;
  }
}
