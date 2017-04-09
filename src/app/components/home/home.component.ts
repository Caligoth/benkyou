import { Component, OnInit } from '@angular/core';

import { DictionaryService } from '../../services/dictionary';
import { DictionaryModel } from '../../models/dictionary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dictionaries: Array<DictionaryModel> = [];

  constructor (private dictionaryService: DictionaryService) {}
  ngOnInit () {
    this.dictionaryService.getDictionaries().then(dictionaries => {
      this.dictionaries = dictionaries;
    });
  }
}
