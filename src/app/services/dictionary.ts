import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { DictionaryModel } from '../models/dictionary';

@Injectable()
export class DictionaryService {
  dictionaries: DictionaryModel[] = new Array<DictionaryModel>();

  constructor (private http: Http) {}
  getDictionaries (): Promise<Array<DictionaryModel>> {
    if (this.dictionaries.length > 0) {
      return Promise.resolve(this.dictionaries);
    }
    return this.http.request('./data/dictionaries.json')
      .toPromise()
      .then((dictionariesResponse) => {
        return this.getDictionaryFiles(dictionariesResponse.json(), 0, this.dictionaries);
      });
  }
  private getDictionaryFiles (files: Array<string>, index: number, dictionaries: DictionaryModel[]): Promise<Array<DictionaryModel>> {
    if (index < files.length) {
      return this.http.request('./data/' + files[index])
        .toPromise()
        .then((dictionaryResponse) => {
          const dictionary = new DictionaryModel;
          dictionary.copy(dictionaryResponse.json());
          dictionaries.push(dictionary);
          return this.getDictionaryFiles(files, index + 1, dictionaries);
        });
    }
    return Promise.resolve(dictionaries);
  }
  getDictionary (id: string): Promise<DictionaryModel> {
    return this.getDictionaries().then(dictionaries => {
      return Promise.resolve(dictionaries.find(dictionary => {
        return dictionary.id === id;
      }));
    });
  }
}
