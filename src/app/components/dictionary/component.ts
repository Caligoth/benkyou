import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { DictionaryService } from '../../services/dictionary';
import { DictionaryModel } from '../../models/dictionary';


@Component({
  selector: 'app-dictionary',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DictionaryComponent implements OnInit {
  dictionary: DictionaryModel = null;

  constructor (
    private dictionaryService: DictionaryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit () {
    this.route.params
      .switchMap((params: Params) => this.dictionaryService.getDictionary(params['id']))
      .subscribe(dictionary => {
        if (!dictionary) {
          return this.location.back();
        }
        this.dictionary = dictionary;
        console.log(this.dictionary);
      });
  }
}
