import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { List } from 'immutable';
import { addEntry } from '../../actions/entry.actions';
import { Entry, EntryStore, DEFAULT_ENTRIES } from "../../services/app.state";
import { DataService } from '../../services/app.data.service';
import { Observable } from "rxjs";

@Component({
    selector: 'entry-form',
    templateUrl: './templates/entry.form.html'
})

export class EntryFormComponent implements OnInit {

    public newRecord: string;
    public entries: List<Entry>;

    public constructor(private _dataService: DataService) { }

    public ngOnInit(): void { }

    public getNotification(evt: any): void {
        if (typeof evt !== 'object') {
            this.removeEntry(evt);
        } else {
            this.updateEntry(evt.id, evt.record, evt.completed);
        }
    }

    public addEntry(newRecord: string): void {
        if (!newRecord) return;
        this._dataService.addTaskEntry(newRecord);
        this.newRecord = null;
    }

    public removeEntry(id: string): void {
        this._dataService.removeTaskEntry(id);
    }

    public updateEntry(id: string, record: string, completed: boolean): void {
        this._dataService.updateTaskEntry(id, record, completed);
    }

}