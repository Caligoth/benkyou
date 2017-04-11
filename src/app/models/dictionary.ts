import { WordModel } from './word';
import { ArrayHelper } from '../helpers/array';

export class DictionaryModel {
  id: string;
  ln1: string;
  ln2: string;
  words: Array<WordModel> = [];
  copy (dictionaryData: DictionaryModel) {
    this.id = dictionaryData.id;
    this.ln1 = dictionaryData.ln1;
    this.ln2 = dictionaryData.ln2;
    dictionaryData.words.map(wordData => {
      const word = new WordModel();
      word.copy(wordData);
      this.words.push(word);
    });
  }
  getRandomWord (): WordModel {
    return <WordModel> ArrayHelper.getRandomElement(this.words);
  }
}
