import { WordModel } from './word';

export class DictionaryModel {
    id: string;
    ln1: string;
    ln2: string;
    words: Array<WordModel> = [];
}
