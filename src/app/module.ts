import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RootComponent } from './components/root/component';

import { AppRouting } from './routing';
import { HomeComponent } from './components/home/component';
import { DictionaryComponent } from './components/dictionary/component';
import { DictionaryService } from './services/dictionary';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  declarations: [
    RootComponent,
    HomeComponent,
    DictionaryComponent
  ],
  providers: [
    DictionaryService
  ],
  bootstrap: [ RootComponent ]
})
export class AppModule { }
