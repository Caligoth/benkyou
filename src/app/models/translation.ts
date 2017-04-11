import { WordModel } from './word';
import { StringHelper } from '../helpers/string';

export class TranslationModel {
  static reEmpty = new RegExp('[!|?|\.|。]', 'gi');
  static reSpace = new RegExp('[-]', 'gi');
  word: WordModel;
  fromLn: string;
  toLn: string;
  fromWords: string;
  toWords: Array<string>;
  static clearText(str): string {
    return StringHelper
      .removeAccents(str.toLowerCase())
      .replace(TranslationModel.reEmpty, '')
      .replace(TranslationModel.reSpace, ' ')
      .trim();
  }
  constructor (word: WordModel, fromLn: string, toLn: string) {
    this.word = word;
    this.fromLn = fromLn;
    this.toLn = toLn;
    this.fromWords = this.word[this.fromLn];
    this.toWords = this.word[this.toLn];
  }
  test (value: string): number {
    let mistakesMin = Infinity;
    let similarityWord = '';
    value = TranslationModel.clearText(value);

    this.toWords.map(word => {
      const mistakesCount = StringHelper.levenshteinenator(value, TranslationModel.clearText(word));

      if (mistakesCount < mistakesMin) {
        mistakesMin = mistakesCount;
        similarityWord = word;
      }
    });
    return Math.ceil((Math.max(0, similarityWord.length - mistakesMin) * 10 / similarityWord.length));
  }
}
