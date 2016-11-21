import { BrowserModule }  from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule }   from "@angular/forms";
import { NgSemanticModule } from "ng-semantic";

import { AppComponent } from "./components/app/app.component";
import { DataService } from "./services/app.data.service";
import { EntryFormComponent } from "./components/entry.form/entry-form.component";
import { EntryFormItemComponent } from "./components/entry.form.item/entry-form.item.component";
import { EntryStore } from "./services/app.state";
import { SearchPipe } from "./components/pipes/search.pipe";

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
