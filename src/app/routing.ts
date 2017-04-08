import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/component';
import { DictionaryComponent } from './components/dictionary/component';

const routes: Routes = [
    { path: '', redirectTo: '/dictionaries', pathMatch: 'full' },
    { path: 'dictionaries', component: HomeComponent },
    { path: 'dictionaries/:id', component: DictionaryComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRouting {}
