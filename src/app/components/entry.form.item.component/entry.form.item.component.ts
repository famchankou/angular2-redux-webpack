import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { removeEntry, updateEntry } from '../../actions/entry.actions';
import { Entry, EntryStore, DEFAULT_ENTRIES } from "../../services/app.state";
import { DataService } from '../../services/app.data.service';

@Component({
    selector: 'entry-form-item',
    templateUrl: './templates/entry.form.item.html'
})

export class EntryFormItemComponent {

    @Input() entry: string;
    @Output() childAction: EventEmitter<any> = new EventEmitter();

    public constructor(private _dataService: DataService) { }

    public removeEntry(entry: Entry): void {
        this.childAction.emit(entry);
    }

    public updateEntry(id: string): void {
        this.childAction.emit(id);
    }

}