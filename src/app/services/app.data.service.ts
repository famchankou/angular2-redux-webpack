import { Injectable } from '@angular/core';
import { List } from 'immutable';
import {addEntry, removeEntry, updateEntry} from '../actions/entry.actions';
import { EntryStore, Entry, DEFAULT_ENTRIES } from "./app.state";

@Injectable()
export class DataService {

    public constructor(private _store: EntryStore) {
        this.loadDefaultData();
    }

    public addTaskEntry(newRecord: string): void {
        this._store.dispatch(addEntry(newRecord));
    }

    public removeTaskEntry(id: string): void {
        this._store.dispatch(removeEntry(id));
    }

    public updateTaskEntry(id: string, record: string, completed: boolean): void {
        this._store.dispatch(updateEntry(id, record, completed));
    }

    public getEntries(): List<Entry> {
        return this._store.entries;
    }

    public loadDefaultData(): void {
        DEFAULT_ENTRIES.forEach(entry => this.addTaskEntry(entry.record));
    }
}