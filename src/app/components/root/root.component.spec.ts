/*import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';


import { AppRouting } from './../../routing';
import { RootComponent } from './../../components/root/component';
import { HomeComponent } from './../../components/home/component';
import { DictionaryComponent } from './../../components/dictionary/component';
import { DictionaryService } from './../../services/dictionary';

describe('RootComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        {provide: APP_BASE_HREF, useValue: '/'},
        DictionaryService
      ],
    }).compileComponents().catch();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /*it(`should have as title 'Benkyou'`, async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('It works');
  }));*/

  /*it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));*//*
});
*/