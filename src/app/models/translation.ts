import { WordModel } from './word';
import { ArrayHelper } from '../helpers/array';
import { StringHelper } from '../helpers/string';

export class TranslationModel {
  word: WordModel;
  fromLn: string;
  toLn: string;
  fromWord: string;
  toWords: Array<string>;

  constructor (word: WordModel, fromLn: string, toLn: string) {
    this.word = word;
    this.fromLn = fromLn;
    this.toLn = toLn;
    this.fromWord = ArrayHelper.getRandomElement(this.word[this.fromLn]);
    this.toWords = this.word[this.toLn];
  }
  test (value: string): number {
    let mistakesMin = Infinity;
    let similarityWord = '';
    value = StringHelper.removeAccents(value.toLowerCase());

    this.toWords.map(word => {
      const mistakesCount = StringHelper.levenshteinenator(value, StringHelper.removeAccents(word.toLowerCase()));

      if (mistakesCount < mistakesMin) {
        mistakesMin = mistakesCount;
        similarityWord = word;
      }
    });
    return Math.ceil((Math.max(0, similarityWord.length - mistakesMin) * 10 / similarityWord.length));
  }
}
