import { Component } from '@angular/core';
import { List } from 'immutable';
import { DataService, Entry } from '../index';

@Component({
    selector: 'entry-form',
    templateUrl: './templates/entry-form.html',
    styles: [require('./less/entry-form.less')]
})

export class EntryFormComponent {

    public newRecord: string;
    public entries: List<Entry>;

    public constructor(private _dataService: DataService) { }

    public getRemoveEntryAction(id: string): void {
        this.removeEntry(id);
    }

    public getUpdateEntryAction(entry: Entry): void {
        this.updateEntry(entry.id, entry.record, entry.completed);
    }

    public addEntry(newRecord: string): void {
        if (newRecord) {
            this._dataService.addTaskEntry(newRecord);
            this.newRecord = null;
        }
    }

    public removeEntry(id: string): void {
        this._dataService.removeTaskEntry(id);
    }

    public updateEntry(id: string, record: string, completed: boolean): void {
        this._dataService.updateTaskEntry(id, record, completed);
    }

}
