import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppRouting } from './routing';
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { DictionaryService } from './services/dictionary';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouting
  ],
  declarations: [
    RootComponent,
    HomeComponent,
    DictionaryComponent
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    DictionaryService
  ],
  bootstrap: [ RootComponent ]
})
export class AppModule { }
