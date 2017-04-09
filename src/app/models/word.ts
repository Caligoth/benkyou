import { TranslationModel } from './translation';
import { NumberHelper } from '../helpers/number';

export class WordModel {
  ln1: Array<string>;
  ln2: Array<string>;
  notes: string;
  copy(word: WordModel) {
    this.ln1 = word.ln1;
    this.ln2 = word.ln2;
    this.notes = word.notes;
  }
  getRandomTranslation (): TranslationModel {
    const lnNumber = NumberHelper.getRandomInt(1,2);
    const fromLn = 'ln' + lnNumber;
    const toLn = 'ln' + (lnNumber === 1 ? 2 : 1);

    return new TranslationModel(this, fromLn, toLn);
  }
}
