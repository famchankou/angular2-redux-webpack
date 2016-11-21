import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgSemanticModule } from 'ng-semantic';

import { AppComponent } from './components/app/app.component';
import { EntryFormComponent } from './components/entry.form.component/entry.form.component';
import { EntryFormItemComponent } from './components/entry.form.item.component/entry.form.item.component';
import { EntryStore } from './services/app.state';
import { DataService } from './services/app.data.service';
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
        SearchPipe,
        DataService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [ AppComponent ]
})

export class AppModule { }