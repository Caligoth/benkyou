import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import { DictionaryService } from '../../services/dictionary';
import { DictionaryModel } from '../../models/dictionary';
import { TranslationModel } from '../../models/translation';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  dictionary: DictionaryModel = null;
  translation: TranslationModel = null;
  form: FormGroup;
  score: number = null;
  scoreCurrent: number = 0;
  scoreMax: number = 0;

  constructor (
    private dictionaryService: DictionaryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit () {
    this.form = new FormGroup({
      value: new FormControl('', Validators.required),
    });
    this.route.params
      .switchMap((params: Params) => this.dictionaryService.getDictionary(params['id']))
      .subscribe(dictionary => {
        if (!dictionary) {
          return this.location.back();
        }
        this.dictionary = dictionary;
        this.newTranslation();
      });
  }
  newTranslation () {
    this.translation = this.dictionary.getRandomWord().getRandomTranslation();
    this.form.controls['value'].patchValue('');
    this.score = null;
  }
  testTranslation () {
    if (this.score === null && this.form.valid) {
      this.score = this.translation.test(this.form.controls['value'].value);
      this.scoreCurrent += this.score;
      this.scoreMax += 10;
    } else {
      this.newTranslation();
    }
  }
}
