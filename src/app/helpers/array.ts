import { NumberHelper } from './number';

export class ArrayHelper {
  /**
   * Return a random element in array
   * @param array
   * @returns {any}
   */
  static getRandomElement(array: Array<any>): any {
    const index = NumberHelper.getRandomInt(0, array.length - 1);
    return array[index];
  }
}
