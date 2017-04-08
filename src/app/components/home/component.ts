import { Component, OnInit } from '@angular/core';

import { DictionaryService } from '../../services/dictionary';
import { DictionaryModel } from '../../models/dictionary';

@Component({
  selector: 'app-home',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class HomeComponent implements OnInit {
  dictionaries: Array<DictionaryModel> = [];

  constructor (private dictionaryService: DictionaryService) {}
  ngOnInit () {
    this.dictionaryService.getDictionaries().then(dictionaries => {
      this.dictionaries = dictionaries;
      console.log('init', this.dictionaries);
    });
  }
}
