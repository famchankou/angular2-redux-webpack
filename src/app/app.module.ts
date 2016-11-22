import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { NgSemanticModule } from 'ng-semantic';
import { AppComponent } from './components/app/app.component';
import { EntryFormItemComponent } from './components/entry-form-item/entry-form-item.component';
import { EntryFormComponent } from './components/entry-form/entry-form.component';
import { SearchPipe } from './components/pipes/search.pipe';
import { DataService } from './services/app-data.service';
import { EntryStore } from './services/app-state';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        EntryFormComponent,
        EntryFormItemComponent,
        SearchPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgSemanticModule,
    ],
    providers: [
        EntryStore,
        SearchPipe,
        DataService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }
