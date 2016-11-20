import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { removeEntry, updateEntry } from '../actions/entry.actions';
import { EntryStore, DEFAULT_ENTRIES } from "../services/app.state";

@Component({
    selector: 'entry-form-item',
    templateUrl: '../views/entry.form.item.html'
})

export class EntryFormItemComponent {

    @Input() entry: string;

    public constructor(private _store: EntryStore) { }

    public removeEntry(id: string): void {
        this._store.dispatch(removeEntry(id));
    }

    public updateEntry(id: string, record: string, completed: boolean): void {
        this._store.dispatch(updateEntry(id, record, completed));
    }

}