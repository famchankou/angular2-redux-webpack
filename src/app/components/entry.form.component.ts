import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { addEntry } from '../actions/entry.actions';
import { EntryStore, DEFAULT_ENTRIES } from "../services/app.state";

@Component({
    selector: 'entry-form',
    templateUrl: '../views/entry.form.html'
})

export class EntryFormComponent implements OnInit {
    
    public newRecord: string;

    public constructor(private _store: EntryStore) { }

    public ngOnInit(): void {
        for (let entry of DEFAULT_ENTRIES) {
            this._store.dispatch(addEntry(entry.record));
        }
    }

    public addEntry(newRecord: string): void {
        if (!newRecord)
            return;
        this._store.dispatch(addEntry(newRecord));
        this.newRecord = null;
    }

}