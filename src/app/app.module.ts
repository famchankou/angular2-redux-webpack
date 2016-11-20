import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgSemanticModule } from 'ng-semantic';

import { AppComponent } from './app.component';
import { EntryFormComponent } from './components/entry.form.component';
import { EntryFormItemComponent } from './components/entry.form.item.component';
import { EntryStore } from './services/app.state';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
    imports: [
        BrowserModule,
        NgSemanticModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        EntryFormComponent,
        EntryFormItemComponent,
        SearchPipe
    ],
    providers: [
        EntryStore,
        SearchPipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [ AppComponent ]
})

export class AppModule { }